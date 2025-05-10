function openTab(event, tabName) {
    var i, tabs;
    tabs = document.getElementsByClassName("tab");
    

    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    

    document.getElementById(tabName).style.display = "block";


    var tabLinks = document.querySelectorAll(".tabs a");
    tabLinks.forEach(link => link.classList.remove("active"));


    event.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about").style.display = "block";
});
