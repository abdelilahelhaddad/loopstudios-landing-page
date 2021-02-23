const burger = document.querySelector('.burger');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const list = document.querySelector('.list');
const main = document.querySelector('#main');
const headerContent = document.querySelector('.header-content');
const body = document.querySelector('body');

burger.addEventListener('click', ()=>{
  open.classList.toggle('active');
  close.classList.toggle('active');
  if(open.classList.contains('active')){
    list.classList.add('active');
    main.classList.add('active');
    headerContent.classList.add('active');
    body.classList.add('active');
  }else{
    list.classList.remove('active');
    main.classList.remove('active');
    headerContent.classList.remove('active');
    body.classList.remove('active');
  }
});