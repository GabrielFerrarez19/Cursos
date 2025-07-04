import Image from "next/image";
import "../globals.css";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

interface GridAlbumsProps {
  text: string;
}

export function GridAlbums({text}: GridAlbumsProps) {

  
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-10 ">
        {text}
      </h2>

      <div className="flex grid-cols-5 gap-4 mt-4">
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
          <Image
            className="w-full"
            src="/capaAlbum.jpg"
            width={150}
            height={150}
            alt="Capa do album Veigh "
          />
          <strong className="font-semibold">Loom</strong>
          <span className="text-sm text-zinc-400">Imagene dragons</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
          <Image
            className="w-full"
            src="/capaAlbum.jpg"
            width={150}
            height={150}
            alt="Capa do album "
          />
          <strong className="font-semibold">Loom</strong>
          <span className="text-sm text-zinc-400">Imagene dragons</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
          <Image
            className="w-full"
            src="/capaAlbum.jpg"
            width={150}
            height={150}
            alt="Capa do album Veigh "
          />
          <strong className="font-semibold">Loom</strong>
          <span className="text-sm text-zinc-400">Imagene dragons</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
          <Image
            className="w-full"
            src="/capaAlbum.jpg"
            width={150}
            height={150}
            alt="Capa do album Veigh "
          />
          <strong className="font-semibold">Loom</strong>
          <span className="text-sm text-zinc-400">Imagene dragons</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
          <Image
            className="w-full"
            src="/capaAlbum.jpg"
            width={150}
            height={150}
            alt="Capa do album Veigh "
          />
          <strong className="font-semibold">Loom</strong>
          <span className="text-sm text-zinc-400">Imagene dragons</span>
        </a>
      </div>
    </div>
  );
}
