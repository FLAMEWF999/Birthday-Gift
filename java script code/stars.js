
// توليد رقم عشوائي عشري بين رقمين
function random_number(min, max) {
    return Math.random() * (max - min) + min;
}


// توليد نجمة جديدة
function create_star(size, x, y) {

    const star = document.createElement('div');

    star.classList.add('star');

    star.style.width = size + 'px';
    star.style.height = size + 'px';

    star.style.left = x + 'px';
    star.style.top = y + 'px';

    document.querySelector('.stars').appendChild(star);

    return star;
}

function spawn_star() {
    const size = random_number(2, 4);
    const speed_y = random_number(0.1, 0.9);
    const speed_x = random_number(-0.5, 0.5);

    const x = random_number(0, 800);
    const y = random_number(-50, 600);

    const star = create_star(size, x, y);

    move_star(star, x, y, speed_x, speed_y);
    twinkles_star(star);
}

// دالة تحريك النجمة
function move_star(star, x, y, speed_x, speed_y) {

    x += speed_x;
    y += speed_y;

    star.style.left = x + 'px';
    star.style.top = y + 'px';

    // التحقق من خروج النجمة من الشاشة
    if (x > -50 && y < window.innerHeight + 50) {

        requestAnimationFrame(() => {
            move_star(star, x, y, speed_x, speed_y);
        });

    } else {

        star.remove();

    }
}


// دالة وميض النجمة
function twinkles_star(star) {

    star.style.opacity = Math.random();

    setTimeout(() => {
        if (star.isConnected) {
            twinkles_star(star);
        }
    }, random_number(500, 2000));

}


// إنشاء 50 نجمة ثابتة
for (let i = 0; i < 80; i++) {

    const size = random_number(1, 3);

    const x = random_number(0, window.innerWidth);
    const y = random_number(0, window.innerHeight);

    const star = create_star(size, x, y);

    twinkles_star(star);

}




setInterval(spawn_star, 800);

