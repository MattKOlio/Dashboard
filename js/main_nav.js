const allTabs = document.querySelectorAll(".tabs > ul > li > a")

allTabs.forEach((tab) => {
    tab.onclick = () => {
        allTabs.forEach((e) => {
            e.classList.remove("active")
        })

        tab.classList.add("active")
    }
})