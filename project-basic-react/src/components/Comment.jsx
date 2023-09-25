import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
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
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito Bom!</p>
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
