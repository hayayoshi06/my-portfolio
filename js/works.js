'use-strict';

{
  document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll("h2.toggle");
    const previewImg = document.getElementById("preview-img");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const ul = toggle.nextElementSibling;

        // 他を閉じる場合はこの処理も追加可能
        document.querySelectorAll(".works-list").forEach(list => {
          if (list !== ul) list.classList.remove("open");
        });

        ul.classList.toggle("open");
      });
    });

    const links = document.querySelectorAll(".works-list a");
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-img");
        previewImg.src = imgSrc;
        previewImg.style.display = "block";
      });

      link.addEventListener("mouseleave", () => {
        previewImg.style.display = "none";
      });
    });
  });
}