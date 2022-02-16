const mobile_tracks = document.querySelectorAll('.mobile-track');
const lap_tracks = document.querySelectorAll('.lap-track-content');
const link_btn = document.querySelectorAll('#button-div .btn');

mobile_tracks.forEach((track)=>{    
    track.addEventListener('click',()=>{
        if(track.classList.contains('active')){
            track.classList.remove('active');                                                                         
        }else{
            mobile_tracks.forEach((t)=>{t.classList.remove('active')});                        
            track.classList.add('active');                                                     
        }        
    });
});

function btn1(){            
    let track = document.querySelector('#track1');
    let btn = document.querySelector('.btn1');
    if(track.classList.contains('active')){

    }else{ 
        link_btn.forEach((b)=>{b.classList.remove('b-active')})
        lap_tracks.forEach((t)=>{t.classList.remove('active')});
        btn.classList.add('b-active');       
        track.classList.add('active');
    }    
}
function btn2(){    
    let track = document.querySelector('#track2');
    let btn = document.querySelector('.btn2');
    if(track.classList.contains('active')){

    }else{ 
        link_btn.forEach((b)=>{b.classList.remove('b-active')})
        lap_tracks.forEach((t)=>{t.classList.remove('active')});
        btn.classList.add('b-active');       
        track.classList.add('active');
    }   
}
function btn3(){    
    let track = document.querySelector('#track3');
    let btn = document.querySelector('.btn3');
    if(track.classList.contains('active')){

    }else{ 
        link_btn.forEach((b)=>{b.classList.remove('b-active')})
        lap_tracks.forEach((t)=>{t.classList.remove('active')});
        btn.classList.add('b-active');       
        track.classList.add('active');
    }    
}

function btn4(){    
    let track = document.querySelector('#track4');
    let btn = document.querySelector('.btn4');
    if(track.classList.contains('active')){

    }else{ 
        link_btn.forEach((b)=>{b.classList.remove('b-active')})
        lap_tracks.forEach((t)=>{t.classList.remove('active')});
        btn.classList.add('b-active');       
        track.classList.add('active');
    }   
}

function btn5(){    
    let track = document.querySelector('#track5');
    let btn = document.querySelector('.btn5');
    if(track.classList.contains('active')){

    }else{ 
        link_btn.forEach((b)=>{b.classList.remove('b-active')})
        lap_tracks.forEach((t)=>{t.classList.remove('active')});
        btn.classList.add('b-active');       
        track.classList.add('active');
    }   
}