$("#logoutBtn").click(function (e) {
  e.preventDefault();
  window.location.href = "../index.html";
});

$("#reiniciarJuegoBtn").click(function (e) {
  e.preventDefault();
  location.reload();
});

$("#atrasBtn").click(function (e) {
  e.preventDefault();
  window.location.href = "home.html";
});
