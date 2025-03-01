let song = document.getElementById("song")
let progress = document.getElementById("progress")
let ctrlIcon = document.getElementById("ctrlIcon")
let ctrldiv = document.getElementById("ctrldiv")

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        setInterval(()=>{ progress.value = song.currentTime;},2000);
    }
}
progress.addEventListener("change",()=>{song.currentTime = progress.value})    


