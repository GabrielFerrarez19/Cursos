import Image from "next/image";
import { directly } from "./../../../.next/server/chunks/ssr/node_modules_9876f0e3._";

type CardsProps = {
  link: string;
  title: string;
  user: string;
  views: number;
  date: Date;
};

export function Cards({ link, title, user, views, date }: CardsProps) {
  function obterDataAtual(): Date {
    return new Date();
  }

  function TempPost(dataPost: Date): string {
    const agora = new Date();
    const diffMs = agora.getTime() - dataPost.getTime(); // diferença em milissegundos

    const segundos = Math.floor(diffMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (dias > 0) return `${dias} dia${dias > 1 ? "s" : ""} atrás`;
    if (horas > 0) return `${horas} hora${horas > 1 ? "s" : ""} atrás`;
    if (minutos > 0) return `${minutos} minuto${minutos > 1 ? "s" : ""} atrás`;

    return `agora mesmo`; // ✅ Adicionado: garante retorno sempre
  }

  return (
    <div className="w-69 h-60">
      <div className="w-68 h-38">
        <img className="w-full h-full" src={link} alt={title} />
        <div className="flex flex-col p-2">
          <div className="flex items-start gap-3">
            <div className="rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                width={36}
                height={36}
                src="/134634881.png"
                alt={`Foto do usuário ${user}`}
              />
            </div>

            <div className="flex flex-col flex-1">
              <p className="font-medium text-sm text-gray-900 leading-none pb-1 w-full">
                {title}
              </p>
              <span className="text-sm text-gray-600">{user}</span>

              <div className="flex gap-1 text-sm text-gray-500">
                <span>{views.toLocaleString()} views</span>
                <span className="relative pl-3 before:content-[''] before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-500 before:rounded-full">{TempPost(date)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
