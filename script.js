const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    formData.append("access_key", "d666723e-14df-4c00-a2d5-58b2fb6796c3");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        alert("Message sent successfully! ✅");
        contactForm.reset();
    } else {
        alert("Something went wrong. Please try again.");
    }

});