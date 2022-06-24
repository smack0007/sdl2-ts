import { PlatformPointer } from "platform";
import { Pointer } from "./pointer.ts";

export interface PointerInternal<T> extends Pointer<T> {
  readonly isPlatformPointer: boolean;

  _pointer: unknown;

  setValue(value: T): void;
}

export function isPlatformPointer<T>(pointer: Pointer<T>): pointer is PlatformPointer<T> {
  return (pointer as PointerInternal<T>).isPlatformPointer;
}

export class ArrayPointer<T> implements PointerInternal<T> {
  public _pointer: Deno.UnsafePointer = null!;

  constructor(
    private _array: T[],
    private _offset: number,
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

  public get value(): T {
    return this._array[this._offset];
  }

  public setValue(value: T): void {
    this._array[this._offset] = value;
  }
}
