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