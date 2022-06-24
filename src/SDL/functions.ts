// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { fromPlatformString, NULL_POINTER, PlatformDataView, PlatformPointer, toPlatformString } from "platform";
import { Event } from "./events.ts";
import {
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
} from "./structs.ts";
import { Symbols, symbols } from "./_symbols.ts";
import { f32, f64, i16, i32, i64, i8, RWMode, TypedArray, u16, u32, u64, u8 } from "../types.ts";
import { Pointer } from "../pointer.ts";

interface SDLContext {
  library: Deno.DynamicLibrary<Symbols>;
  symbols: Deno.StaticForeignLibraryInterface<Symbols>;
}

const context: SDLContext = {
  // We don't want to check in every function if the
  // library has been loaded so the following are
  // set to null even though the type says it shouldn't
  // be null.
  library: null!,
  symbols: null!,
};

export function BlitScaled(
  src: Pointer<Surface>,
  srcrect: Pointer<Rect> | null,
  dst: Pointer<Surface>,
  dstrect: Pointer<Rect> | null,
): i32 {
  return context.symbols.SDL_UpperBlitScaled(
    (src as PlatformPointer<Surface>)._pointer,
    (srcrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    (dst as PlatformPointer<Surface>)._pointer,
    (dstrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
  ) as i32;
}

export function BlitSurface(
  src: Pointer<Surface>,
  srcrect: Pointer<Rect> | null,
  dst: Pointer<Surface>,
  dstrect: Pointer<Rect> | null,
): i32 {
  return context.symbols.SDL_UpperBlit(
    (src as PlatformPointer<Surface>)._pointer,
    (srcrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    (dst as PlatformPointer<Surface>)._pointer,
    (dstrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
  ) as i32;
}

export function CreateRenderer(
  window: Pointer<Window>,
  index: i32,
  flags: u32,
): Pointer<Renderer> {
  return new PlatformPointer<Renderer>(context.symbols.SDL_CreateRenderer(
    (window as PlatformPointer<Window>)._pointer,
    index,
    flags,
  ) as Deno.UnsafePointer);
}

export function CreateRGBSurfaceFrom(
  pixels: TypedArray,
  width: i32,
  height: i32,
  depth: i32,
  pitch: i32,
  Rmask: u32,
  Gmask: u32,
  Bmask: u32,
  Amask: u32,
): Pointer<Surface> {
  return new PlatformPointer<Surface>(
    context.symbols.SDL_CreateRGBSurfaceFrom(
      Deno.UnsafePointer.of(pixels),
      width,
      height,
      depth,
      pitch,
      Rmask,
      Gmask,
      Bmask,
      Amask,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function CreateRGBSurfaceWithFormat(
  flags: u32,
  width: i32,
  height: i32,
  depth: i32,
  format: u32,
): Pointer<Surface> {
  return new PlatformPointer<Surface>(
    context.symbols.SDL_CreateRGBSurfaceWithFormat(
      flags,
      width,
      height,
      depth,
      format,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function CreateTexture(
  renderer: Pointer<Renderer>,
  format: u32,
  access: i32,
  w: i32,
  h: i32,
): Pointer<Texture> {
  return new PlatformPointer<Texture>(context.symbols.SDL_CreateTexture(
    (renderer as PlatformPointer<Renderer>)._pointer,
    format,
    access,
    w,
    h,
  ) as Deno.UnsafePointer);
}

export function CreateTextureFromSurface(
  renderer: Pointer<Renderer>,
  surface: Pointer<Surface>,
): Pointer<Texture> {
  return new PlatformPointer<Texture>(context.symbols.SDL_CreateTextureFromSurface(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (surface as PlatformPointer<Surface>)._pointer,
  ) as Deno.UnsafePointer);
}

export function CreateWindow(
  title: string,
  x: i32,
  y: i32,
  w: i32,
  h: i32,
  flags: u32,
): Pointer<Window> {
  return new PlatformPointer<Window>(context.symbols.SDL_CreateWindow(
    toPlatformString(title),
    x,
    y,
    w,
    h,
    flags,
  ) as Deno.UnsafePointer);
}

export function CreateWindowAndRenderer(
  width: i32,
  height: i32,
  window_flags: u32,
  window: Pointer<Pointer<Window>>,
  renderer: Pointer<Pointer<Renderer>>,
): i32 {
  const windowDoublePointer = new BigUint64Array(1);
  const rendererDoublePointer = new BigUint64Array(1);

  const result = context.symbols.SDL_CreateWindowAndRenderer(
    width,
    height,
    window_flags,
    windowDoublePointer,
    rendererDoublePointer,
  ) as i32;

  console.info(new PlatformPointer(windowDoublePointer[0]));

  (window as PlatformPointer<Pointer<Window>>).setValue(new PlatformPointer(windowDoublePointer[0]));
  (renderer as PlatformPointer<Pointer<Renderer>>).setValue(new PlatformPointer(rendererDoublePointer[0]));

  console.info("CreateWindowAndRenderer", window);

  return result;
}

export function Delay(
  ms: u32,
): void {
  context.symbols.SDL_Delay(
    ms,
  );
}

export function DestroyRenderer(
  renderer: Pointer<Renderer>,
): void {
  context.symbols.SDL_DestroyRenderer(
    (renderer as PlatformPointer<Renderer>)._pointer,
  );
}

export function DestroyTexture(
  texture: Pointer<Texture>,
): void {
  context.symbols.SDL_DestroyTexture(
    (texture as PlatformPointer<Texture>)._pointer,
  );
}

export function DestroyWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_DestroyWindow(
    (window as PlatformPointer<Window>)._pointer,
  );
}

export function FillRect(
  dst: Pointer<Surface>,
  rect: Pointer<Rect> | null,
  color: u32,
): i32 {
  return context.symbols.SDL_FillRect(
    (dst as PlatformPointer<Surface>)._pointer,
    (rect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    color,
  ) as i32;
}

export function FreeSurface(
  surface: Pointer<Surface>,
): void {
  context.symbols.SDL_FreeSurface(
    (surface as PlatformPointer<Surface>)._pointer,
  );
}

export function GetError(): string {
  return fromPlatformString(context.symbols.SDL_GetError() as Deno.UnsafePointer);
}

export function GetKeyboardState(
  numkeys: Pointer<number> | null,
): Pointer<u8[]> {
  return new PlatformPointer<u8[]>(context.symbols.SDL_GetKeyboardState(
    (numkeys as PlatformPointer<number> | null)?._pointer ?? NULL_POINTER,
  ) as Deno.UnsafePointer);
}

export function GetRendererInfo(
  renderer: Pointer<Renderer>,
  info: Pointer<RendererInfo>,
): i32 {
  return context.symbols.SDL_GetRendererInfo(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (info as PlatformPointer<RendererInfo>)._pointer,
  ) as i32;
}

export function GetScancodeFromKey(
  key: u32,
): u32 {
  return context.symbols.SDL_GetScancodeFromKey(
    key,
  ) as u32;
}

export function GetScancodeName(
  scancode: u32,
): string {
  return fromPlatformString(context.symbols.SDL_GetScancodeName(
    scancode,
  ) as Deno.UnsafePointer);
}

export function GetSystemRAM(): i32 {
  return context.symbols.SDL_GetSystemRAM() as i32;
}

export function GetTicks(): u32 {
  return context.symbols.SDL_GetTicks() as u32;
}

export function GetTicks64(): u64 {
  return context.symbols.SDL_GetTicks64() as u64;
}

export function GetWindowSurface(
  window: Pointer<Window>,
): Pointer<Surface> {
  return new PlatformPointer<Surface>(
    context.symbols.SDL_GetWindowSurface(
      (window as PlatformPointer<Window>)._pointer,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function Init(flags: number, libraryPath?: string): number {
  // TODO: Improve this logic.
  if (!libraryPath) {
    libraryPath = "libSDL2";
  }

  context.library = Deno.dlopen(libraryPath, symbols);
  context.symbols = context.library.symbols;

  return context.symbols.SDL_Init(flags) as number;
}

export function LoadBMP_RW(
  src: Pointer<RWops>,
  freesrc: i32,
): Pointer<Surface> {
  return new PlatformPointer<Surface>(
    context.symbols.SDL_LoadBMP_RW(
      (src as PlatformPointer<RWops>)._pointer,
      freesrc,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function LockSurface(
  surface: Pointer<Surface>,
): i32 {
  return context.symbols.SDL_LockSurface(
    (surface as PlatformPointer<Surface>)._pointer,
  ) as i32;
}

export function MapRGB(
  format: Pointer<PixelFormat>,
  r: u8,
  g: u8,
  b: u8,
): u32 {
  return context.symbols.SDL_MapRGB(
    (format as PlatformPointer<PixelFormat>)._pointer,
    r,
    g,
    b,
  ) as u32;
}

export function MapRGBA(
  format: Pointer<PixelFormat>,
  r: u8,
  g: u8,
  b: u8,
  a: u8,
): u32 {
  return context.symbols.SDL_MapRGBA(
    (format as PlatformPointer<PixelFormat>)._pointer,
    r,
    g,
    b,
    a,
  ) as u32;
}

export function MaximizeWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_MaximizeWindow(
    (window as PlatformPointer<Window>)._pointer,
  );
}

export function MinimizeWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_MinimizeWindow(
    (window as PlatformPointer<Window>)._pointer,
  );
}

export function PollEvent(
  event: Pointer<Event>,
): i32 {
  return context.symbols.SDL_PollEvent(
    (event as PlatformPointer<Event>)._pointer,
  ) as i32;
}

export function Quit(): void {
  context.symbols.SDL_Quit();
  context.library.close();
}

export function RenderClear(
  renderer: Pointer<Renderer>,
): i32 {
  return context.symbols.SDL_RenderClear(
    (renderer as PlatformPointer<Renderer>)._pointer,
  ) as i32;
}

export function RenderCopy(
  renderer: Pointer<Renderer>,
  texture: Pointer<Texture>,
  srcrect: Pointer<Rect> | null,
  dstrect: Pointer<Rect> | null,
): i32 {
  return context.symbols.SDL_RenderCopy(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (texture as PlatformPointer<Texture>)._pointer,
    (srcrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    (dstrect as PlatformPointer<Rect> | null)?._pointer ?? NULL_POINTER,
  ) as i32;
}

export function RenderCopyEx(
  renderer: Pointer<Renderer>,
  texture: Pointer<Texture>,
  srcrect: Pointer<Rect>,
  dstrect: Pointer<Rect>,
  angle: f64,
  center: Pointer<Point>,
  flip: u32,
): i32 {
  return context.symbols.SDL_RenderCopyEx(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (texture as PlatformPointer<Texture>)._pointer,
    (srcrect as PlatformPointer<Rect>)._pointer,
    (dstrect as PlatformPointer<Rect>)._pointer,
    angle,
    (center as PlatformPointer<Point>)._pointer,
    flip,
  ) as i32;
}

export function RenderDrawLine(
  renderer: Pointer<Renderer>,
  x1: i32,
  y1: i32,
  x2: i32,
  y2: i32,
): i32 {
  return context.symbols.SDL_RenderDrawLine(
    (renderer as PlatformPointer<Renderer>)._pointer,
    x1,
    y1,
    x2,
    y2,
  ) as i32;
}

export function RenderDrawLines(
  renderer: Pointer<Renderer>,
  points: Pointer<Point>,
  count: i32,
): i32 {
  return context.symbols.SDL_RenderDrawLines(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (points as PlatformPointer<Point>)._pointer,
    count,
  ) as i32;
}

export function RenderDrawPoint(
  renderer: Pointer<Renderer>,
  x: i32,
  y: i32,
): i32 {
  return context.symbols.SDL_RenderDrawPoint(
    (renderer as PlatformPointer<Renderer>)._pointer,
    x,
    y,
  ) as i32;
}

export function RenderDrawPoints(
  renderer: Pointer<Renderer>,
  points: Pointer<Point>,
  count: i32,
): i32 {
  return context.symbols.SDL_RenderDrawPoints(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (points as PlatformPointer<Point>)._pointer,
    count,
  ) as i32;
}

export function RenderDrawRect(
  renderer: Pointer<Renderer>,
  rect: Pointer<Rect>,
): i32 {
  return context.symbols.SDL_RenderDrawRect(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (rect as PlatformPointer<Rect>)._pointer,
  ) as i32;
}

export function RenderDrawRects(
  renderer: Pointer<Renderer>,
  rects: Pointer<Rect>,
  count: i32,
): i32 {
  return context.symbols.SDL_RenderDrawRects(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (rects as PlatformPointer<Rect>)._pointer,
    count,
  ) as i32;
}

export function RenderFillRect(
  renderer: Pointer<Renderer>,
  rect: Pointer<Rect>,
): i32 {
  return context.symbols.SDL_RenderFillRect(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (rect as PlatformPointer<Rect>)._pointer,
  ) as i32;
}

export function RenderFillRects(
  renderer: Pointer<Renderer>,
  rects: Pointer<Rect>,
  count: i32,
): i32 {
  return context.symbols.SDL_RenderFillRects(
    (renderer as PlatformPointer<Renderer>)._pointer,
    (rects as PlatformPointer<Rect>)._pointer,
    count,
  ) as i32;
}

export function RenderFlush(
  renderer: Pointer<Renderer>,
): i32 {
  return context.symbols.SDL_RenderFlush(
    (renderer as PlatformPointer<Renderer>)._pointer,
  ) as i32;
}

export function RenderPresent(
  renderer: Pointer<Renderer>,
): void {
  context.symbols.SDL_RenderPresent(
    (renderer as PlatformPointer<Renderer>)._pointer,
  );
}

export function RestoreWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_RestoreWindow(
    (window as PlatformPointer<Window>)._pointer,
  );
}

export function RWFromFile(
  file: string,
  mode: RWMode,
): Pointer<RWops> {
  return new PlatformPointer<RWops>(context.symbols.SDL_RWFromFile(
    toPlatformString(file),
    toPlatformString(mode),
  ) as Deno.UnsafePointer);
}

export function SetRenderDrawColor(
  renderer: Pointer<Renderer>,
  r: u8,
  g: u8,
  b: u8,
  a: u8,
): i32 {
  return context.symbols.SDL_SetRenderDrawColor(
    (renderer as PlatformPointer<Renderer>)._pointer,
    r,
    g,
    b,
    a,
  ) as i32;
}

export function UnlockSurface(
  surface: Pointer<Surface>,
): void {
  context.symbols.SDL_UnlockSurface(
    (surface as PlatformPointer<Surface>)._pointer,
  );
}

export function UpdateWindowSurface(
  window: Pointer<Window>,
): i32 {
  return context.symbols.SDL_UpdateWindowSurface(
    (window as PlatformPointer<Window>)._pointer,
  ) as i32;
}
