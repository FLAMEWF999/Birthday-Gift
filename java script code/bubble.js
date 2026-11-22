
function random_number(min, max) {
    return Math.random() * (max - min) + min;
}



let input = document.createElement('input');



input.className= 'input';
input.placeholder="تمنّ امنية" ;
input.maxLength=20 ;
input.type = 'text';

document.body.appendChild(input);
let confirm_btn = document.getElementById('confirm-button');
let cencel_btn = document.getElementById('cencel-button');



function creat_bubble(wish) {
    const b= document.createElement('p');
    const bubble = document.createElement('div');

    b.textContent= wish;

    bubble.classList.add('bubble');
    bubble.appendChild(b)

    


    const speed_y = random_number(0.5, 1);
    const amplitude = random_number(10, 70);
    const frequency = random_number(0.01, 0.04);

    const siz = random_number(60, 120);
    const x = random_number(-200, 400);
    const y = 700;

    const start_x = x;

    bubble.style.height = siz + 'px';
    bubble.style.width = siz + 'px';
    bubble.style.setProperty('--siz', siz + 'px');
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';

    document.querySelector('.bubbles').appendChild(bubble);
    



    move_bubble(
        bubble, x, y, speed_y,
        start_x, amplitude, frequency, 0
    );
}

function move_bubble(
    bubble, x, y, speed_y,
    start_x, amplitude, frequency, frame
) {

    y -= speed_y;

    x = start_x + Math.sin(frame * frequency) * amplitude;

    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';

    if (y > -150) {

        requestAnimationFrame(() => {
            move_bubble(
                bubble, x, y, speed_y,
                start_x, amplitude, frequency, frame + 1
            );
        });

    } else {
        bubble.remove();
    }
}

confirm_btn.addEventListener('pointerdown', 
    function() {
        let wish =input.value;
        confirm_btn.style.display= 'none';
        cencel_btn.style.display= 'none';
        input.style.display= 'none';
        setInterval(() => {

            creat_bubble(wish)
        }
        ,1500)
    }
)










