import { Plus } from "lucide-react";

export function RighBar(){
    return(
        <div className="">
            <nav className="flex fixed bottom-4 right-4 z-50 gap-2 justify-center items-center w-35">
                <div className="rounded-full w-13 h-13 border-0 flex justify-center items-center shadow-2xl shadow-zinc-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Plus />
                </div>
            </nav>
        </div>
    );
}   