
const button = document.getElementById("signup-button");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Thank you for signing up 😀";
});

(function () {
    emailjs.init({
        publicKey: "LQ22gjTn--qT4fo54"
    });
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const sendButton = document.getElementById("send-btn");
    const status = document.getElementById("form-status");

    sendButton.disabled = true;
    sendButton.textContent = "SENDING...";

    emailjs.sendForm(
        "service_blog",
        "template_8r6khbf",
        this
    )
    .then(function() {

        status.textContent = "Message sent successfully!";
        status.style.color = "green";

        contactForm.reset();

        sendButton.disabled = false;
        sendButton.textContent = "SEND MESSAGE";

    })
    .catch(function(error) {

        console.log("EmailJS Error:", error);
        console.log("Error status:", error.status);
        console.log("Error details:", error.text);

        status.textContent = "Message failed. Please try again.";
        status.style.color = "red";

        sendButton.disabled = false;
        sendButton.textContent = "SEND MESSAGE";

    });

});
