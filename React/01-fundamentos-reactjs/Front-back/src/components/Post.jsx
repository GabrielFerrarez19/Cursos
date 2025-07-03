// Post.jsx
import { format , formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from "./Post.module.css";
import { Comments } from "./Comments";
import { Avatar } from "./Avatar";
import { useState , useEffect } from 'react';

export function Post({ author, publishedAt , content }) {
  const [comments, setComments] = useState([]);
  const [newCommentsText, setNewCommentsText] = useState('');

  // Buscar comentários do backend quando o componente montar
  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setComments(data);
        }
      })
      .catch(err => console.error('Erro ao carregar comentários:', err));
  }, []);

  // Enviar comentários para backend sempre que eles mudarem
  useEffect(() => {
    if(comments.length > 0) {
      fetch('http://localhost:3000/save-comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comments }),
      })
      .then(res => res.json())
      .then(data => console.log('Backend respondeu:', data))
      .catch(err => console.error('Erro ao salvar comentários:', err));
    }
  }, [comments]);

  const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event){
    event.preventDefault();

    const updatedComments = [...comments, newCommentsText];
    setComments(updatedComments);
    setNewCommentsText('');
  }

  function handleNewCommentsChande(event){ 
    event.target.setCustomValidity('');
    setNewCommentsText(event.target.value);
  }

  function handleNewCommentInvalid(event){
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentsText.length === 0;

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
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>;
          } else if(line.type === 'link'){
            return (
              <p key={line.content}>
                <a href={line.content} target="_blank" rel="noreferrer">{line.content}</a>
              </p>
            );
          }
          return null;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário" 
          value={newCommentsText}
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentsChande}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comments 
            key={comment}
            content={comment} 
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
