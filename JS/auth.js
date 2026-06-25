function login() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {

        document.getElementById("msg").innerHTML =
            "Enter email and password";

        return;
    }

    localStorage.setItem(
        "userEmail",
        email
    );

    localStorage.setItem(
        "userName",
        email.split("@")[0]
    );

    window.location.href =
        "home.html";
}