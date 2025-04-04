import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count-up");

    counters.forEach((counter) => {
        const finalValue = parseInt(counter.getAttribute("data-value") || "0");

        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: finalValue,
                        duration: Math.min(3, finalValue / 100), // duración dinámica
                        ease: "power1.out",
                        snap: { innerText: 1 },
                        onUpdate: () => {
                            const current = parseInt((counter as HTMLElement).innerText);
                            (counter as HTMLElement).innerText = current.toLocaleString("es-AR");
                        },
                    }
                );
            },
        });
    });
});
