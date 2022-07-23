import footer from "../component/footer.js";

document.getElementById("footer").innerHTML = footer();
import navbar from "../component/navbar.js";
document.getElementById("nav").innerHTML = navbar();
console.log(navbar());

document.getElementById("login").addEventListener("click", toggle);
document.getElementById("class1").addEventListener("click", toggle);
document.getElementById("signin-btn1").addEventListener("click", signup);

function toggle() {
  var blur = document.getElementById("container1");
  blur.classList.toggle("active");
  document.getElementById("good_customers").classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function signup() {
  window.location.href = "signin.html";
}
document.getElementById("form").addEventListener("submit", submitData);
function submitData(event) {
  event.preventDefault();

  let form = document.getElementById("form");

  let user_name = form.user_name.value;
  let email = form.email.value;
  let password = form.password.value;

  let all_data = new Details(user_name, email, password);

  if (user_name == "" || email == "" || password == "") {
    alert("fill all details");
  } else {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    user.push(all_data);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "signin.html";
  }
}

class Details {
  constructor(user_name, email, password) {
    this.user_name = user_name;
    this.email = email;
    this.password = password;
  }
}

let video = document.getElementById("home-video-content");
let button = document.getElementById("play");

let source =
  "https://www.youtube.com/embed/VpeWhXL8AG8?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&vq=hd720";

button.addEventListener("click", function (event) {
  video.innerHTML = `
    <div class="modal-content rounded-0">
    <div class="modal-body bg-dark p-0">
    <div class="ratio ratio-16x9"> 
    <iframe width="683" height="560" src="https://www.youtube.com/embed/VpeWhXL8AG8?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&vq=hd720?rel=0&modestbranding=1&autohide=1&showinfo=1&controls=1&autoplay=1"  title="YouTube video player"   frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      </div>
      </div>
      </div>`;

  document.getElementById("container").style.filter = "blur(10px)";
});

// document.getElementById("home-video").addEventListener("click", function(event){
//     video.innerHTML = "";
// })

// document.addEventListener("click",function(){
//     video.style.display = "null";
//     document.getElementById("container").style.filter = "blur(0px)";

// })

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderNodes.length; i++) {
  tabHeaderNodes[i].addEventListener("click", function () {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");
    // tabIndicator.style.left = `calc(calc(calc(14% - 5px) * ${i}) + 30px)`
  });
}

document.getElementById("getbtn").addEventListener("click", function () {
  window.location.href = "signin.html";
});
