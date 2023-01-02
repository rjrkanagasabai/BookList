let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pubsInput = document.querySelector("#pubs");
let button = document.querySelector(".btnOne");
let bookList = document.querySelector("#book-List");

const showContent = document.querySelector(".show");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".closebtn");
button.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    titleInput.value == "" &&
    authorInput.value == "" &&
    pubsInput.value == ""
  ) {
    titleInput.classList.add("warning");
    authorInput.classList.add("warning");
    pubsInput.classList.add("warning");

    titleInput.setAttribute("placeholder", "Write a Book name");
    authorInput.setAttribute("placeholder", "Write an author name");
    pubsInput.setAttribute("placeholder", "Write a publication name");

    function removeWarning() {
      titleInput.classList.remove("warning");
      authorInput.classList.remove("warning");
      pubsInput.classList.remove("warning");

      titleInput.setAttribute("placeholder", "Book Name");
      authorInput.setAttribute("placeholder", "Author Name");
      pubsInput.setAttribute("placeholder", "Publication Name");
    }
    setTimeout(removeWarning, 1024);
  } else if (titleInput.value == "") {
    titleInput.classList.add("warning");
    titleInput.setAttribute("placeholder", "Write a Book name");

    function removeWarning() {
      titleInput.classList.remove("warning");
      titleInput.setAttribute("placeholder", "Book Name");
    }
    setTimeout(removeWarning, 1024);
  } else if (authorInput.value == "") {
    authorInput.classList.add("warning");
    authorInput.setAttribute("placeholder", "Write a author Name");

    function removeWarning() {
      authorInput.classList.remove("warning");
      authorInput.setAttribute("placeholder", "Author Name");
    }
    setTimeout(removeWarning, 1024);
  } else if (pubsInput.value == "") {
    pubsInput.classList.add("warning");
    pubsInput.setAttribute("placeholder", "Write a publication name");

    function removeWarning() {
      pubsInput.classList.remove("warning");
      pubsInput.setAttribute("placeholder", "Publication Name");
    }
    setTimeout(removeWarning, 1024);
  } else {
    const bookListRow = document.createElement("tr");

    const newTitle = document.createElement("td");
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);

    const newPubs = document.createElement("td");
    newPubs.innerHTML = pubsInput.value;
    bookListRow.appendChild(newPubs);

    const removeItem = document.createElement("td");
    removeItem.innerHTML =
      '<button type="submit" form="form1"  class="Delete"><i class="fa-solid fa-trash-can icon"></i></button>';
    bookListRow.appendChild(removeItem);

    bookList.appendChild(bookListRow);

    titleInput.value = "";
    authorInput.value = "";
    pubsInput.value = "";
  }
  const openModal = function () {
    showContent.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    showContent.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  // to remove book
  const deleteList = document.querySelectorAll("td");
  for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener("click", function () {
      openModal();
      // showContent.classList.remove("hidden");
      // overlay.classList.remove("hidden");
      deleteList[i].parentElement.style.display = "none";

      closeButton.addEventListener("click", closeModal);
      // function () {
      //   showContent.classList.add("hidden");
      //   overlay.classList.add("hidden");
      // });
      overlay.addEventListener("click", closeModal);
      // function () {
      //   showContent.classList.add("hidden");
      //   overlay.classList.add("hidden");
      // });

      document.addEventListener("keydown", function (e) {
        if (e.key) {
          if (!showContent.classList.contains("hidden")) {
            closeModal();
            // showContent.classList.add("hidden");
            // overlay.classList.add("hidden");
          }
        }
      });
    });
  }
});
