import { PlatformDataView, PlatformPointer } from "platform";

import { Pointer } from "./pointer.ts";
import { u8 } from "./types.ts";

export class Memory {
  public static readUint8<T>(pointer: Pointer<T>, byteOffset: number): u8 {
    // TODO: See if we can cache this somewhere.
    const dataView = new PlatformDataView(pointer as PlatformPointer<T>);
    return dataView.getUint8(byteOffset);
  }
}
