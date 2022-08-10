var move=document.querySelector(".move");
var m1=document.querySelector("#m1");
var m2=document.querySelector("#m2");
var m3=document.querySelector("#m3");
var names=document.querySelector(".names");
var line=document.querySelector(".lines");
m1.addEventListener("click",()=>{
    move.style.transform=`translateY(0%)`;
    names.style.transform=`translateY(0%)`;
    line.style.transform=`translateX(0%)`;
    document.querySelector("#rseat").style.opacity=0;
    document.querySelector("#rsold").style.opacity=0;
    document.querySelector("#rcousin").style.opacity=1;
    document.querySelector("#p1").style.opacity=1;
    document.querySelector("#p2").style.opacity=0;
    document.querySelector("#p3").style.opacity=0;
    
})
m2.addEventListener("click",()=>{
    move.style.transform=`translateY(100%)`;
    names.style.transform=`translateY(-100%)`;
    line.style.transform=`translateX(100%)`;
    document.querySelector("#rsold").style.opacity=0;
    document.querySelector("#rcousin").style.opacity=0;
    document.querySelector("#rseat").style.opacity=1;
    document.querySelector("#p1").style.opacity=0;
    document.querySelector("#p2").style.opacity=1;
    document.querySelector("#p3").style.opacity=0;
    
})
m3.addEventListener("click",()=>{
    move.style.transform=`translateY(210%)`;
    names.style.transform=`translateY(-200%)`;
    line.style.transform=`translateX(200%)`;
    document.querySelector("#rcousin").style.opacity=0;
    document.querySelector("#rseat").style.opacity=0;
    document.querySelector("#rsold").style.opacity=1;
    document.querySelector("#p1").style.opacity=0;
    document.querySelector("#p2").style.opacity=0;
    document.querySelector("#p3").style.opacity=1;
})
gsap.from(".b1",{
    x:-100,
    opacity:0
})
gsap.from(".circ",{
    x:"100%",
    delay:1
    // opacity:0
})
gsap.from(".circ h1",{
    y:"-50%",
    delay:1.3,

    // opacity:0
})
gsap.from(".product",{
    delay:1.5,
    duration:1,
    x:-100,
    opacity:0
})
gsap.to(".product",{
    zIndex:1
})
gsap.from(".nametag",{
    y:-200,
    opacity:0,
    duration:1
})
gsap.from(".price",{
    y:-100,
    opacity:0,
    duration:1
})