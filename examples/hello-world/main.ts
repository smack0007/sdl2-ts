import { Pointer, SDL } from "../../mod.ts";
import { SDL_LIB_PATH } from "../paths.ts";

SDL.Init(SDL.INIT_VIDEO, SDL_LIB_PATH);

console.info("SDL Initialized.");
console.info(`${SDL.GetSystemRAM()} MB RAM available.`);

const window = SDL.CreateWindow(
  "Hello World!",
  SDL.WINDOWPOS_CENTERED,
  SDL.WINDOWPOS_CENTERED,
  1024,
  768,
  SDL.WINDOW_SHOWN | SDL.WINDOW_RESIZABLE,
);

if (window.isNull) {
  console.error(`Failed to create window: ${SDL.GetError()}`);
  Deno.exit(1);
}

let surface = SDL.GetWindowSurface(window);

if (surface.isNull) {
  console.error(`Failed to create surface: ${SDL.GetError()}`);
  Deno.exit(1);
}

console.info(surface.value.flags);
console.info("Width", surface.value.w, "Height", surface.value.h);
SDL.FillRect(
  surface,
  null,
  SDL.MapRGB(surface.value.format, 0x64, 0x95, 0xED),
);
SDL.UpdateWindowSurface(window);

const event = new SDL.Event();

SDL.MinimizeWindow(window);
SDL.RestoreWindow(window);

let done = false;
while (!done) {
  while (SDL.PollEvent(Pointer.of(event)) != 0) {
    if (event.type === SDL.QUIT) {
      console.info("Done.");
      done = true;
    } else if (event.type === SDL.WINDOWEVENT) {
      if (event.window.event === SDL.WINDOWEVENT_SHOWN) {
        console.info(`Window ${event.window.windowID} shown.`);
      } else if (event.window.event === SDL.WINDOWEVENT_MINIMIZED) {
        console.info(`Window ${event.window.windowID} minimized.`);
      } else if (event.window.event === SDL.WINDOWEVENT_RESTORED) {
        console.info(`Window ${event.window.windowID} restored.`);
      } else if (event.window.event === SDL.WINDOWEVENT_RESIZED) {
        console.info(`Window ${event.window.windowID} resized: ${event.window.data1} ${event.window.data2}`);
        surface = SDL.GetWindowSurface(window);
        SDL.FillRect(
          surface,
          null,
          SDL.MapRGB(surface.value.format, 0x64, 0x95, 0xED),
        );
        SDL.UpdateWindowSurface(window);
      }
    } else if (event.type === SDL.KEYDOWN) {
      console.info(`KeyDown: ${event.key.keysym.scancode} "${SDL.GetScancodeName(event.key.keysym.scancode)}"`);
    }
  }
  SDL.Delay(100);
  console.info(SDL.GetTicks64());
}

console.info("Destroying SDL Window...");
SDL.DestroyWindow(window);
console.info("SDL Window destoryed.");

SDL.Quit();
console.info("SDL Shutdown.");
