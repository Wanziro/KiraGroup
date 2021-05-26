$('.carousel').carousel();
const toTop = () => $('html, body').animate({scrollTop: $('body').offset().top - 150},1000);
const goTo = position => {
  if(position === "#about"){
    document.getElementById('aboutTab').classList.add('active-li');
  }
  $('html, body').animate({
    scrollTop: $(position).offset().top - 80
  },1000);
}
$(document).ready(() => {
  new WOW().init();
  $('#ttp').click(toTop);
});
const togglePop = (h = '',c = '') => {
  if(c != ''){
    if(h != ''){
      popH.innerHTML = h;
      popH.style.display = 'block';
      popC.classList.remove('pt-3');
      popC.classList.add('pop-c-m');
    }else{
      popH.style.display = 'none';
      popC.classList.remove('pop-c-m');
      popC.classList.add('pt-3');
    }
    popUp.classList.toggle("show-pop-up");
    if(popUp.classList.contains('show-pop-up')){popC.innerHTML = spinW;}
    setTimeout(()=>{popC.innerHTML = c},1000);
  }else{
    if(typeof popUp != 'undefined'){
      popUp.classList.remove('show-pop-up');
    }
  }
}

const windowOnClick = (event) => {
  if (typeof popUp != 'undefined') {
    if(event.target === popUp){
      togglePop();
    }
  }
}
const navigateUsers = () => {
  let position = window.location.hash;
  if(position != '' && position.length >= 3){
    let check = position.replace('#','');
    if(document.getElementById(check)){
      goTo(position);
    }
  }
}
if(typeof cls !='undefined'){cls.addEventListener("click", togglePop);}
window.addEventListener("click", windowOnClick);
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.head-contacts').addClass('scrolled');
    $('#ttp').removeClass('top-hd');
  } else {
    $('.head-contacts').removeClass('scrolled');
    $('#ttp').addClass('top-hd');
  }
});
window.addEventListener('load',navigateUsers);