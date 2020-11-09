let button= document.querySelector('#xd');
button.addEventListener('click',()=>{
    let body=document.getElementsByTagName('body')[0];

    body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
});