const allFilters = document.querySelectorAll(".projects .filter")
const projects = document.querySelectorAll(".projects .nav-projects > ul > li > a")

allFilters.forEach((filter) => {
    filter.onclick = () => {
        allFilters.forEach((e) => {
            e.classList.remove("active")
        })

        filter.classList.add("active")

        if(filter.classList.contains("filter-all")) {
            projects.forEach((project) => {
                project.parentElement.classList.remove("hidden-info")
            })
        }else if(filter.classList.contains("filter-active")) {
            projects.forEach((project) => {
                if(!project.classList.contains("project-active")) {
                    project.parentElement.classList.add("hidden-info")
                } else {
                    if(project.parentElement.classList.contains("hidden-info")) {
                        project.parentElement.classList.remove("hidden-info")
                    }
                }
            })
        }else if(filter.classList.contains("filter-pending")) {
            projects.forEach((project) => {
                if(!project.classList.contains("project-pending")) {
                    project.parentElement.classList.add("hidden-info")
                } else {
                    if(project.parentElement.classList.contains("hidden-info")) {
                        project.parentElement.classList.remove("hidden-info")
                    }
                }
            })
        }else if(filter.classList.contains("filter-completed")) {
            projects.forEach((project) => {
                if(!project.classList.contains("project-completed")) {
                    project.parentElement.classList.add("hidden-info")
                } else {
                    if(project.parentElement.classList.contains("hidden-info")) {
                        project.parentElement.classList.remove("hidden-info")
                    }
                }
            })
        }
    }
})