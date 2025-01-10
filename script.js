// script.js

// ボタン要素とアリ要素を取得
const toggleBtn = document.getElementById('toggle-btn');
const antWalk = document.querySelector('.ant-walk');

// アニメ再生中か停止中かを管理するフラグ
let isPaused = false;

// ボタンをクリックしたときの処理
toggleBtn.addEventListener('click', () => {
  if (!isPaused) {
    // アニメを停止
    antWalk.style.animationPlayState = 'paused';
    toggleBtn.textContent = 'アニメ再開';
    isPaused = true;
  } else {
    // アニメを再生
    antWalk.style.animationPlayState = 'running';
    toggleBtn.textContent = 'アニメ停止';
    isPaused = false;
  }
});
