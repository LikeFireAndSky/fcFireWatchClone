document.querySelectorAll("#right-buttons .button-in-header").forEach((element) => {
    element.addEventListener("click", (event) => {
        document.getElementById("active-menu").removeAttribute("id")
        element.setAttribute("id", "active-menu")
    })
})

const sun = document.getElementById("sun")
const whiteCloud = document.getElementById("white-clouds")
const grayCloud = document.getElementById("gray-clouds")

const bird1 = document.getElementById("bird1")
const bird2 = document.getElementById("bird2")
const bird3 = document.getElementById("bird3")

const mountain0 = document.getElementById("mountain0")
const mountain1 = document.getElementById("mountain1")
const mountain2 = document.getElementById("mountain2")
const mountain3 = document.getElementById("mountain3")
const mountain4 = document.getElementById("mountain4")
const mountain5 = document.getElementById("mountain5")
const mountain6 = document.getElementById("mountain6")
const mountain7 = document.getElementById("mountain7")


let clientWidth = document.documentElement.clientWidth

window.addEventListener("scroll", () => {
    if (clientWidth > 600) {
        const scrollY = window.scrollY

        sun.style.transform = `translateY(${scrollY * 1.5}px)`
        whiteCloud.style.transform = `translateX(${scrollY * 0.123}px)`
        grayCloud.style.transform = `translateX(${scrollY * -0.123}px)`

        bird1.style.transform = `translateX(${scrollY * 0.723}px`
        bird2.style.transform = `translateX(${scrollY * -0.323}px`
        bird3.style.transform = `translateX(${scrollY * -0.923}px`

        mountain0.style.transform = `translateY(${scrollY * 1.123}px)`
        mountain1.style.transform = `translateY(${scrollY * 1.223}px)`
        mountain2.style.transform = `translateY(${scrollY * 0.9323}px)`
        mountain3.style.transform = `translateY(${scrollY * 0.7423}px)`
        mountain4.style.transform = `translateY(${scrollY * 0.6523}px)`
        mountain5.style.transform = `translateY(${scrollY * 0.5623}px)`
        mountain6.style.transform = `translateY(${scrollY * 0.4723}px)`
        mountain7.style.transform = `translateY(${scrollY * 0.1823}px)`
    }
})


const link = document.querySelector("a[href='#document-title']")

link.addEventListener("click", (event) => {
    event.preventDefault()

    const element = document.getElementById("document-title")
    element.scrollIntoView({behavior: "smooth"})
})

window.addEventListener("resize", () => {
    clientWidth = document.documentElement.clientWidth   

    if (clientWidth < 600) {

        sun.style.transform = `translateY(0px)`
        whiteCloud.style.transform = `translateX(0px)`
        grayCloud.style.transform = `translateX(0px)`

        bird1.style.transform = `translateX(0px)`
        bird2.style.transform = `translateX(0px)`
        bird3.style.transform = `translateX(0px)`

        mountain0.style.transform = `translateY(0px)`
        mountain1.style.transform = `translateY(0px)`
        mountain2.style.transform = `translateY(0px)`
        mountain3.style.transform = `translateY(0px)`
        mountain4.style.transform = `translateY(0px)`
        mountain5.style.transform = `translateY(0px)`
        mountain6.style.transform = `translateY(0px)`
        mountain7.style.transform = `translateY(0px)`
    }
})

