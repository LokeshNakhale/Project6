
// loco motive cdn codepen
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotive()




var crs =document.querySelector("#circle")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function (dets) {
  gsap.to(crs, {
    x:15+dets.x,
    y: dets.y,
    duration:0.5,
  })
})




function frontPageAnimation(){


var tl =gsap.timeline()

tl.from("#nav",{
  y:-100,
  duration:1,
  // stagger:0.5
})
tl.from("#heading h1",{
  y:80,
  duration:1,
  opacity:1,
})
tl.from("#heading h4,#miniheading h5",{
  y:-80,
  duration:1,
opacity:0,
},"-=0.8")
tl.from("#herofooter",{
  y:80,
  opacity:0,
},"-=2")

}
frontPageAnimation()

 var boxes=document.querySelectorAll(".box")
 boxes.forEach(function(elem){
 
  elem.addEventListener("mouseenter",function(){
    elem.style.backgroundColor="red"
    var att = elem.getAttribute("data-image")
    crs.style.width="300px"
   crs.style.height="250px"
   crs.style.borderRadius="20px"
    // ise vo att me jo iamge hai vo cursore me add ho jai gi
   crs.style.backgroundImage = `url(${att})`
    
  })

  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor="transparent"
    crs.style.width="10px"
   crs.style.height="10px"

  })
 })