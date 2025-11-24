function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (email === "" || senha === "") {
        msg.textContent = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Login efetuado (simulado)!";
    msg.style.color = "green";
}
