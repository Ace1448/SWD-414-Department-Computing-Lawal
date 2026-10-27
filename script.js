// Front-end demonstration only: this form does not send data to a server.
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    document.querySelector("#formMessage").textContent =
      `Thank you, ${name}. The demo form was submitted successfully. Connect a backend to receive real messages.`;
    contactForm.reset();
  });
}
