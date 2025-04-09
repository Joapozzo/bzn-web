// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll(".count-up");

//     counters.forEach((counter) => {
//         const finalValue = parseInt(counter.getAttribute("data-value") || "0");

//         const obj = { val: 0 };

//         ScrollTrigger.create({
//             trigger: counter,
//             start: "top 90%",
//             once: true,
//             onEnter: () => {
//                 gsap.to(obj, {
//                     val: finalValue,
//                     duration: 2,
//                     ease: "power1.out",
//                     onUpdate: () => {
//                         const current = Math.floor(obj.val);
//                         (counter as HTMLElement).textContent = current.toLocaleString("es-AR");
//                     },
//                 });
//             },
//         });
//     });
// });
