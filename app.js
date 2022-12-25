let mobileMenuBtn = document.querySelector('#mobile-menu-btn')
let mobileProfileBtn = document.querySelector('#mobile-profile-btn')
let mobileMenuContainer = document.querySelector('.mobile-menu-container')
let mobileProfileContainer = document.querySelector('.mobile-profile-container')

let modal = document.querySelector('.modal')

mobileMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenuContainer.classList.toggle("mobile-menu-block");
    mobileProfileContainer.classList.remove("mobile-profile-block");
});
mobileProfileBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileProfileContainer.classList.toggle("mobile-profile-block");
    mobileMenuContainer.classList.remove("mobile-menu-block");
});
document.body.addEventListener("click", function () {
    mobileMenuContainer.classList.remove("mobile-menu-block");
    mobileProfileContainer.classList.remove("mobile-profile-block");
});