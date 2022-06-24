import { BoxedArray, BoxedValue, Memory, Point, Pointer, Renderer, SDL, Window } from "../../mod.ts";
import { ASSETS_PATH, joinPath, SDL_LIB_PATH } from "../paths.ts";

const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;

function main(): number {
  SDL.Init(SDL.INIT_VIDEO, SDL_LIB_PATH);

  const window = BoxedValue.create<Window>(SDL.Window);
  const renderer = BoxedValue.create<Renderer>(SDL.Renderer);

  SDL.CreateWindowAndRenderer(
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    SDL.WINDOW_SHOWN,
    Pointer.of(window),
    Pointer.of(renderer),
  );

  if (window.isNull) {
    console.error(`Failed to create window: ${SDL.GetError()}`);
    return 1;
  }

  if (renderer.isNull) {
    console.error(`Failed to create renderer: ${SDL.GetError()}`);
    return 1;
  }

  console.info("window", window);
  console.info("renderer", renderer);

  const rendererInfo = new SDL.RendererInfo();
  if (SDL.GetRendererInfo(renderer, Pointer.of(rendererInfo)) != 0) {
    console.error(`Failed to get renderer info: ${SDL.GetError()}`);
    return 1;
  }

  console.info(rendererInfo.name);
  console.info(rendererInfo.max_texture_width);
  console.info(rendererInfo.max_texture_height);
  console.info((rendererInfo.flags & SDL.RENDERER_ACCELERATED) === SDL.RENDERER_ACCELERATED);

  SDL.SetRenderDrawColor(renderer, 0, 0, 0, 255);
  SDL.RenderClear(renderer);
  SDL.RenderPresent(renderer);
  SDL.RenderFlush(renderer);

  const denoSurface = SDL.LoadBMP(joinPath(ASSETS_PATH, "jurassicDeno.bmp"));
  const srcRect = new SDL.Rect(0, 0, denoSurface.value.w, denoSurface.value.h);
  const destRect = new SDL.Rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  const textureCenter = new SDL.Point(denoSurface.value.w / 2, denoSurface.value.h / 2);
  let textureRotation = 0;
  const texture = SDL.CreateTextureFromSurface(renderer, denoSurface);
  SDL.FreeSurface(denoSurface);

  if (texture.isNull) {
    console.error(`Failed to create texture: ${SDL.GetError()}`);
    return 1;
  }

  const points = BoxedArray.create(SDL.Point, 4);
  points.array[0].x = 0;
  points.array[0].y = 0;
  points.array[1].x = 1;
  points.array[1].y = 0;
  points.array[2].x = 1;
  points.array[2].y = 1;
  points.array[3].x = 0;
  points.array[3].y = 1;

  const numkeys = BoxedValue.create<number>(Number);

  const event = new SDL.Event();
  let done = false;
  while (!done) {
    while (SDL.PollEvent(Pointer.of(event)) != 0) {
      if (event.type === SDL.QUIT) {
        done = true;
        break;
      }
    }

    if (done) {
      break;
    }

    const state = SDL.GetKeyboardState(numkeys);
    console.info(numkeys.value, Memory.readUint8(state, SDL.SCANCODE_ESCAPE));

    SDL.SetRenderDrawColor(renderer, 0, 0, 0, 255);
    SDL.RenderClear(renderer);

    textureRotation += 0.1;
    SDL.RenderCopyEx(
      renderer,
      texture,
      Pointer.of(srcRect),
      Pointer.of(destRect),
      textureRotation,
      Pointer.of(textureCenter),
      SDL.FLIP_NONE,
    );

    SDL.SetRenderDrawColor(renderer, 255, 0, 0, 255);
    const rect = new SDL.Rect(100, 100, 200, 400);
    SDL.RenderDrawPoints(renderer, points as unknown as Pointer<Point>, 4);
    // SDL.RenderDrawLine(renderer, 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    SDL.RenderFillRect(renderer, Pointer.of(rect));
    SDL.SetRenderDrawColor(renderer, 0, 0, 255, 255);
    SDL.RenderDrawRect(renderer, Pointer.of(rect));

    SDL.RenderPresent(renderer);
    SDL.RenderFlush(renderer);

    SDL.Delay(16);
  }

  SDL.DestroyTexture(texture);
  SDL.DestroyRenderer(renderer);
  SDL.DestroyWindow(window);
  SDL.Quit();

  return 0;
}

Deno.exit(main());
