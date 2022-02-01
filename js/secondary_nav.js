/*
** Expanding secondary nav
** by clicking on the
** "See more" button
*/

const secondaryNav = document.querySelector(".nav-secondary > ul")
const btnMore = document.querySelector(".nav-secondary .more")
const seeTest = document.querySelectorAll(".nav-secondary .more > span")
let hiddenInfo = document.querySelectorAll(".nav-secondary .hidden-info")

btnMore.onclick = () => {
    hiddenInfo.forEach((e) => {
        e.classList.toggle("hidden-info")
    })

    btnMore.classList.toggle("rotated")
    
    seeTest.forEach((e) => {
        e.classList.toggle("d-none")
    })
}