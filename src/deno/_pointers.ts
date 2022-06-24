import { TypedArray } from "../types.ts";
import { PointerInternal } from "../_pointer.ts";
import { ENDIANNESS } from "../_utils.ts";

export const NULL_POINTER = new Deno.UnsafePointer(0n);

export class PlatformPointer<T> implements PointerInternal<T> {
  public get isPlatformPointer(): boolean {
    return true;
  }

  public _pointer: Deno.UnsafePointer;
  private readonly _constructor: (new (pointer: PlatformPointer<T>) => T) | null = null;
  private _value: T | null = null;

  constructor(
    pointer: Deno.UnsafePointer | bigint,
    constructorOrValue: (new (pointer: PlatformPointer<T>) => T) | T | null = null,
  ) {
    console.info("PlatformPointer.constructor", pointer);

    if (typeof pointer === "bigint") {
      pointer = new Deno.UnsafePointer(pointer);
    }

    this._pointer = pointer;

    if (constructorOrValue) {
      if (typeof constructorOrValue === "function") {
        this._constructor = constructorOrValue as (new (pointer: PlatformPointer<T>) => T);
      } else {
        this._value = constructorOrValue;
      }
    }
  }

  public static of<T>(memory: TypedArray, value?: T): PlatformPointer<T> {
    return new PlatformPointer(Deno.UnsafePointer.of(memory), value);
  }

  public get isNull(): boolean {
    return this._pointer.value === 0n;
  }

  public get address(): bigint {
    return this._pointer.value;
  }

  public get value(): T {
    if (this._value === null) {
      if (!this._constructor) {
        throw new Error("Unable to create type pointed to by pointer as no constructor was provided.");
      }

      this._value = new this._constructor(this);
    }

    return this._value as T;
  }

  public setValue(value: T): void {
    this._value = value;
  }
}

export class PlatformDataView<T> {
  private static DATA_MUST_BE_ARRAY_BUFFER_ERROR = "data must be an instance of ArrayBuffer in order to set values.";

  public static LITTLE_ENDIAN = ENDIANNESS === "LE";

  private _view: globalThis.DataView | Deno.UnsafePointerView;

  constructor(
    private _data: Uint8Array | PlatformPointer<T>,
  ) {
    if (this._data instanceof Uint8Array) {
      this._view = new globalThis.DataView(this._data.buffer, this._data.byteOffset, this._data.byteLength);
    } else {
      this._view = new Deno.UnsafePointerView(this._data._pointer);
    }
  }

  public getArray(byteLength: number, byteOffset: number): Uint8Array {
    if (this._view instanceof globalThis.DataView) {
      throw new Error("Not implemented.");
    } else {
      return new Uint8Array(this._view.getArrayBuffer(byteLength, byteOffset));
    }
  }

  public getBigInt64(byteOffset: number): bigint {
    return this._view.getBigInt64(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getBigUint64(byteOffset: number): bigint {
    return this._view.getBigUint64(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getInt8(byteOffset: number): number {
    return this._view.getInt8(byteOffset);
  }

  public getInt16(byteOffset: number): number {
    return this._view.getInt16(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getInt32(byteOffset: number): number {
    return this._view.getInt32(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getFloat32(byteOffset: number): number {
    return this._view.getFloat32(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getFloat64(byteOffset: number): number {
    return this._view.getFloat64(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getUint8(byteOffset: number): number {
    return this._view.getUint8(byteOffset);
  }

  public getUint16(byteOffset: number): number {
    return this._view.getUint16(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public getUint32(byteOffset: number): number {
    return this._view.getUint32(byteOffset, PlatformDataView.LITTLE_ENDIAN);
  }

  public setInt32(byteOffset: number, value: number): void {
    if (!(this._view instanceof globalThis.DataView)) {
      throw new Error(PlatformDataView.DATA_MUST_BE_ARRAY_BUFFER_ERROR);
    }
    this._view.setInt32(byteOffset, value, PlatformDataView.LITTLE_ENDIAN);
  }

  public setUint8(byteOffset: number, value: number): void {
    if (!(this._view instanceof globalThis.DataView)) {
      throw new Error(PlatformDataView.DATA_MUST_BE_ARRAY_BUFFER_ERROR);
    }
    this._view.setUint8(byteOffset, value);
  }

  public setUint32(byteOffset: number, value: number): void {
    if (!(this._view instanceof globalThis.DataView)) {
      throw new Error(PlatformDataView.DATA_MUST_BE_ARRAY_BUFFER_ERROR);
    }
    this._view.setUint32(byteOffset, value, PlatformDataView.LITTLE_ENDIAN);
  }
}
