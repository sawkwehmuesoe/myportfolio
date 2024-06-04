// jQuery Area 
$(document).ready(function(){

    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('crossxs');
    })

});

// Javascript Area 
const gettablinks = document.querySelectorAll('.tablink');
const gettabpages = document.querySelectorAll('.tab-page');

function gettab(evn,linkid){

    gettabpages.forEach(function(gettabpage){
        gettabpage.style.display = "none";

    });

    for(var x = 0; x < gettablinks.length ; x++){
        gettablinks[x].classList.remove('active');
    }

    document.getElementById(linkid).style.display = "block";
    evn.target.classList.add('active');

}

document.getElementById('autoclick').click();