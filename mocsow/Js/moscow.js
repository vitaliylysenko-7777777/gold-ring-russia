
//Выпадающее меню
document.querySelectorAll(".menu__button").forEach(button => {
    button.addEventListener('click', function (event) {
        document.querySelectorAll('.menu__item').forEach(item => {
            if (item.querySelector('.menu__button') !== button) {
                item.classList.remove('menu__item_open')
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('menu__item_open')
    })
})

document.body.addEventListener('click', function (event) {
    console.log(event.target.parentElement.classList.contains('menu__item_open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('menu__button') == true ||
        event.target.classList.contains('dropdown-menu') == true
    ) return

    document.querySelectorAll('.menu__item').forEach(item => {
        item.classList.remove('menu__item_open')
    })
})
// Burger
let burger = document.getElementById("burger")
let lineOne = document.getElementById("line-one")
let lineTwo = document.getElementById("line-two")
let lineThree = document.getElementById("line-three")
let menu = document.createElement("div")
let menuList1 = document.createElement("p")
let menuList2 = document.createElement("p")
let menuList3 = document.createElement("p")
let header = document.getElementById("header")

menu.classList.add("burger-menu")

menuList1.classList.add("menu_list")
menuList1.textContent = "История"

menuList2.classList.add("menu_list")
menuList2.textContent = "Как добраться до Москвы"

menuList3.classList.add("menu_list")
menuList3.textContent = "Достопримечательности"

burger.addEventListener("click", function () {
    menu.classList.toggle("burger-menu__activ")
    lineOne.classList.toggle("burger__line_one-activ")
    lineTwo.classList.toggle("burger__line_two-activ")
    lineThree.classList.toggle("burger__line_three-activ")
    oldHistory.classList.remove("burger-menu-history__activ")
    travel.classList.remove("burger-menu-travel__activ")
    attractions.classList.remove("burger-menu-attractions__activ")
})

let oldHistory = document.getElementById("burger-menu-history")

menuList1.addEventListener("click", function () {
    oldHistory.classList.toggle("burger-menu-history__activ")
    travel.classList.remove("burger-menu-travel__activ")
    attractions.classList.remove("burger-menu-attractions__activ")
})

let travel = document.getElementById("burger-menu-travel")

menuList2.addEventListener("click", function () {
    travel.classList.toggle("burger-menu-travel__activ")
    oldHistory.classList.remove("burger-menu-history__activ")
    attractions.classList.remove("burger-menu-attractions__activ")
})

let attractions = document.getElementById("burger-menu-attractions")

menuList3.addEventListener("click", function () {
    attractions.classList.toggle("burger-menu-attractions__activ") 
    oldHistory.classList.remove("burger-menu-history__activ")
    travel.classList.remove("burger-menu-travel__activ")
})


header.append(menu)
menu.append(menuList1, menuList2, menuList3)