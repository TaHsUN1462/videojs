let __videos__ = document.querySelectorAll('.video');
__videos__.forEach((item) => {
  let video = item.querySelector('video');
  let playBtn = document.createElement("button");
  playBtn.className = "playBtn";
  playBtn.innerHTML = `
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M18.3 36.4q-.75.5-1.525.05Q16 36 16 35.1V12.6q0-.9.775-1.35.775-.45 1.525.05L36 22.6q.7.45.7 1.25T36 25.1Z"/></svg>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M29.25 38q-1.25 0-2.125-.875T26.25 35V13q0-1.25.875-2.125T29.25 10H35q1.25 0 2.125.875T38 13v22q0 1.25-.875 2.125T35 38ZM13 38q-1.25 0-2.125-.875T10 35V13q0-1.25.875-2.125T13 10h5.75q1.25 0 2.125.875T21.75 13v22q0 1.25-.875 2.125T18.75 38Z"/></svg>
  `
  let controls = document.createElement("div");
  controls.className = "controls";
  count++;
  let span = document.createElement("span");
  controls.appendChild(span)
  let range = document.createElement("input");
  range.type = "range";
  range.min = 0
  range.value = 0;
  range.oninput = () => {
    __changePos__(video, range, span);
  }
  let btnWrapper = document.createElement("div");
  btnWrapper.className = "btnWrapper";
  let mute = document.createElement("button");
  mute.className = "mute";
  mute.innerHTML = `
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M30.1 40.85q-.8.25-1.45-.25-.65-.5-.65-1.35 0-.4.225-.725.225-.325.625-.425 4.55-1.6 7.35-5.45t2.8-8.7q0-4.85-2.8-8.725T28.85 9.8q-.4-.1-.625-.45Q28 9 28 8.6q0-.85.675-1.325T30.1 7.05q5.35 1.9 8.625 6.525Q42 18.2 42 23.95t-3.275 10.375Q35.45 38.95 30.1 40.85ZM7.5 30q-.65 0-1.075-.425Q6 29.15 6 28.5v-9q0-.65.425-1.075Q6.85 18 7.5 18H14l7.45-7.45q.7-.7 1.625-.325Q24 10.6 24 11.6v24.8q0 1-.925 1.375t-1.625-.325L14 30ZM27 32.4V15.55q2.7.85 4.35 3.2Q33 21.1 33 24q0 2.95-1.65 5.25T27 32.4Z"/></svg>
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="m39.55 44.1-5.5-5.5q-1 .7-2.075 1.275-1.075.575-2.225.975-.8.25-1.45-.25-.65-.5-.65-1.35 0-.4.225-.725.225-.325.625-.425.9-.3 1.775-.7.875-.4 1.625-.95l-8.25-8.3v8.25q0 1-.925 1.375T21.1 37.45L13.65 30h-6.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-9q0-.65.425-1.075Q6.5 18 7.15 18h6.3L3.5 8.05q-.45-.45-.425-1.075Q3.1 6.35 3.55 5.9 4 5.45 4.6 5.45q.6 0 1.05.45l36.1 36.05q.45.45.45 1.075t-.45 1.075q-.45.45-1.1.45-.65 0-1.1-.45Zm-9.8-37.05q5.35 1.9 8.625 6.525Q41.65 18.2 41.65 23.95q0 2.55-.7 5t-2.1 4.65l-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-4.95-2.775-8.9T28.5 9.75q-.4-.1-.625-.425Q27.65 9 27.65 8.6q0-.85.675-1.325t1.425-.225Zm2.4 19.85-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 2.65-2.65q.7-.7 1.625-.325.925.375.925 1.375Z"/></svg>
  `
  mute.onclick = () => {
    if (video.muted) {
      video.muted = false
      mute.classList.remove("muted")
    }else{
      video.muted = true
      mute.classList.add("muted")
    }
  }
  let fullscreen = document.createElement("button");
  fullscreen.innerHTML = `
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M11.5 38q-.65 0-1.075-.425Q10 37.15 10 36.5v-6.65q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425Q13 29.2 13 29.85V35h5.15q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q18.8 38 18.15 38Zm0-18.35q-.65 0-1.075-.425Q10 18.8 10 18.15V11.5q0-.65.425-1.075Q10.85 10 11.5 10h6.65q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q18.8 13 18.15 13H13v5.15q0 .65-.425 1.075-.425.425-1.075.425ZM29.85 38q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q29.2 35 29.85 35H35v-5.15q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425Q38 29.2 38 29.85v6.65q0 .65-.425 1.075Q37.15 38 36.5 38Zm6.65-18.35q-.65 0-1.075-.425Q35 18.8 35 18.15V13h-5.15q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q29.2 10 29.85 10h6.65q.65 0 1.075.425Q38 10.85 38 11.5v6.65q0 .65-.425 1.075-.425.425-1.075.425Z"/></svg>
  `
  fullscreen.onclick = () => {
    video.requestFullscreen()
  }
  
  btnWrapper.appendChild(mute)
  btnWrapper.appendChild(fullscreen)
  controls.appendChild(range)
  controls.appendChild(btnWrapper)
  video.controls = false
  playBtn.onclick = () =>{
    if (!video.paused && !video.ended && video .readyState > 2) {
      video.pause()
      playBtn.classList.remove("playing")
    }else{
      video.play()
      playBtn.classList.add("playing")
    }
  }
  video.onended = () => {
    playBtn.classList.remove("playing")
  }
  item.appendChild(playBtn);
  item.appendChild(controls);
});
function __changePos__(vid, rng, spn){
  vid.currentTime = rng.value
  spn.innerHTML = `${Math.floor(rng.value / 60)}:${Math.floor(rng.value % 60)}/${Math.floor(vid.duration / 60)}:${Math.floor(vid.duration % 60)}`
}
function __status__(){
  __videos__.forEach((vidDiv) => {
    let range = vidDiv.querySelector("input");
    let video = vidDiv.querySelector("video");
    let span = vidDiv.querySelector("span");
    range.max = video.duration;
    range.value = video.currentTime
    span.innerText = `${Math.floor(range.value / 60).toString().padStart(2, "0")}:${String(range.value % 60).padStart(2, "0")}/${Math.floor(video.duration / 60).toString().padStart(2, "0")}:${String(Math.floor(video.duration % 60)).padStart(2, "0")}`
  });
  requestAnimationFrame(status)
}
__status__()