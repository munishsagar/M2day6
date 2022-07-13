const heading = document.querySelector("h1");

const changeBackgroundColor = document.querySelector("body");

const changeCLass = document.querySelectorAll("a");
const btn = document.querySelector(".btn");

for (const link of changeCLass) {
  link.classList.add("visit");
}

btn.addEventListener("click", function () {
  for (const link of changeCLass) {
    link.classList.toggle("changes");
    changeBackgroundColor.style.backgroundColor = "grey";
  }
});

const change = heading.addEventListener("click", function () {
  heading.innerText = "mobile shop";
});
change();
