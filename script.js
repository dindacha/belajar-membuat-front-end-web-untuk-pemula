document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("input-book");
  submitForm.addEventListener("submit", function () {
    addBook();
  });

  // Menutup tab edit
  const closeForm = document.getElementById("closeForm");
  closeForm.addEventListener("click", function () {
    const edit = document.querySelector(".edit-section");
    edit.setAttribute("hidden", "");
  });

  // Memanggil fungsi untuk mencari buku
  // apabila tombol cari ditekan
  const searchButton = document.getElementById("find");
  searchButton.addEventListener("click", function () {
    const keyword = document.getElementById("inputFindBook").value;
    searchBook(keyword.toLowerCase());
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondatasaved", () => {
  console.log("Data disimpan.");
});
document.addEventListener("ondataloaded", () => {
  refreshDataFromBooks();
});
