import { PlatformDataView, PlatformPointer } from "../mod.deno.ts";
import { Struct } from "./structs.ts";
import { PrimitiveType } from "./types.ts";
import { PointerInternal } from "./_pointer.ts";
import { DATA_VIEW_METHODS, sizeof } from "./_utils.ts";

export type BoxableValue = number | PrimitiveType | Struct;

export type BoxableValueConstructor = NumberConstructor | symbol | (new () => Struct);

export interface BoxedValueInternal {
  _data: Uint8Array;
  _platformPointer: PlatformPointer<unknown>;
  
  setValue(value: unknown): void;
}

export function isBoxedValue(value: unknown): value is BoxedValueInternal {
  return (value instanceof BoxedValueImpl);
}

export class BoxedValueImpl<T extends BoxableValue> implements PointerInternal<T> {
  private readonly _data: Uint8Array;
  private readonly _platformPointer: PlatformPointer<T>;
  private readonly _view: PlatformDataView<T>;
  private readonly _viewMethod: (byteOffset: number) => T;

  constructor(_constructor: BoxableValueConstructor) {
    const dataLength = sizeof(_constructor);

    this._data = new Uint8Array(dataLength);
    this._platformPointer = PlatformPointer.of<T>(this._data);
    this._view = new PlatformDataView(this._data);

    const sizeInBytes = _constructor as unknown as { SIZE_IN_BYTES: number };
    if (sizeInBytes.SIZE_IN_BYTES !== undefined) {
      this._viewMethod = this._view["getBigUint64"].bind(this._view) as unknown as (byteOffset: number) => T;
    } else {
      const viewMethodName = DATA_VIEW_METHODS.get(_constructor)!;
      this._viewMethod = this._view[viewMethodName].bind(this._view) as (byteOffset: number) => T;
    }
  }

  // Necessary for BoxedValue to behave as if it's a PlatformPointer.
  public get _pointer(): unknown {
    return this._platformPointer._pointer;
  }

  public get isPlatformPointer(): boolean {
    return false;
  }

  public get isNull(): boolean {
    return this._platformPointer.isNull;
  }

  public get address(): bigint {
    return this._platformPointer.address;
  }

  public get value(): T {
    return this._viewMethod(0);
  }

  public setValue(value: T): void {
    this._platformPointer.setValue(value);
  }
}
