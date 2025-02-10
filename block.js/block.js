const contactForm = document.getElementById("contact-form");
const contactContainer = document.querySelector(".contact-container");
const contactName = document.getElementById("contact-name");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const deleteBtn = document.getElementsByClassName("delete");
const h2Element = document.getElementById("h2Element");
const contacts = [];

searchBtn.addEventListener('click' ,() =>{
    contactForm.style.display = "block";
    h2Element.style.display = "block"
});
 function newUpdatedContact(){
  contactContainer.innerHTML = "";
  contacts.forEach((contact,index) => {
    const contactElement = document.createElement("div");
    contactElement.classList.add("contact-card");
    contactElement.innerHTML = `
      <h3>${contact.name}</h3>
      <div class="contact-info">
        <p>📞 ${contact.phone}</p>
        <p>✉️ ${contact.email}</p>
      </div>
    `;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";

      deleteButton.addEventListener("click" , () =>{
        contacts.splice(index , 1);
        newUpdatedContact();
      }
    )
        contactElement.appendChild(deleteButton);
        contactContainer.appendChild(contactElement)
     })
 
    }




contactForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
  const newContact = {
   name: contactName.value ,
   phone: contactPhone.value ,
   email: contactEmail.value 
  };
  contacts.push(newContact);
  newUpdatedContact();

  contactName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";

})

