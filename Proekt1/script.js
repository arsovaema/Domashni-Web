document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector("dialog");
  const showButton = document.getElementById("registerBtn");
  const closeButton = document.querySelector(".Close");
  const submitButton = document.querySelector(".Submit");

  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");

  const navLinks = document.querySelectorAll("nav a");

  let isRegistered = localStorage.getItem("userName") ? true : false;

  const storedUser = localStorage.getItem("userName");
  console.log(storedUser);
  if (storedUser) {
    console.log(storedUser);
    showButton.classList.add("shouldShow");
  } else {
    console.log(storedUser);
    showButton.classList.remove("shouldShow");
  }

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  });

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();

    if (name && surname) {
      const fullName = `${name} ${surname}`;

      localStorage.setItem("userName", fullName);

      isRegistered = true;

      dialog.close();

      window.location.href = "./placesToVisit.html";
    } else {
      alert("Please fill in both Name and Surname.");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!isRegistered) {
        event.preventDefault();
        alert("Please register first before exploring the site!");
      }
    });
  });
});
