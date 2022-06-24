import { Struct } from "./_structs.ts";

export type { Struct } from "./_structs.ts";

export type AllocatableStructConstructor<T extends AllocatableStruct> = {
  new (data: Uint8Array): T;
  SIZE_IN_BYTES: number;
};

// deno-lint-ignore no-empty-interface
export interface AllocatableStruct extends Struct {}
