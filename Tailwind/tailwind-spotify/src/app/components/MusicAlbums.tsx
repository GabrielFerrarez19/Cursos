import Image from 'next/image';
import "../globals.css";
import { Home as HomeIcon, Search, Library,ChevronLeft, ChevronRight, Play } from "lucide-react";


export function MusicAlbums() {
  return (
    <div>
      <a
        href="#"
        className="bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 tran"
      >
        <Image
          src="/capaAlbum.jpg"
          width={104}
          height={104}
          alt="Capa do album Veigh "
        />
        <strong>Album 1</strong>
        <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    </div>
  );
}
