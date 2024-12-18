let isEditing = false;
const editNameBtn = document.getElementById("editNameBtn");
const nameElement = document.querySelector(".text-content h2");

editNameBtn.addEventListener("click", () => {
  if (isEditing) {
    const newName = document.getElementById("nameInput").value;
    nameElement.textContent = newName;
    editNameBtn.textContent = "edit";
  } else {
    const currentName = nameElement.textContent;
    nameElement.innerHTML = `<input type="text" id="nameInput" value="${currentName}">`;
    editNameBtn.textContent = "save";
  }
  isEditing = !isEditing;
});

const addMusicBtn = document.getElementById("addMusicBtn");
const musicForm = document.getElementById("musicForm");
const submitMusicBtn = document.getElementById("submitMusicBtn");
const musicGallery = document.querySelector(".music-gallery");

addMusicBtn.addEventListener("click", () => {
  musicForm.style.display = "block";
});

submitMusicBtn.addEventListener("click", () => {
  const musicLink = document.getElementById("musicLink").value;
  const musicTitle = document.getElementById("musicTitle").value;

  if (musicLink && musicTitle) {
    const musicItem = document.createElement("a");
    musicItem.href = musicLink;
    musicItem.target = "_blank";

    const musicImage = document.createElement("img");
    musicImage.src = "pic/image.jpeg";
    musicImage.alt = musicTitle;

    const musicName = document.createElement("span");
    musicName.textContent = musicTitle;

    musicItem.appendChild(musicImage);
    musicItem.appendChild(musicName);
    musicGallery.appendChild(musicItem);

    musicForm.style.display = "none";
    document.getElementById("musicLink").value = '';
    document.getElementById("musicTitle").value = '';
  } else {
    alert("Please fill in both fields.");
  }
});
