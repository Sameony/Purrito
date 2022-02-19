const container = document.querySelector(".formContainer");
const switchButtons = document.querySelectorAll(".pointer");

switchButtons.forEach(element => {
    element.addEventListener("click",() => {
        container.classList.toggle("sign-in");
        container.classList.toggle("sign-up");
    });
    console.log("da")
});

setTimeout(() => {container.classList.add('sign-in')}, 200)