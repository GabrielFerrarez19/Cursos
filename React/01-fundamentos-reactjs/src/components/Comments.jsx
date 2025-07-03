import { ThumbsUp, Trash } from "phosphor-react";
import Styles from "./Comments.module.css";
import { Avatar } from "./Avatar";

export function Comments({content}) {
  return (
    <div className={Styles.comments}>
      <Avatar hasBorder={false} src="https://github.com/GabrielFerrarez19.png" />

      <div className={Styles.commentsBox}>
        <div className={Styles.commentsContent}>
          <header>
            <div className={Styles.authorEndTime}>
              <strong>Eduardo de Melo</strong>
              <time title="13 de maio as 08 horas"dateTime="2022-05-11 08:03:59">Cerca de 1 hora atrás</time>
            </div>

            <button title="Deletar Comentario">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button> 
        </footer>
      </div>
    </div>
  );
}
