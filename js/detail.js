// === watch ===
function Watch() {
    // alert("watch");
    document.getElementById("pre-watch").hidden = "true";
    document.getElementById("post-watch").style.display = "block";
    document.getElementById("movie").autoplay = true;
    document.getElementById("movie").load();
    document.getElementsByClassName("detail")[1].style.width="100%";
    document.getElementsByClassName("detail")[1].style.display="block";
    document.getElementsByClassName("detail")[1].style.marginLeft="0px";
}