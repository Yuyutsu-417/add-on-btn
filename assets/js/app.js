let add = document.querySelector(".add-btn");
let save = document.querySelector(".save-btn");
let value = document.querySelector("h2");
let savedValue = document.querySelector("p");
let reset = document.querySelector(".reset")


add.addEventListener("click", () => {
    value.innerHTML = +value.innerHTML + 1;
})

save.addEventListener("click", () => {
    if (value.innerHTML == 0) { 
        alert("Please add some value :)")
    }
    else {
        if (savedValue.innerHTML == 0) {
            savedValue.innerHTML = value.innerHTML
        }
        else {
            savedValue.innerHTML = savedValue.innerHTML + ',' + value.innerHTML
        }
    }
    value.innerHTML = 0
})

reset.addEventListener("click", () => {
    value.innerHTML = 0;
    savedValue.innerHTML = 0
    reset.style.display = 'none'
})

add.addEventListener("click", () => {
     if (value.innerHTML != 0) {
        reset.style.display = 'block'
    }
})