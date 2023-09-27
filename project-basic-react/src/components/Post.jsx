/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Muito bom o Post!"]);

  const [newComment, setNewComment] = useState("");

  /* usando o handle em uma variavel que armazena um valor da textarea e depois setamos no array, estamos
    usando programacao declarativa , nao setando diretamente ao usuario enviar o formulario e sim pelo 
    onchange do campo textarea
  */

  function handleNewComment() {
    setNewComment(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);

    setNewComment("");
  }

  const publisehdDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {author.name}</strong>
            <span> {author.role} </span>
          </div>
        </div>

        {/* tag time do html permite passar um atributo para ele para manusear datas */}
        <time
          title={publisehdDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type == "paragraph") {
            return <p key={index}> {line.content} </p>;
          } else {
            return (
              <p key={index}>
                {" "}
                <a href={line.content}> Link Para o Projeto no GitHub </a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          onChange={handleNewComment}
          value={newComment}
          placeholder="Deixa um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((content, index) => (
          <Comment comment={content} key={index} />
        ))}
      </div>
    </article>
  );
}
