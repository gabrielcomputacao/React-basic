import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/gabrielcomputacao.png"
          />
          <div className={styles.authorInfo}>
            <strong> Gabriel Henrique</strong>
            <span> Web Developer </span>
          </div>
        </div>

        {/* tag time do html permite passar um atributo para ele para manusear datas */}
        <time title="2023-09-22 7:00" dateTime="2023-09-22 7:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          quisquam quidem minus ad numquam reiciendis! Nisi aspernatur ad
          voluptas dolore ipsa quis. Fugit nulla perspiciatis fuga voluptates
          deserunt necessitatibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla
          quaerat tempore deleniti, odio, ea dolorum cumque sunt necessitatibus
          quidem voluptatibus distinctio asperiores minus nisi temporibus a.
          Non, repudiandae dicta.
        </p>
        <p>
          <a href="#">Link que leva para a pagina inicial.</a>
        </p>
      </div>
    </article>
  );
}
