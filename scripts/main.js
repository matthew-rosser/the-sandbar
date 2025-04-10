const buttons = document.querySelectorAll("button");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const home = document.getElementById("home");
const groups = document.querySelectorAll('div[class="group"]');

let current_group = null;

buttons.forEach(button => {
    if (button.id != "home") {
        button.addEventListener("click", e => {
            showGroup(button.id);
        });
    }
});

home.addEventListener("click", e => {
    current_group.style.display = "none";
    current_group = null;
    header.style.display = "block";
    buttons.forEach(button => {
        button.style.display = "block";
    });
    home.style.display = "none";
});

function showGroup(group) {
    current_group = document.getElementById(group + "-panel");
    groups.forEach(group => {
        group.style.display = "none";
    });
    buttons.forEach(button => {
        button.style.display = "none";
    });
    document.getElementById("home").style.display = "block";
    header.style.display = "none";
    current_group.style.display = "block";
}
