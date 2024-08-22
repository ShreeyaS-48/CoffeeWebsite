document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("ReadyState Complete");
        initApp();
    }
});
const initApp = ()=>{
    const signInForm = document.querySelector("#sign_in_form");
    document.getElementById("phone").addEventListener("input", (event)=>{
        const input = document.getElementById("phone");
        const regex = /(\+91)?[. -]?(\d{3})[. -]?(\d{3})[. -]?(\d{4})$/g;
        const phone = input.value;
        const found = regex.test(phone);
        if(!found && phone.length){
            input.classList.add("invalid");
            const sumbitButtom = signInForm.querySelector("button");
            sumbitButtom.disabled = true;
        }
        else{
            input.classList.remove("invalid");
            const whitespace = /(\+91)?[. -]?/g;
            const savedPhoneNumber = phone.replaceAll(whitespace, "");
            console.log(`Phone Number: ${savedPhoneNumber}`);
        }
    });
    signInForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        alert("Details Submited!");
    });
}
