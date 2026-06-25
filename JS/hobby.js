document.querySelectorAll("nav a").forEach(a => {
    if (a.href.includes("hobby.html")) {
        a.style.color = "#ffe600";
        a.style.fontWeight = "bold";
    }
});