import {
  Clock,
  Flag,
  Flame,
  Gamepad2,
  HelpCircle,
  History,
  HomeIcon,
  Layers,
  Library,
  MessageSquareWarning,
  Radio,
  Settings,
  SquarePlay,
  ThumbsUpIcon,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export function NavBar() {
  return (
    <div>
      <aside className="w-50 h-full">
        <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold border-b border-zinc-200 pb-3">
          <a
            href=""
            className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
          >
            <HomeIcon
              width={24}
              height={19}
              className="group-hover:text-red-500 transition-colors"
            />
            Home
          </a>
          <a
            href=""
            className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
          >
            <Flame
              width={24}
              height={19}
              className="group-hover:text-red-500 transition-colors"
            />
            Trending
          </a>
          <a
            href=""
            className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
          >
            <Layers
              width={24}
              height={19}
              className="group-hover:text-red-500 transition-colors"
            />
            Subscriptions
          </a>
        </div>
          <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold border-b border-zinc-200 pb-3">
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Library
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Library
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <History
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              History
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <SquarePlay
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Your videos
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Clock
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Watch later
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <ThumbsUpIcon
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Liked videos
            </a>
          </div>
          <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold border-b border-zinc-200 pb-3">
            <span className="pl-6 pt-3 pb-3 font-bold text-zinc-500 text-sm">
              SUBSCRIPTION
            </span>
            <a
              href=""
              className=" flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Image
                className="rounded-full"
                width={24}
                height={24}
                src="/CursoEmVideo.jpg"
                alt=""
              />
              Curso em Vídeo
            </a>
            <a
              href=""
              className="flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Image
                className="rounded-full"
                width={24}
                height={24}
                src="/FilipeDeschamps.jpg"
                alt=""
              />
              Filipe Deschamps
            </a>
            <a
              href=""
              className="flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Image
                className="rounded-full"
                width={24}
                height={24}
                src="/EiNerd.jpg"
                alt=""
              />
              Ei Nerd
            </a>
            <a
              href=""
              className="flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Image
                className="rounded-full"
                width={24}
                height={24}
                src="/VoceSabia.jpg"
                alt=""
              />
              Você Sabia?
            </a>
            <a
              href=""
              className="flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Image
                className="rounded-full"
                width={24}
                height={24}
                src="/BrksEdu.jpg"
                alt=""
              />
              BRKsEDU
            </a>
        </div>
        <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold border-b border-zinc-200 pb-3">
            <span className="pl-6 pt-3 pb-3 font-bold text-zinc-500 text-sm">
              MORE FROME YOUTUBE
            </span>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Youtube
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              YouTube Premium
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Gamepad2
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Gaming
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Radio
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Live
            </a>
        </div>
        <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold border-b border-zinc-200 pb-3">
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Settings
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Settings
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <Flag
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Report history
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <HelpCircle
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Help
            </a>
            <a
              href=""
              className="group flex w-100% items-center gap-5 pl-6 h-10 hover:bg-zinc-300/30 transition"
            >
              <MessageSquareWarning
                width={24}
                height={19}
                className="group-hover:text-red-500 transition-colors"
              />
              Send feedback
            </a>
        </div>
        <div className="flex flex-col w-100% text-zinc-700 text-sm font-semibold pb-3">
            <span className="flex w-100% items-center gap-5 pl-6 h-10">© 2020 Google LLC</span>
        </div>
      </aside>
    </div>
  );
}
