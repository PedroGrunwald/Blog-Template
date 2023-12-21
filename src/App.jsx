import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Post from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/PedroGrunwald.png",
      name: "Pedro Grunwald",
      role: "Student Web Developer",
    },
    content: [
      {type:"paragraph",content:" Fala galeraa"},
      {type:"paragraph",conten:"Acabei de subir mais um projeto no meu portfolio!"},
      {type:"paragraph",content:" Compartilha ai",}
    ],
    publishedAt:new Date("2023-12-22 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/PedroGrunwald.png",
      name: "Pedro Grunwald Oliveira",
      role: "Student Web Developer ||",
    },
    content: [
      {type:"paragraph",content:" Fala galeraa"},
      {type:"paragraph",conten:"Acabei de subir mais um projeto no meu portfolio!"},
      {type:"paragraph",content:" Compartilha ai",}
    ],
    publishedAt:new Date("2023-12-22 20:00:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
    {posts.map(post =>{
      return(
        <Post
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        />
      )
    })}
        </main>
      </div>
    </div>
  );
}
