import { format , formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from "./Post.module.css";
import { Comments } from "./Comments";
import { Avatar } from "./Avatar";
import { useState } from 'react';


export function Post({ author, publishedAt , content }) {

    const [comments, setComments] = useState([
        'Post muito bacana em!!',

    ])

    const [ newCommentsText, setNewCommentsText] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:"há",
    });

    function handleCreateNewComment(){
        event.preventDefault()

        
        setComments([...comments, newCommentsText])

        setNewCommentsText('')

    }

    function handleNewCommentsChande(){ 
        setNewCommentsText(event.target.value);
    }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line =>{
            if(line.type == 'paragraph' ){
                return <p>{line.content}</p>
            }else if (line.content == 'link'){
                return <p><a href="">{line.link}</a></p> 
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
            name="comment"
            placeholder="Deixe um comentario" 
            value={newCommentsText}
            onChange={handleNewCommentsChande}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comments =>{
            return <Comments content={comments}/>
        })}
      </div>
    </article>
  );
}
