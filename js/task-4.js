const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    }

    const info = {
        email: email,
        password: password,
    }

    console.log(info);
    event.target.reset();
}