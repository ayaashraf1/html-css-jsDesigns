const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
    const btnEle = document.createElement('button');
    btnEle.className = 'soundBtn';
    btnEle.innerText= sound;

    btnEle.addEventListener('click',()=>{
        stopOtherSound();
        document.getElementById(sound).play();
    });

    function stopOtherSound(){
        sounds.forEach(sound => {
            document.getElementById(sound).pause();
            document.getElementById(sound).currentTime = 0;
        });
    }

    document.body.append(btnEle);

});