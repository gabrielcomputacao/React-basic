import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

//Data of Application
//author: {url_avatar: '', name: '', role:''}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielcomputacao.png",
      name: "Gabriel Henrique",
      role: "Software Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!'} ,
      {type: 'paragraph', content: 'Acabei de subir meu novo projeto'},
      {type: 'link', content: 'https://github.com/gabrielcomputacao/'},
    ],
    publishAt: new Date('2023-09-26 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabrielcomputacao.png",
      name: "Igor Santos",
      role: "Programador Junior",
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera eu sou o Igor!'} ,
      {type: 'paragraph', content: 'Acabei de subir minha nova tarefa.'},
      {type: 'link', content: 'https://github.com/gabrielcomputacao/'},
    ],
    publishAt: new Date('2023-09-15 20:00:00')
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
        {
          posts.map( (post,index) => <Post key={index} author={post.author} content={post.content} publishedAt={post.publishAt} /> )
        }
        </main>
      </div>
    </>
  );
}

export default App;
