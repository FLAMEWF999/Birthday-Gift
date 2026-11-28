
function random_number(min, max) {
    return Math.random() * (max - min) + min;
}


function creat_heart() {
    
    const heart= document.createElement('div');


    heart.classList.add('heart');
 

    


    const speed_y = random_number(1, 3);
    const amplitude = random_number(10, 70);
    const frequency = random_number(0.01, 0.04);

    const siz = random_number(10, 50);
    const x = random_number(0, window.innerWidth - siz);
    const y = 700;

    const start_x = x;

    heart.style.height = siz + 'px';
    heart.style.width = siz + 'px';
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.querySelector('.hearts').appendChild(heart);
    



    move_heart(
        heart, x, y, speed_y,
        start_x, amplitude, frequency, 0
    );
}

function move_heart(
    heart, x, y, speed_y,
    start_x, amplitude, frequency, frame
) {

    y -= speed_y;

    x = start_x + Math.sin(frame * frequency) * amplitude;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    if (y > -150) {

        requestAnimationFrame(() => {
            move_heart(
                heart, x, y, speed_y,
                start_x, amplitude, frequency, frame + 1
            );
        });

    } else {
        heart.remove();
    }
}

function opacity(hearts){
    hearts.classList.add('o')
}

let cover = document.getElementById('cover');
function open_box (cover){
    cover.classList.add('open')
};

let text = "بدايةَ   , عيد ميلاد سعيد , أتمنى أن تكون هديتي جميلة بالنسبة لك وأن تكون قد نالت اعجابك , أعلم أنها لم تكن بتلك الجمال لكنني حرصت أن أبذل قصارى جهدي فيها , أتمنى لك يوم ميلاد سعيد , وشكرا لأنك وصلت الى هذا الحد  الى اللقاء ." ;
let final_text= document.getElementById('final_text');
let words = text.split(' ');
let i = 0;
function write(){
    if (i >= words.length){
        return;
    }
    final_text.textContent += words[i] +' ';

    i++;
    setTimeout(write,1000)
}


let box_gift =document.getElementById("box-gift");
let btn1= document.getElementById('audio_btn');
let video = document.querySelector('video');
let p2 = document.getElementById('p2');

box_gift.addEventListener('pointerdown',(() =>{
    open_box(cover);
    cover.style.left=-10 +'px';
    setTimeout(() =>{
        video.style.display= 'none';
        btn1.style.display= 'none';
        box_gift.style.display= 'none';
        p2.style.display= 'none';
        document.body.style.backgroundColor= 'pink';
        setInterval(() =>{
            creat_heart()
        },400)
        setTimeout(() =>{
            p2.style.color= "red";
            p2.textContent= 'اضغط لايقاف القلوب وعرض اخر رسالة';
            p2.style.display= 'block';
        },3000)
        document.addEventListener('pointerdown',(() =>{
            p2.style.display= 'none';
            let hearts = document.getElementById('hearts');
            write()
            opacity(hearts)

            
        }))



    },4000)

}))

