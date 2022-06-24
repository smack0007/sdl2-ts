import { PlatformPointer } from "platform";
import { AllocatableStruct } from "./structs.ts";
import { PointerInternal } from "./_pointer.ts";

export interface BoxedArrayInternal {
  _data: Uint8Array;
  _platformPointer: PlatformPointer<unknown>;

  setValue(value: unknown): void;
}

export function isBoxedArray(value: unknown): value is BoxedArrayInternal {
  return (value instanceof BoxedArrayImpl);
}

export class BoxedArrayImpl<T extends AllocatableStruct> implements PointerInternal<T[]> {
  constructor(
    public readonly array: T[],
    public readonly _data: Uint8Array,
    public readonly _pointer: PlatformPointer<T[]>,
  ) {
  }

  public get isPlatformPointer(): boolean {
    return false;
  }

  public get isNull(): boolean {
    return this._pointer.isNull;
  }

  public get address(): bigint {
    return this._pointer.address;
  }

  public get value(): T[] {
    return this.array;
  }

  public setValue(value: T[]): void {
  }
}
