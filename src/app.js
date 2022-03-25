/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let i;
  let j;
  let k;
  for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
      for (k = 0; k < noun.length; k++) {
        console.log(`${pronoun[i]}` + `${adj[j]}` + `${noun[k]}`);
      }
    }
  }
};
