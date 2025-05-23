// handling the messages in the form;

document.querySelector(".submit").addEventListener("click", (e) =>{
    e.preventDefault(); //to stop automatic form submission
    const message = document.querySelector(".sent");
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const text = document.querySelector(".message");
    
    
    if(name.value === "" || email.value === "" || text.value === ""){
        message.innerHTML= "⚠️ Please fill all fields!"
        message.style.display = "block"
        message.style.color = "red"
        
        setTimeout(()=>{
            message.style.display = "none";
        
        }, 3000);
    }else{
        message.innerHTML = "✓ Your message has been sent. I will get back to you soon. Thanks!"
        message.style.display = "block";
        message.style.color = "#09d809";

        setTimeout(()=>{
            name.value = "";
            email.value = "";
            text.value = "";
            message.style.display = "none"
        }, 3000)
    }
    
     // 3 seconds delay
})

// year in the footer 
const day = new Date("May 20, 2025")
const year = day.getFullYear();
document.querySelector(".year").innerHTML = year; 

//skills display


const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".col");

function skillsDisplay(tabID, event){



    for (let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents){
        tabContent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabID).classList.add("active");
}

