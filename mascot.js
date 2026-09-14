const root=document.querySelector('#mascot'), sprite=root.querySelector('.sprite');
let timer;
root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect(),x=(e.clientX-(r.left+r.width/2))/(r.width/2),y=(e.clientY-(r.top+r.height/2))/(r.height/2);const col=x<-.33?0:x>.33?2:1,row=y<-.33?0:y>.33?2:1;sprite.style.backgroundPosition=`${col*50}% ${row*50}%`});
root.addEventListener('pointerleave',()=>sprite.style.backgroundPosition='50% 50%');
root.addEventListener('click',()=>{root.classList.remove('clicked');void root.offsetWidth;root.classList.add('clicked');clearTimeout(timer);timer=setTimeout(()=>root.classList.remove('clicked'),900)});
