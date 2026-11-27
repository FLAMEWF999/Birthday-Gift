let btn= document.getElementById('audio_btn');
let audios = [
    '../audios/2a.mpeg',
    '../audios/1a.mpeg',
    '../audios/3a.mpeg',
    '../audios/4a.mpeg',
    '../audios/5a.mpeg',
    '../audios/6a.mpeg',
    '../audios/7a.mpeg',
    '../audios/8a.mpeg',
    '../audios/9a.mpeg'

]
let next_index = 0;
let currentaudio = null;
function play_next_audio(){
    if (currentaudio){
        currentaudio.pause();
        currentaudio.currentTime= 0;
    }
    

    currentaudio = new Audio(audios[next_index]);

    currentaudio.play()
    next_index++;
    if(next_index >= audios.length){
        next_index= 0;
    }
    
}


audio_btn.addEventListener('pointerdown',
    () =>{
play_next_audio()
    }
)


