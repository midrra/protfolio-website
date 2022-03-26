const changeCl = document.querySelector(".change-mode");
const change = document.querySelector(".switch");
const sections = document.querySelectorAll(".mode-change");
const overLay = document.querySelector(".over-lay");

// Change The Modes
const addDarkmode = function () {
  sections.forEach((n, i) => {
    n.classList.add("dark-mode");
  });
};

const remvoeDarkmode = function () {
  sections.forEach((n, i) => {
    n.classList.remove("dark-mode");
  });
};

changeCl.addEventListener("click", (e) => {
  if (e.target.classList.contains("sun")) {
    remvoeDarkmode();
    change.classList.remove("switch-show");
    overLay.style.opacity = "0";
  }

  if (e.target.classList.contains("moon")) {
    change.classList.add("switch-show");
    overLay.style.opacity = "1";
    addDarkmode();
  }
});

// Refresh The Page From The Top
window.addEventListener("load", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

// Animate The Hand
const hand = document.querySelector(".title-see i");
window.setTimeout(() => {
  hand.classList.add("show-inimate");
}, 2000);

// Scroll To The Protfolio
const project = document.querySelector(".project");
const viewBtn = document.querySelector(".view-work");
const more = document.querySelector(".more");
const about = document.querySelector(".cab");

viewBtn.addEventListener("click", () => {
  project.scrollIntoView({ behavior: "smooth" });
});
more.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

// The Menu In The Small Screen
const bars = document.querySelector(".toggle-menu");
const parentSpan = document.querySelector(".main-span");
const arrow = document.querySelector(".arrow");
const list = document.querySelector(".list-cont");

bars.addEventListener("click", (e) => {
  parentSpan.classList.add("rotate-forward");
  arrow.classList.add("arrow-forword");
  list.classList.add("forword-show");
});

arrow.addEventListener("click", () => {
  parentSpan.classList.remove("rotate-forward");
  arrow.classList.remove("arrow-forword");
  list.classList.remove("forword-show");
});

// Move The Toggle list
const link = document.querySelector(".list-move ul");

link.addEventListener("click", () => {
  list.classList.remove("forword-show");
  parentSpan.classList.remove("rotate-forward");
  arrow.classList.remove("arrow-forword");
});
console.log(link);

// Reveal The Title
const visibleTitle = document.querySelectorAll(".visi");

const titleShow = function (entries, observer) {
  const [entry, col] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.add("head--show");
  observer.unobserve(entry.target);
};

const showTitle = new IntersectionObserver(titleShow, {
  root: null,
  threshold: 0,
});
visibleTitle.forEach(function (n) {
  showTitle.observe(n);
  n.classList.add("head--hidden");
});

// Animate The Logo Section
let delayTime = 0;
const mainDiv = document.querySelector(".row");
const logList = document.querySelectorAll(".col");

const companyLogo = function (entries) {
  const [entry, col] = entries;

  if (!entry.isIntersecting) return;
  logList.forEach((n) => {
    delayTime++;
    n.style.animation = `fed-logo 0.5s ${delayTime * 0.2}s ease forwards`;
  });
};

const animateLogo = new IntersectionObserver(companyLogo, {
  root: null,
  threshold: 0,
});
animateLogo.observe(mainDiv);

//
// Protfolio Section
const probutton = document.querySelectorAll(".btn-view");
const imgOne = document.querySelector(".img-p-1");
const imgTwo = document.querySelector(".img-p-2");
const imgThree = document.querySelector(".img-p-3");
const imgFour = document.querySelector(".img-p-4");
const imgFive = document.querySelector(".img-p-5");
const imgSex = document.querySelector(".img-p-6");
const overlayPro = document.querySelector(".overlay-pro");

const addoverProto = function (img) {
  overlayPro.classList.add("overlay-pro-show");
  overlayPro.classList.add("overlay-pro-show");
  img.classList.add("view-show");
  img.style.width = "70%";
  img.style.height = "auto";
  img.classList.add("success");
};

const removeOverProto = function (img) {
  overlayPro.classList.remove("overlay-pro-show");
  overlayPro.classList.remove("overlay-pro-show");
  img.style.width = "100%";
  img.style.height = "193px;";
  img.classList.remove("view-show");
  img.classList.remove("success");
};

probutton.forEach((n) => {
  n.addEventListener("click", (e) => {
    if (e.target.closest(".pro--1")) {
      addoverProto(imgOne);
    }
    if (e.target.closest(".pro--2")) {
      addoverProto(imgTwo);
    }
    if (e.target.closest(".pro--3")) {
      addoverProto(imgThree);
    }
    if (e.target.closest(".pro--4")) {
      addoverProto(imgFour);
    }
    if (e.target.closest(".pro--5")) {
      addoverProto(imgFive);
    }
    if (e.target.closest(".pro--6")) {
      addoverProto(imgSex);
    }
  });
});

overlayPro.addEventListener("click", () => {
  removeOverProto(imgOne);
  removeOverProto(imgTwo);
  removeOverProto(imgThree);
  removeOverProto(imgFour);
  removeOverProto(imgFive);
  removeOverProto(imgSex);
});

// <!-- <script>history.scrollRestoration = "manual"</script> -->
