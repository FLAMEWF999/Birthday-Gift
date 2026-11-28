function open_envelop(envelop) {
    envelop.classList.add('open');
    setTimeout(() =>{
        envelop.classList.add('show')
    },4000)
}




function create_envelop(x, y, color_aspects, color_bottom, color_envelop, color_cover, content){

    let envelop = document.createElement('div');
    envelop.classList.add('envelop')

    let t_bottom = document.createElement('div');
    t_bottom.classList.add('t_bottom');

    let cover= document.createElement('div');
    cover.classList.add('cover')

    let paper= document.createElement('div');
    paper.classList.add('paper');

    let heart = document.createElement('div');
    heart.classList.add('heart')


    document.querySelector('.envelops').appendChild(envelop);
    envelop.appendChild(t_bottom);
    envelop.appendChild(cover);
    envelop.appendChild(paper);
    envelop.appendChild(heart)

    envelop.style.top= y +'px';
    envelop.style.left= x +'px';
    envelop.style.backgroundColor= color_envelop;

    envelop.style.setProperty('--bg-color' ,color_aspects);
    t_bottom.style.setProperty('--bg-bottom-color',color_bottom)
    cover.style.setProperty('--bg-cover-color',color_cover)
    paper.textContent= content;
    

    envelop.addEventListener('pointerdown',
        () =>{
            open_envelop(envelop)});
    


    return envelop;

}





create_envelop(240, 40,' rgb(255, 0, 153)','rgb(216, 0, 130)','#ab046e ' ,'rgb(189, 39, 129)','هديتي بسيطة, هي غير مكتملة , لكن لو أعجبتك ستكون الهدية الأجمل بالعالم حتما')
create_envelop(120, 350,' rgb(255, 0, 0)','rgb(216, 0, 0)','#ab0404 ' ,'rgb(189, 39, 39)', 'أتمنى لك يوما جميلا وسنة جميلة وعمرا جميلا كذلك,  استمتعِ بوقتك')
create_envelop(240, 600,' rgb(212, 0, 255)','rgb(194, 0, 216)','#9a04ab ' ,'rgb(169, 39, 189)', "رغم أنني لا أحب المديح ,الا أنكِ تحفة رائعة, تستحق الثناء حتى نهاية العالم")
create_envelop(40, 40,' rgb(0, 255, 238)','rgb(0, 216, 216)','#04a6ab ' ,'rgb(39, 179, 189)' , "الأشياء الجميلة لا تبدو جميلة الا حين ينظر الها الشخص المناسب ")
create_envelop(40, 600,' rgb(238, 255, 0)','rgb(216, 216, 0)','#abab04 ' ,'rgb(189, 169, 39)', "لقد أبحرنا وأبت السفينة أن تغادر عيناكِ")

