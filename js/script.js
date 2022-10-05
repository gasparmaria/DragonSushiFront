class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.overflowY = true;
        this.handleClick = this.handleClick.bind(this);
    }
    hideScrollBar() {
        document.body.style.overflowY = this.overflowY ? "hidden" : "visible";
        this.overflowY = !this.overflowY;
    }
    hideNavList() {
        this.navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                document.body.style.overflowY = "visible";
                this.navList.classList.remove(this.activeClass);
            });
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.hideNavList();
        this.hideScrollBar();
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    ".header__mobile-menu",
    ".header__navigation-menu",
    ".header__navigation-menu__list__links__item"
);
mobileNavBar.init();

let searchBarIcon = document.getElementsByClassName("header__search-bar-icon");
let i;

for (i = 0; i < searchBarIcon.length; i++) {
  searchBarIcon[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var searchBar = document.querySelector(".search-bar-mobile");
    if (searchBar.style.maxHeight) {
      searchBar.style.maxHeight = null;
    } else {
      searchBar.style.maxHeight = "45px";
    } 
  });
}

setTimeout(function () {
    console.log("Funcionou!");
    let viewheight = $(window).height();
    let viewwidth = $(window).width();
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
}, 300);