// Navegação
function showNav() {
    var navigation = document.getElementById("navigation");
    var btn = document.getElementById("btn_nav");

    if (btn.style.display === "none") {
        navigation.style.display = "block";
    }
    else {
        if (navigation.style.display === "none") {
            navigation.style.display = "block";
        }
        else {
            navigation.style.display = "none";
        }
    }
}