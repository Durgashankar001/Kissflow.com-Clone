let video = document.getElementById("home-video-content");
let button = document.getElementById("play");

let source = 'https://www.youtube.com/embed/VpeWhXL8AG8?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&vq=hd720';

button.addEventListener("click", function(event){
    video.innerHTML = `
    <div class="modal-content rounded-0">
    <div class="modal-body bg-dark p-0">
    <div class="ratio ratio-16x9"> 
    <iframe width="683" height="560" src="https://www.youtube.com/embed/VpeWhXL8AG8?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&vq=hd720?rel=0&modestbranding=1&autohide=1&showinfo=1&controls=1&autoplay=1"  title="YouTube video player"   frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      </div>
      </div>
      </div>`

      document.getElementById("container").style.filter = "blur(10px)";

})

// document.getElementById("home-video").addEventListener("click", function(event){
//     video.innerHTML = "";
// })

// document.addEventListener("click",function(){
//     video.style.display = "null";
//     document.getElementById("container").style.filter = "blur(0px)";

// })
