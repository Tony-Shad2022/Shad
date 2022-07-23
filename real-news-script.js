var modal = document.getElementById("myModal");

var goBackBtn = document.getElementsByClassName("close")[0];

var readMoreBtn = document.getElementById("readMoreBtn");

var readMoreContent = document.getElementById("readMoreContent");

var modalContent = document.getElementById("modalContent");

goBackBtn.addEventListener("click", closeModal);
readMoreBtn.addEventListener("click", readMore);

function closeModal() {
  modal.style.display = "none";
}

function readMore() {
  readMoreBtn.style.display = "none";
  readMoreContent.style.display = "block";
  modalContent.style.width = "20%";
}


window.onclick = function(event) {
  console.log("a")
}