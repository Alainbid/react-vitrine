import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const souris = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      souris.style.top = e.y + "px";
      souris.style.left = e.x + "px";
    });

    document.querySelectorAll(".hover").forEach((lien) => {
      lien.addEventListener("mouseover", (e) => {
        souris.classList.add("hovered");
      });

      lien.addEventListener("mouseleave", () => {
        souris.style.transition = "0.2s ease-out";
        souris.classList.remove("hovered");
      });
    });
  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
