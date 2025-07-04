import Image from "next/image";
import "../globals.css";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Fullscreen,
  Maximize,
  Maximize2,
} from "lucide-react";

export function Footer() {
  return (
    <div>
      <footer className="fixed flex items-center justify-between bg-zinc-900 border-t border-zinc-700 p-3 w-full bottom-0">
        <div className="flex items-center gap-2 ">
          <Image
            src="/capaAlbum.jpg"
            width={56}
            height={56}
            alt="Capa do album Veigh "
          />
          <div className="flex flex-col gap-3">
            <strong className="font-normal">Loom</strong>
            <span className="text-xs text-zinc-400">Imagene dragons</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={18} className="text-zinc-200" />
            <SkipBack size={18} className="text-zinc-200" />
            <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward size={18} className="text-zinc-200" />
            <Repeat size={18} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:31</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <Mic2 size={18}/>
            <LayoutList size={18}/>
            <Laptop2 size={18} />
            <div className="flex items-center gap-2">
                <Volume size={18} />
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                    <div className="bg-zinc-200 w-15 h-1 rounded-full"></div>
                </div>
            </div>
            <Maximize2 size={18} />
        </div>
      </footer>
    </div>
  );
}
