$(function () {
  //文字色を赤に変化
  $("#change-color").on("click", function () {
    $("#target").css("color", "red");
  });

  //文字の切り替え
  $("#change-text").on("click", function () {
    $("#target").text("Hello!");
  });

  //フェードアウト
  $("#fade-out").on("click", function () {
    $("#target").fadeOut();
  });

  //フェードイン
  $("#fade-in").on("click", function () {
    $("#target").fadeIn();
  });
});
