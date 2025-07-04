import Image from 'next/image';
import "./globals.css";
import { Home as HomeIcon, Search, Library,ChevronLeft, ChevronRight, Play } from "lucide-react";

import { MusicAlbums } from './components/MusicAlbums';
import { GridAlbums } from "./components/GridAlbuns";
import { Footer } from './components/Footer';



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href="#"
              className="flex items-center gap-2 text-sn font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sn font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sn font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Favorites
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Chill Vibes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Workout
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Throwbacks
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Indie Mix
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Jazz Classics
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Party Time
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Relaxing Sounds
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">  
              <ChevronRight />
            </button >

          </div>
          <h1 className="font-semibold text-3xl mt-10 ">Good Afthernoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <MusicAlbums />
            <MusicAlbums />
            <MusicAlbums />
            <MusicAlbums />
            <MusicAlbums />
            <MusicAlbums />
          </div>

        <div>
          <div className="first:pb-0 not-first:pb-20">
            <GridAlbums text="Feito para você" />
          </div>
          <div className="first:pb-0 not-first:pb-20">
            <GridAlbums text="Álbuns populares" />
          </div>
        </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
