// scroll button

let scroll_btn = document.querySelector(".scroll-btn");

window.onscroll = () => {
  if (window.scrollY >= 800) {
    scroll_btn.style.display = "block";
  } else {
    scroll_btn.style.display = "none";
  }
};

scroll_btn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// color settings

let settings = document.querySelector(".settings");
let settingIcon = document.querySelector(".settings-icon");

settings.addEventListener("click", () => {
  // icon animation
  settingIcon.style.cssText =
    "transform: translateY(-50%) rotate(122deg); transition: .5s;";
  settings.classList.add("clicked");
  settings.style.marginLeft = "0px";
});

document.addEventListener("click", function (e) {
  let clickedElement = e.target;
  if (!clickedElement.classList.contains("clicked")) {
    // icon animation
    settingIcon.style.cssText =
      "transform: translateY(-50%) rotate(-122deg); transition: .5s;";
    settings.style.marginLeft = "-77px";
    settings.classList.remove("clicked");
  }
});

let blueBtn = document.querySelector(".blue");
let pinkBtn = document.querySelector(".pink");
let color = [];
let transColor = [];

// if there's data in local storage

if (
  window.localStorage.getItem("color") &&
  window.localStorage.getItem("transparent color")
) {
  // use local storage color
  // use stored colors
  document.documentElement.style.setProperty(
    "--mainColor",
    JSON.parse(window.localStorage.getItem("color"))
  );
  document.documentElement.style.setProperty(
    "--trans-color",
    JSON.parse(window.localStorage.getItem("transparent color"))
  );
}

pinkBtn.onclick = function () {
  // change page colors
  document.documentElement.style.setProperty("--mainColor", "#db067b");
  document.documentElement.style.setProperty("--trans-color", "#db067bb1");
  // add colors to arrays
  color.pop(); // clear array to add new color
  color.push("#db067b");
  transColor.pop(); // clear array to add new color
  transColor.push("#db067bb1");
  // add color to local storage
  window.localStorage.setItem("color", JSON.stringify(color));
  window.localStorage.setItem("transparent color", JSON.stringify(transColor));
};

blueBtn.onclick = function () {
  // change page colors
  document.documentElement.style.setProperty("--mainColor", "#19c8fa");
  document.documentElement.style.setProperty("--trans-color", "#1b89a7c2");
  // add colors to arrays
  color.pop(); // clear array to add new color
  color.push("#19c8fa");
  transColor.pop(); // clear array to add new color
  transColor.push("#1b89a7c2");
  // add color to local storage
  window.localStorage.setItem("color", JSON.stringify(color));
  window.localStorage.setItem("transparent color", JSON.stringify(transColor));
};

//--------------------------------- nav bar

let burger = document.querySelector(".burger-icon");
let myUl = document.querySelector("ul");

burger.addEventListener("click", (e) => {
  if (
    burger.getAttribute("data-burger") == "false" ||
    e.target.tagName == "ul"
  ) {
    //   change attribute value
    burger.setAttribute("data-burger", "true");
    // show ul
    myUl.style.cssText = "display: flex;";
    // rotate burger icon
    burger.style.cssText = "transform: rotate(90deg)";
  } else {
    //   change attribute value
    burger.setAttribute("data-burger", "false");
    // show ul
    myUl.style.cssText = "display: none;";
    // rotate burger icon
    burger.style.cssText = "transform: rotate(0deg);";
  }
});

// close ul bar by click outside ul

document.addEventListener("click", (e) => {
  if (window.innerWidth < 768) {
    if (e.target.tagName == "LI" || e.target.tagName == "I") {
      return;
    } else {
      // change attribute value
      burger.setAttribute("data-burger", "false");
      // show ul
      myUl.style.cssText = "display: none;";
      // rotate burger icon
      burger.style.cssText = "transform: rotate(0deg);";
    }
  }
});

// reset nav display at large size screen in case if burger icon click event set display none to ul

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 768) {
    myUl.style.display = "flex";
  }
});
