document.querySelectorAll("nav a").forEach(a => {
    if (a.href.includes("home.html")) {
        a.style.color = "#ffe600";
        a.style.fontWeight = "bold";
    }
});

if (!userEmail) {
    window.location.href =
        "index.html";
}


function logout() {

    localStorage.clear();

    window.location.href =
        "index.html";
}