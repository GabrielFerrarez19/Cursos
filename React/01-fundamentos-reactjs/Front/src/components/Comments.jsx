import { ThumbsUp, Trash } from "phosphor-react";
import Styles from "./Comments.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comments({content , onDeleteComment}) {
  const [likeCount, setLikeCout] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }
  function handleLikeComment(){
    setLikeCout(likeCount + 1);
  }

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

            <button onClick={handleDeleteComment} title="Deletar Comentario">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button> 
        </footer>
      </div>
    </div>
  );
}
