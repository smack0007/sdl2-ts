import { Pointer } from "./pointer.ts";
import { BoxableValue, BoxableValueConstructor, BoxedValueImpl } from "./_boxedValue.ts";

export type { BoxableValue, BoxableValueConstructor } from "./_boxedValue.ts";

// deno-lint-ignore no-empty-interface
export interface BoxedValue<T extends BoxableValue> extends Pointer<T> {
}

export const BoxedValue = {
  create: function <T>(constructor: BoxableValueConstructor): BoxedValue<T> {
    return new BoxedValueImpl(constructor);
  },
} as const;
