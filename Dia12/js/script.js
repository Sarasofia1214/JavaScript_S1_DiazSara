document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const option = document.getElementById("option").value;

    if (option === "get") {
        window.location.href = "./index/get.html";
      } else if (option === "post") {
        window.location.href = "./index/post.html";
      } else if (option === "put") {
        window.location.href = "./index/put.html";
      } else if (option === "delete") {
        window.location.href = "./index/delete.html";
      }
    });