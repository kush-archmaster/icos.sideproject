var tl = new TimelineMax({ onUpdate: updatePercentage });
const control = new ScrollMagic.Controller();
var kick = document.querySelector(".sometext");
var scooter = document.querySelector(".scooterimg");
var pop = document.querySelector(".popup");

tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "200px" });
tl.to(scooter, 1.5, { x: -250, opacity: 1 }, "=-1.5");
tl.from(pop, 0.8, { x: -30, opacity: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: "",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".hero")
  .setTween(tl)
  .addTo(control);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
