// toggle-btnボタンと.ant-walk-containerの要素を取得
const toggleBtn = document.getElementById('toggle-btn');
const antLegs = document.querySelectorAll('.legs'); // アリの足すべてを取得
const antWalkContainer = document.querySelector('.ant-walk-container');

// フラグ管理
let isPaused = false;

// ボタンクリック時に再生/停止を切り替え
toggleBtn.addEventListener('click', () => {
  if (isPaused) {
    // 再生
    antLegs.forEach(leg => {
      leg.style.animationPlayState = 'running'; // 足のアニメーション再生
    });
    antWalkContainer.style.border = '1px solid red'; // 赤枠を復活
    toggleBtn.textContent = 'アニメ停止';
    isPaused = false;
  } else {
    // 停止
    antLegs.forEach(leg => {
      leg.style.animationPlayState = 'paused'; // 足のアニメーション停止
    });
    antWalkContainer.style.border = '1px dashed gray'; // 赤枠を灰色の破線に変更
    toggleBtn.textContent = 'アニメ再開';
    isPaused = true;
  }
});

// コンソールで状態を確認する（デバッグ用）
console.log('JavaScript: アニメーション制御が初期化されました');
