import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>Começando aprender sobre react</div>
          <Post author="gabriel" />
        </main>
      </div>
    </>
  );
}

export default App;
