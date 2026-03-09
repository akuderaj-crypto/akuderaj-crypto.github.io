document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const dest = document.getElementById('destination').value;

    if(name && email) {
        alert(`Thank you, ${name}! We have received your enquiry regarding ${dest || 'Solapur'}. We will contact you at ${email} shortly.`);
        this.reset();
    } else {
        alert("Please fill in the required fields.");
    }
});
