
// توليد رقم عشوائي بين رقمين
function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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


// دالة تحريك النجمة
function move_star(star, x, y) {

    star.style.left = x + 'px';
    star.style.top = y + 'px';

}


// دالة وميض النجمة
function twinkles_star(star) {

    star.style.opacity = Math.random();

}


// إنشاء 50 نجمة
for (let i = 0; i < 50; i++) {

    const size = random_number(1, 3);

    const x = random_number(0, window.innerWidth);

    const y = random_number(0, window.innerHeight);

    const star = create_star(size, x, y);




}
