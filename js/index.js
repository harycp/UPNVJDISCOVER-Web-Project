let imgChange = (e) => {
  document.querySelector(".bg_image").style.backgroundImage = `url(${e})`;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const timelineElements = document.querySelectorAll(".container-timeline");
timelineElements.forEach((el) => observer.observe(el));

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const stickyNavbar = document.querySelector(".sticky-navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 36) {
    stickyNavbar.classList.add("scrolling");
  } else {
    stickyNavbar.classList.remove("scrolling");
  }
});

const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content-akre");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active")); // Menghapus kelas active dari semua tab
    tab.classList.add("active"); // Menambahkan kelas active pada tab yang diklik

    contents.forEach((c) => c.classList.remove("active")); // Menghapus kelas active dari semua konten
    contents[index].classList.add("active"); // Menambahkan kelas active pada konten yang sesuai dengan indeks tab
  });
});

tabs[0].click();
