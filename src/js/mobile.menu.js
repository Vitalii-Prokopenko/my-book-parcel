import refs from './refs';

const { menuContainer, menuToggle, menuOpen, menuClose } = refs;

// console.log(menuOpen);

let isClosed = true;

const handleClick = () => {
if (isClosed) {
    menuOpen.classList.add("visually-hidden");
    menuClose.classList.remove("visually-hidden");

    menuContainer.classList.add("is-open");
} else {
    menuOpen.classList.remove("visually-hidden");
    menuClose.classList.add("visually-hidden");

    menuContainer.classList.remove("is-open");
}


isClosed = !isClosed;


}

menuToggle.addEventListener("click", handleClick);