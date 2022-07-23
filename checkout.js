import navbar from "../component/navbar.js"
document.querySelector(".nav").innerHTML = navbar();
import footer from "../component/footer.js"


document.getElementById("footer").innerHTML = footer();
document.querySelector(".card_number_input").oninput = () => {
    document.querySelector(".card_number_box").innerText = 
    document.querySelector(".card_number_input").value;
}
document.querySelector(".card_holder_input").oninput = () => {
    document.querySelector(".card_holder_name").innerText = 
    document.querySelector(".card_holder_input").value;
}
document.querySelector(".month_input").oninput = () => {
    document.querySelector(".exp_month").innerText = 
    document.querySelector(".month_input").value;
}
document.querySelector(".year_input").oninput = () => {
    document.querySelector(".exp_year").innerText = 
    document.querySelector(".year_input").value;
}
document.querySelector(".cvv_input").onmouseenter = () => {
    console.log("Durga")
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(-180deg)" 
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)" 
}
document.querySelector(".cvv_input").onmouseleave = () => {
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)" 
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)" 
}
document.querySelector(".cvv_input").oninput = () => {
    document.querySelector(".cvv_box").innerText = 
    document.querySelector(".cvv_input").value; 
}
document.getElementById("submitBtn").onclick = (event) => {
    event.preventDefault();
    if(document.querySelector(".card_number_input").value=="1234567891234567" && document.querySelector(".month_input").value=="05" && document.querySelector(".year_input").value=="2026" && document.querySelector(".cvv_input").value=="1234"){
        document.getElementById("form").style.left = "-702px"
        document.getElementById("otpBox").style.left ="-702px"
    }
    else{
        alert("invlid Credential details")
    }

}
document.getElementById("resend").onclick = (event) => {
    event.preventDefault();
    document.getElementById("form").style.left = "0px"
    document.getElementById("otpBox").style.left ="0px"
}

document.getElementById("next").onclick = () => {
    window.location.href="#myCard"
}
document.querySelectorAll(".card_btn").forEach((el)=>{
    el.onclick=()=>{
        window.location.href="#form"
    }
})

document.getElementById("otpBtn").onclick = () => {
    if(document.getElementById("one").value=="1" && document.getElementById("two").value=="2" && document.getElementById("three").value=="3" && document.getElementById("four").value=="4")
    {
        window.location.href="./confirm.html"
    }
    else{
        alert("Please Enter the Correct OTP")
    }
}
