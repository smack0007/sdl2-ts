import { PlatformPointer } from "platform";
import { BoxableValue } from "./boxedValue.ts";
import { Pointer } from "./pointer.ts";
import { AllocatableStruct, AllocatableStructConstructor } from "./structs.ts";
import { BoxedArrayImpl } from "./_boxedArray.ts";

export interface BoxedArray<T extends BoxableValue> extends Pointer<T[]> {
  array: T[];
}

export const BoxedArray = {
  create: function <T extends AllocatableStruct>(
    _constructor: AllocatableStructConstructor<T>,
    length: number,
  ): BoxedArray<T> {
    if (length <= 0) {
      throw new Error("length must be > 0.");
    }

    const array = new Array<T>(length);
    const data = new Uint8Array(_constructor.SIZE_IN_BYTES * length);

    for (let i = 0; i < length; i++) {
      const memoryOffset = new Uint8Array(data.buffer, _constructor.SIZE_IN_BYTES * i, _constructor.SIZE_IN_BYTES);
      array[i] = new _constructor(memoryOffset);
    }

    return new BoxedArrayImpl<T>(array, data, PlatformPointer.of(data));
  },
} as const;
