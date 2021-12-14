import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function computeTime() {
    let timeToRead = 0;
    let displayEmoji =""
    if (minutes > 30) {
      timeToRead = Math.ceil(minutes / 10);
      for (let i = 0; i < timeToRead; i++) {
         displayEmoji = "🍱" + displayEmoji  
      }
      return displayEmoji;
    } else {
        timeToRead = Math.ceil(minutes/5)
        for (let i = 0; i < timeToRead; i++) {
           displayEmoji = "☕️" + displayEmoji  
         }
         return displayEmoji;
    }
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {computeTime()}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
