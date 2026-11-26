
let btn = document.getElementById("start_button");
let isArabic = true;

setInterval(()=>{
    if (isArabic){
        btn.textContent='start the trip';
        isArabic= false;
    }
    else{
        btn.textContent='ابدأ الرحلة';
        isArabic= true; 
    }
},2500);


let btn1 = document.getElementById("next-button");
let isArabic1 = true;

setInterval(()=>{
    if (isArabic1){
        btn1.textContent='contenue trip';
        isArabic1= false;
    }
    else{
        btn1.textContent='تابع الرحلة';
        isArabic1= true; 
    }
},2500);


