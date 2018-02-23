// クリックしたら、背景が暗くなりモーダルウィンドウが出てくる。
(function() {
  'use strict';

// 関係ある全てのidを個々に取得し、変数に代入
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var mask = document.getElementById('mask');
  var modal = document.getElementById('modal');

// id="open"をクリックした時の処理
  open.addEventListener('click', function() {
    modal.className = '';
    mask.className = '';
  });

// id="close"をクリックした時の処理
  close.addEventListener('click', function() {
    modal.className = 'hidden';
    mask.className = 'hidden';
  });

// id="mask"をクリックした時の処理
  mask.addEventListener('click', function() {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    // 上記と同じ記述でも同じ動作を行うが、こっちの方がスマート
    // closeのclick functionを使うよー的な
    close.click();
  });

  // id="modal"をクリックした時の処理
  modal.addEventListener('click', function() {
    close.click();
  });


})();
