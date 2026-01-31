// 讓使用者可以按 Enter / Space 進入遊戲
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "enter" || key === " " || key === "spacebar") {
    window.location.href = "game.html";
  }
});

// 行動裝置：點擊整個畫面即進入（HTML a 已處理，這段只是保險）
document.querySelector(".screen")?.addEventListener("click", () => {
  // a 會自動跳轉
});
