document.getElementById('Mobilemenu').addEventListener('click',()=>{
   rightPartMobile.style.right='0';
});
document.getElementById('close').addEventListener('click',()=>{
    rightPartMobile.style.right='-20rem';
 });
window.addEventListener('resize',()=>{
    if(rightPartMobile.style.right == '0px'){
        rightPartMobile.style.right = '-20rem';
    }
});
window.addEventListener('scroll',()=>{
    if(rightPartMobile.style.right == '0px'){
        rightPartMobile.style.right = '-20rem';
    }
});


