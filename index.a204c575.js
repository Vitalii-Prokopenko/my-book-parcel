const e={menuContainer:document.querySelector(".js-menu-container"),menuToggle:document.querySelector(".js-menu-toggle"),menuOpen:document.querySelector(".js-menu-icon-open"),menuClose:document.querySelector(".js-menu-icon-close")};console.log(e.menuToggle);var n=e;const{menuContainer:s,menuToggle:o,menuOpen:l,menuClose:u}=n;let c=!0;o.addEventListener("click",(()=>{c?(l.classList.add("visually-hidden"),u.classList.remove("visually-hidden"),s.classList.add("is-open")):(l.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),s.classList.remove("is-open")),c=!c}));
//# sourceMappingURL=index.a204c575.js.map