// This file is auto generated. To update the file make changes to the code generator.

// SDL_EventType
export const SDL_FIRSTEVENT = 0;
export const SDL_QUIT = 0x100;
export const SDL_APP_TERMINATING = 0x101;
export const SDL_APP_LOWMEMORY = 0x102;
export const SDL_APP_WILLENTERBACKGROUND = 0x103;
export const SDL_APP_DIDENTERBACKGROUND = 0x104;
export const SDL_APP_WILLENTERFOREGROUND = 0x105;
export const SDL_APP_DIDENTERFOREGROUND = 0x106;
export const SDL_LOCALECHANGED = 0x107;
export const SDL_DISPLAYEVENT = 0x150;
export const SDL_WINDOWEVENT = 0x200;
export const SDL_SYSWMEVENT = 0x201;
export const SDL_KEYDOWN = 0x300;
export const SDL_KEYUP = 0x301;
export const SDL_TEXTEDITING = 0x302;
export const SDL_TEXTINPUT = 0x303;
export const SDL_KEYMAPCHANGED = 0x304;
export const SDL_MOUSEMOTION = 0x400;
export const SDL_MOUSEBUTTONDOWN = 0x401;
export const SDL_MOUSEBUTTONUP = 0x402;
export const SDL_MOUSEWHEEL = 0x403;
export const SDL_JOYAXISMOTION = 0x600;
export const SDL_JOYBALLMOTION = 0x601;
export const SDL_JOYHATMOTION = 0x602;
export const SDL_JOYBUTTONDOWN = 0x603;
export const SDL_JOYBUTTONUP = 0x604;
export const SDL_JOYDEVICEADDED = 0x605;
export const SDL_JOYDEVICEREMOVED = 0x606;
export const SDL_CONTROLLERAXISMOTION = 0x650;
export const SDL_CONTROLLERBUTTONDOWN = 0x651;
export const SDL_CONTROLLERBUTTONUP = 0x652;
export const SDL_CONTROLLERDEVICEADDED = 0x653;
export const SDL_CONTROLLERDEVICEREMOVED = 0x654;
export const SDL_CONTROLLERDEVICEREMAPPED = 0x655;
export const SDL_CONTROLLERTOUCHPADDOWN = 0x656;
export const SDL_CONTROLLERTOUCHPADMOTION = 0x657;
export const SDL_CONTROLLERTOUCHPADUP = 0x658;
export const SDL_CONTROLLERSENSORUPDATE = 0x659;
export const SDL_FINGERDOWN = 0x700;
export const SDL_FINGERUP = 0x701;
export const SDL_FINGERMOTION = 0x702;
export const SDL_DOLLARGESTURE = 0x800;
export const SDL_DOLLARRECORD = 0x801;
export const SDL_MULTIGESTURE = 0x802;
export const SDL_CLIPBOARDUPDATE = 0x900;
export const SDL_DROPFILE = 0x1000;
export const SDL_DROPTEXT = 0x1001;
export const SDL_DROPBEGIN = 0x1002;
export const SDL_DROPCOMPLETE = 0x1003;
export const SDL_AUDIODEVICEADDED = 0x1100;
export const SDL_AUDIODEVICEREMOVED = 0x1101;
export const SDL_SENSORUPDATE = 0x1200;
export const SDL_RENDER_TARGETS_RESET = 0x2000;
export const SDL_RENDER_DEVICE_RESET = 0x2001;
export const SDL_POLLSENTINEL = 0x7F00;
export const SDL_USEREVENT = 0x8000;
export const SDL_LASTEVENT = 0xFFFF;

// SDL_Init
export const SDL_INIT_TIMER = 0x00000001;
export const SDL_INIT_AUDIO = 0x00000010;
export const SDL_INIT_VIDEO = 0x00000020;
export const SDL_INIT_JOYSTICK = 0x00000200;
export const SDL_INIT_HAPTIC = 0x00001000;
export const SDL_INIT_GAMECONTROLLER = 0x00002000;
export const SDL_INIT_EVENTS = 0x00004000;
export const SDL_INIT_SENSOR = 0x00008000;
export const SDL_INIT_NOPARACHUTE = 0x00100000;
export const SDL_INIT_EVERYTHING =
  (SDL_INIT_TIMER | SDL_INIT_AUDIO | SDL_INIT_VIDEO | SDL_INIT_EVENTS |
    SDL_INIT_JOYSTICK | SDL_INIT_HAPTIC | SDL_INIT_GAMECONTROLLER |
    SDL_INIT_SENSOR);

// SDL_WindowFlags
export const SDL_WINDOW_FULLSCREEN = 0x00000001;
export const SDL_WINDOW_OPENGL = 0x00000002;
export const SDL_WINDOW_SHOWN = 0x00000004;
export const SDL_WINDOW_HIDDEN = 0x00000008;
export const SDL_WINDOW_BORDERLESS = 0x00000010;
export const SDL_WINDOW_RESIZABLE = 0x00000020;
export const SDL_WINDOW_MINIMIZED = 0x00000040;
export const SDL_WINDOW_MAXIMIZED = 0x00000080;
export const SDL_WINDOW_MOUSE_GRABBED = 0x00000100;
export const SDL_WINDOW_INPUT_FOCUS = 0x00000200;
export const SDL_WINDOW_MOUSE_FOCUS = 0x00000400;
export const SDL_WINDOW_FULLSCREEN_DESKTOP =
  (SDL_WINDOW_FULLSCREEN | 0x00001000);
export const SDL_WINDOW_FOREIGN = 0x00000800;
export const SDL_WINDOW_ALLOW_HIGHDPI = 0x00002000;
export const SDL_WINDOW_MOUSE_CAPTURE = 0x00004000;
export const SDL_WINDOW_ALWAYS_ON_TOP = 0x00008000;
export const SDL_WINDOW_SKIP_TASKBAR = 0x00010000;
export const SDL_WINDOW_UTILITY = 0x00020000;
export const SDL_WINDOW_TOOLTIP = 0x00040000;
export const SDL_WINDOW_POPUP_MENU = 0x00080000;
export const SDL_WINDOW_KEYBOARD_GRABBED = 0x00100000;
export const SDL_WINDOW_VULKAN = 0x10000000;
export const SDL_WINDOW_METAL = 0x20000000;
export const SDL_WINDOW_INPUT_GRABBED = SDL_WINDOW_MOUSE_GRABBED;

// SDL_WindowPos
export const SDL_WINDOWPOS_UNDEFINED = 0x1fff0000;
export const SDL_WINDOWPOS_CENTERED = 0x2FFF0000;