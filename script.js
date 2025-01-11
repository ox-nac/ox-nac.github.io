const profileIcon = document.getElementById('profileIcon');

// 画像に近づいた（マウスオーバーした）ときに荒くする
profileIcon.addEventListener('mouseover', () => {
  profileIcon.classList.add('zoomed'); // ピクセル表示を適用
});

// 画像から離れたときに元に戻す
profileIcon.addEventListener('mouseout', () => {
  profileIcon.classList.remove('zoomed'); // 高画質に戻す
});
