window.onload = function () {
    if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) window.location.href = "/device-not-supported/";
    //Buttons
    document.getElementById('footer-btt-button').onclick = () => window.scroll({top: 0,behavior: 'smooth'});
    document.getElementById('home-button').onclick = () => window.location.href = '/';
    document.getElementById('info-button').onclick = () => window.location.href = '/about/';
    document.getElementById('contact-button').onclick = () => window.location.href = '/contact/';
    document.getElementById('main-button').onclick = () => window.location.href = 'https://www.github.com/fiktx/' ;
    document.getElementById('footer-github').onclick = () => window.location.href = 'https://www.github.com/fiktx/' ;        
    document.getElementById('footer-discord').onclick = () => window.location.href = 'https://discord.gg/RMzgM3CjWr' ;
    //Typing animation
    var i = 0; type();
    setTimeout(() => {untype();}, 750);
    setTimeout(() => {type2();}, 2000);
    function type() {var text1=" Good ";if (i < text1.length) {document.getElementById('typing-animation1').innerHTML += text1.charAt(i);i++;setTimeout(type, 150);}};
    function untype() {document.getElementById('typing-animation1').style = "color: #FF0000;";setTimeout(() => {document.getElementById('typing-animation1').innerHTML = "";i = 0;document.getElementById('typing-animation1').style = "color: #00FF00;";}, 750);};
    function type2() { var text2=" Best programmer "; if (i < text2.length) { document.getElementById('typing-animation1').innerHTML += text2.charAt(i); i++;setTimeout(type2, 150);} else {document.getElementById('typing-animation1').style = "color: #FFFFFF;";}};
}
