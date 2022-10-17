$(document).ready(function(){
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
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);

    $(".target").hide();
    $("#div1").show();

    $(".single").click(function(){
        $(".target").hide()
        $("#div"+$(this).attr("target")).show();
    });

    let showRestaurantMenuItem = document.querySelectorAll(".choose-dishe__menu_item");
    showRestaurantMenuItem.forEach(item => {
        item.addEventListener("click", function() {
            showRestaurantMenuItem.forEach(item=>item.classList.remove("accent-background"));
            item.classList.add("accent-background");
        });
    }); 

    // ---------------------------------------------------------------------------------------

    function AumentaPerc() {

        var campo = document.getElementById("percentual")
        var preco = document.getElementById("price")
        var list1 = document.getElementById("list1")
    
        
        campo.value = parseInt(campo.value) + 1;
        preco.value = parseInt(preco.value) + 18;
        list1.value = parseInt(list1.value) + 1;
    
    }
    
    function DiminuiPerc() {
    
        var campo = document.getElementById("percentual")
        var preco = document.getElementById("price")
        var list1 = document.getElementById("list1")
        
        
        campo.value= parseInt(campo.value) - 1;
        preco.value= parseInt(preco.value) - 18;
        list1.value = parseInt(list1.value) - 1;
    }

    function AumentaPerc2() {

        var campo2 = document.getElementById("percentual2")
        var preco2 = document.getElementById("price2")
        var list2 = document.getElementById("list2")
    
        campo2.value= parseInt(campo2.value) + 1;
        preco2.value= parseInt(preco2.value) + 23;
        list2.value = parseInt(list2.value) + 1;
    }

    function DiminuiPerc2() {
    
        var campo2 = document.getElementById("percentual2")
        var preco2 = document.getElementById("price2")
        var list2 = document.getElementById("list2")
        
        
        campo2.value= parseInt(campo2.value) - 1;
        preco2.value= parseInt(preco2.value) - 23;
        list2.value = parseInt(list2.value) - 1;
    }

    function AumentaPerc3() {

        var campo3 = document.getElementById("percentual3")
        var preco3 = document.getElementById("price3")
        var list3 = document.getElementById("list3")
    
        campo3.value= parseInt(campo3.value) + 1;
        preco3.value= parseInt(preco3.value) + 12;
        list3.value = parseInt(list3.value) + 1;
    }

    function DiminuiPerc3() {
    
        var campo3 = document.getElementById("percentual3")
        var preco3 = document.getElementById("price3")
        var list3 = document.getElementById("list3")
    
        campo3.value= parseInt(campo3.value) - 1;
        preco3.value= parseInt(preco3.value) - 12;
        list3.value = parseInt(list3.value) - 1;
    }

    function AumentaPerc4() {

        var campo4 = document.getElementById("percentual4")
        var preco4 = document.getElementById("price4")
        var list4 = document.getElementById("list4")
    
        campo4.value= parseInt(campo4.value) + 1;
        preco4.value= parseInt(preco4.value) + 5;
        list4.value = parseInt(list4.value) + 1;
    }

    function DiminuiPerc4() {
    
        var campo4 = document.getElementById("percentual4")
        var preco4 = document.getElementById("price4")
        var list4 = document.getElementById("list4")
    
        campo4.value= parseInt(campo4.value) - 1;
        preco4.value= parseInt(preco4.value) - 5;
        list4.value = parseInt(list4.value) - 1;
    }

    function AumentaPerc5() {

        var campo5 = document.getElementById("percentual5")
        var preco5 = document.getElementById("price5")
        var list5 = document.getElementById("list5")
    
        campo5.value= parseInt(campo5.value) + 1;
        preco5.value= parseInt(preco5.value) + 15;
        list5.value = parseInt(list5.value) + 1;
    }

    function DiminuiPerc5() {   
        var campo5 = document.getElementById("percentual5")
        var preco5 = document.getElementById("price5")
        var list5 = document.getElementById("list5")
    
        campo5.value= parseInt(campo5.value) - 1;
        preco5.value= parseInt(preco5.value) - 15;
        list5.value = parseInt(list5.value) - 1;
    }

    function AumentaPerc6() {

        var campo6 = document.getElementById("percentual6")
        var preco6 = document.getElementById("price6")
        var list6 = document.getElementById("list6")
    
        campo6.value= parseInt(campo6.value) + 1;
        preco6.value= parseInt(preco6.value) + 8;
        list6.value = parseInt(list6.value) + 1;
    }

    function DiminuiPerc6() {   
        var campo6 = document.getElementById("percentual6")
        var preco6 = document.getElementById("price6")
        var list6 = document.getElementById("list6")
    
        campo6.value= parseInt(campo6.value) - 1;
        preco6.value= parseInt(preco6.value) - 8;
        list6.value = parseInt(list6.value) - 1;
    }
    
    // Função onde o botão irá abrir e fechar o container onde as informações estão armazenadas. 

    // ---------------------------------------------------------------------------------------- //
    // É atribuida uma classe à div pai, que possui o box que terá função de dropdown           //
    // partir dai é estilizado de duas formas diferentes, uma para quando está ativa            //
    // outra pra quando não.                                                                    //
    // logo caso queira mudar, deve procurar no css onde está 'management_content.active'       //
    // a animação é feita pelo css, js apenas coloca e retira a classe                          //
    // ---------------------------------------------------------------------------------------- //

    const grabButton = document.getElementsByClassName("button_title");
    let box = document.getElementsByClassName("management_content");
    let button_icon = document.getElementsByClassName("management_button");

    for (let i = 0; i < grabButton.length; i++) {

        grabButton[i].addEventListener(`click`, () => {
            box[i].classList.toggle(`active`)  
            if (box[i].classList.contains(`active`)) {
                button_icon[i].innerText = "-"
            }
            else {
                button_icon[i].innerText = "+"
            }
        });
    }
});

