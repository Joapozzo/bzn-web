import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function animateCtaSection() {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const target = document.querySelector("[data-gsap]");
    if (!target) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: "top 80%",
        },
    });

    tl.from("[data-gsap] > *", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
    });

    const btn = target.querySelector("button");
    if (btn) {
        tl.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out",
            yoyo: true,
            repeat: 1,
        }, "-=0.4");
    }
}
