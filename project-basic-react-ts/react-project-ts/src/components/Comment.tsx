
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";


interface CommentProps{
  comment: string,
  onDeleteComment: (comment: string) => void,
}


export function Comment({ comment, onDeleteComment }: CommentProps) {

  const [likeCount,setLikeCount] = useState(0);

  function handleDeleteComment(){
      onDeleteComment(comment);
  }

  function handleLikeComment(){
    setLikeCount( likeCount + 1);
  }


  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={"https://github.com/gabrielcomputacao.png"}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Henrique da Silveira Santos</strong>
              <time title="2023-09-22 7:00" dateTime="2023-09-22 7:00">
                Cerca de 1h atrás
              </time>
            </div>
            {/* quadno o botao nao tiver texto e sim um icone e sempre bom colocar um title para os leitores de tela */}
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
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
