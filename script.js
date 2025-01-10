// toggle-btnボタンと.ant-walkを取得
const toggleBtn = document.getElementById('toggle-btn');
const antWalk = document.querySelector('.ant-walk');

// フラグ管理
let isPaused = false;

// ボタンクリック時に再生/停止を切り替え
toggleBtn.addEventListener('click', () => {
  if (isPaused) {
    // 再生
    antWalk.style.animationPlayState = 'running';
    toggleBtn.textContent = 'アニメ停止';
    isPaused = false;
  } else {
    // 停止
    antWalk.style.animationPlayState = 'paused';
    toggleBtn.textContent = 'アニメ再開';
    isPaused = true;
  }
});
