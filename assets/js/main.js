// announcement bar function
const announcement_close_btn = document.querySelector('.announcemnt_close_btn')
const announcement_bar = document.querySelector('.announcement_bar')

announcement_close_btn.addEventListener("click", () => {
    announcement_bar.classList.add("hidden")
})

// mobile menu function
const mobileBtn = document.querySelector(".menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")

mobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("hidden")
})

