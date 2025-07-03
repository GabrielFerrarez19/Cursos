import { ThumbsUp, Trash } from "phosphor-react";
import Styles from "./Comments.module.css";

export function Comments() {
  return (
    <div className={Styles.comments}>
      <img src="https://github.com/GabrielFerrarez19.png" alt="" />

      <div className={Styles.commentsBox}>
        <div className={Styles.commentsContent}>
          <header>
            <div className={Styles.authorEndTime}>
              <strong>Eduardo de Melo</strong>
              <time title="13 de maio as 08 horas"dateTime="2022-05-11 08:03:59">Cerca de 1 hora atrás</time>
            </div>

            <button title="Deletar Comentario">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
