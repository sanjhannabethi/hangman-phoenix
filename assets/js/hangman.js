document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".keyboard-key").forEach((key) => {
      key.addEventListener("click", (event) => {
        event.target.classList.add("clicked");
        setTimeout(() => {
          event.target.classList.remove("clicked");
        }, 200);
      });
    });
  });
  