const one = document.querySelector(".one")
const two = document.querySelector(".two")
two.style.display = "none";
const button = document.querySelector(".button")
button.addEventListener("click", function(){
    one.style.display = "none";
    two.style.display = "initial";
})

const stars = document.querySelector(".selected-stars")
const ratings = document.querySelectorAll(".ratings")
ratings.forEach(element => {
    element.addEventListener("click", function(){
        ratings.forEach(element2 => {
            element2.style = "none";
        })
        element.style.backgroundColor = "#fa7312";
        element.style.color = "white";
        stars.innerText = `You selected ${element.innerText} out of 5`
    })
})
