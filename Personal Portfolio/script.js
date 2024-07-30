let contacts = [];

function renderContacts() {
    const contact = document.getElementById("contact");
    contactList.innerHTML = "";
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} - ${contact.email}`;
        contact.appendChild(li);
    });
}

function openModal() {
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

function addContact() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const name = nameInput.value;
    const email = emailInput.value;
    if (name && email) {
        contacts.push({ name, email });
        renderContacts();
        closeModal();
        nameInput.value = "";
        emailInput.value = "";
    } else {
        alert("Please enter both name and email.");
    }
}

document.getElementById("add-contact-btn").addEventListener("click", openModal);
