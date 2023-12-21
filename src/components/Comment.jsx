/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";
import { useState } from "react";

export default function Comment({ content, deleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

function handleDeleteComment(){
  console.log('deletar')

  deleteComment(content)
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/PedroGrunwald.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Grunwald</strong>
              <time title="12 de dezmebro as 08:13" dateTime="2023-12-22">
                Cerca de uma hora atras
              </time>
            </div>
            <button onClick={handleDeleteComment}  title="deletar comentario">
              <Trash size={24} />
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
