import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener("DOMContentLoaded", () => {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
  });
});

const counters = document.querySelectorAll(".count-up");
counters.forEach((counter) => {
  const finalValue = +counter.getAttribute("data-value")!;
  ScrollTrigger.create({
    trigger: counter,
    start: "top 90%",
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        innerText: finalValue,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: () => {
          counter.textContent = Math.floor(Number(counter.textContent || "0")).toString();
        },
      });
    },
  });
});
