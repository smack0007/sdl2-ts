// This file is auto generated. To update the file make changes to the code generator.

import * as SDL_enums from "./src/SDL/enums.ts";
import * as SDL_events from "./src/SDL/events.ts";
import * as SDL_functionMacros from "./src/SDL/functionMacros.ts";
import * as SDL_functions from "./src/SDL/functions.ts";
import * as SDL_keycode from "./src/SDL/keycode.ts";
import * as SDL_pixels from "./src/SDL/pixels.ts";
import * as SDL_structs from "./src/SDL/structs.ts";

export const SDL = {
  ...SDL_enums,
  ...SDL_events,
  ...SDL_functionMacros,
  ...SDL_functions,
  ...SDL_keycode,
  ...SDL_pixels,
  ...SDL_structs,
};

export * from "./src/boxedArray.ts";
export * from "./src/boxedValue.ts";
export * from "./src/memory.ts";
export * from "./src/pointer.ts";
export * from "./src/structs.ts";

import type {
  BlitMap,
  Keysym,
  PixelFormat,
  Point,
  Rect,
  Renderer,
  RendererInfo,
  RWops,
  Surface,
  Texture,
  Window,
} from "./src/SDL/structs.ts";

import type { Constructor, PrimitiveType, RWMode, TypedArray } from "./src/types.ts";

export type {
  BlitMap,
  Constructor,
  Keysym,
  PixelFormat,
  Point,
  PrimitiveType,
  Rect,
  Renderer,
  RendererInfo,
  RWMode,
  RWops,
  Surface,
  Texture,
  TypedArray,
  Window,
};
