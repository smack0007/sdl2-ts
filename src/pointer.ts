import { PlatformPointer } from "platform";
import { BoxedArray } from "./boxedArray.ts";
import { BoxedValue } from "./boxedValue.ts";
import { BoxedArrayInternal, isBoxedArray } from "./_boxedArray.ts";
import { BoxableValue, BoxedValueInternal, isBoxedValue } from "./_boxedValue.ts";
import { PointerInternal } from "./_pointer.ts";
import { isStruct } from "./_structs.ts";

export interface Pointer<T> {
  readonly isNull: boolean;

  readonly address: bigint;

  readonly value: T;
}

interface PointerCache<T> {
  __pointer?: Pointer<T>;
}

class BoxPointer<T extends BoxableValue> implements Pointer<BoxedValue<T> | BoxedArray<T>> {
  constructor(
    private readonly _value: BoxedValue<T> | BoxedArray<T>,
  ) {
  }

  public get isPlatformPointer(): boolean {
    return false;
  }

  public get isNull(): boolean {
    return false;
  }

  public get address(): bigint {
    return 0n;
  }

  public get value(): BoxedValue<T> | BoxedArray<T> {
    return this._value;
  }

  public setValue(value: PlatformPointer<T>): void {
    console.info("Pointer.setValue", value.address);
    (this._value as unknown as BoxedValueInternal | BoxedArrayInternal).setValue(value);
  }
}

function of<T extends BoxableValue>(value: BoxedValue<T>): Pointer<BoxedValue<T>>;
function of<T extends BoxableValue>(value: BoxedArray<T>): Pointer<BoxedArray<T>>;
function of<T>(value: T[], offset: number): Pointer<T>;
function of<T>(value: T): Pointer<T>;
function of<T>(value: BoxedValue<BoxableValue> | BoxedArray<BoxableValue> | T[] | T, offset?: number): Pointer<T> {
  if (offset === undefined) {
    offset = 0;
  }

  if (offset < 0) {
    throw new Error("offset must be >= 0.");
  }

  if (isBoxedArray(value) || isBoxedValue(value)) {
    return new BoxPointer(value as unknown as BoxedValue<T> | BoxedArray<T>) as unknown as Pointer<T>;
  } else if (isStruct<T>(value)) {
    if (value._data instanceof Uint8Array) {
      const cache = value as unknown as PointerCache<T>;

      if (cache.__pointer === undefined) {
        cache.__pointer = PlatformPointer.of(value._data, value);
      }

      return cache.__pointer;
    } else {
      return value._data;
    }
  } else {
    throw new Error("Unable to create pointer.");
  }
}

export const Pointer = {
  SIZE_IN_BYTES: 8,

  of,
} as const;
