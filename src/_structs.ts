import { Pointer } from "./pointer.ts";

// deno-lint-ignore no-empty-interface
export interface Struct {}

export interface StructInternal<T extends Struct> {
  _data: Uint8Array | Pointer<T>;
}

export function isStruct<T extends Struct>(value: unknown): value is T & StructInternal<T> {
  return ("_data" in (value as Struct));
}
