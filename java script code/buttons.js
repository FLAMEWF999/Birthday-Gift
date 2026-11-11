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