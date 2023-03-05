import React, { useEffect } from "react";

const TextVolant = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["lire", "écrire", "penser", "rire"];
    let wordIndx = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");

      target.appendChild(letter);
      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 12s ease forwards";
      letter.textContent = array[wordIndx][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2800);
    };

    const boucle = () => {
      setTimeout(() => {
        if (wordIndx >= array.length) {
          wordIndx = 0;
          letterIndex = 0;
          boucle();
        } else if (letterIndex < array[wordIndx].length) {
          createLetter();
          letterIndex++;
          boucle();
        } else {
          letterIndex = 0;
          wordIndx++;
          setTimeout(() => {
            boucle();
          }, 3400);
        }
      }, 80);
    };

    boucle();
  }, []);

  return (
    <span className="dynamic-text">
      <span>simply</span>
      <ul id="text-target"></ul>
    </span>
  );
};

export default TextVolant;
