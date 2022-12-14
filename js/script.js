// console.log("Hello World");

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     // console.log(link);
//     e.preventDefault();

//     const href = link.getAttribute("href");

//     if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       // console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     if (link.classList.contains("main-nav-link")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

const allLinks = document.querySelector(".main-nav-list");
const logoEl = document.querySelectorAll(".logoMain");

allLinks.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains("main-nav-link")) {
    const href = e.target.getAttribute("href");
    if (href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    headerEl.classList.toggle("nav-open");
  }
});

logoEl.forEach((logo) => {
  logo.addEventListener("click", function (e) {
    e.preventDefault();
    const logoHref = logo.getAttribute("href");
    console.log(logoHref);
    if (logoHref === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

const btnLinkEl = document.querySelectorAll(".btn");
btnLinkEl.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const hrefBtn = link.getAttribute("href");
    if (hrefBtn.startsWith("#")) {
      document.querySelector(hrefBtn).scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);

    if (!entry.isIntersecting) document.body.classList.add("sticky");

    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
