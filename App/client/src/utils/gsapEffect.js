import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function gsapEffect() {
    // ScrollTrigger 플러그인을 등록하고 함수 정의
    gsap.registerPlugin(ScrollTrigger);

    // 여러개 이질감 표현하기
    gsap.utils.toArray(".text__gif").forEach(item => {
        gsap.to(item, {
            yPercent: -50,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: "bottom center",
                end: "bottom top",
                scrub: 0.5,
            }
        })
    });

    // 모든 텍스트 분리하기
    document.querySelectorAll(".split").forEach(text => {
        let splitWrap = text.innerText.split("").join("</span><span aria-hidden='true'>");
        text.innerHTML = "<span aria-hidden='true'>" + splitWrap + "</span>";
        text.setAttribute("aria-label", text.innerText);
        text.style.opacity = "1";
    })

    gsap.fromTo('.split span', {
        x: 50,
        y: 50,
        opacity: 0,
    },
        {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
            ease: 'power1.out',
            stagger: {
                from: 'random',
                amount: 1,
            },
        })

    const ani1 = gsap.timeline();
    ani1.set("#opening .text__gif.g1", { xPercent: 20, opacity: 0 }) // 초기값 설정
        .set("#opening .text__gif.g2", { xPercent: -20, opacity: 0 })
        .set("#opening .text__gif.g3", { yPercent: 20, opacity: 0 })
        .set("#opening .t__etc", { xPercent: 20, opacity: 0 })
        .to("#opening .text__gif.g1", { xPercent: 0, opacity: 1, duration: 0.5, delay: 2 }) // 목표값 설정
        .to("#opening .text__gif.g2", { xPercent: 0, opacity: 1, duration: 0.5 })
        .to("#opening .text__gif.g3", { yPercent: 0, opacity: 1, duration: 0.5 })
        .to("#opening .t__etc", { xPercent: 0, opacity: 1, duration: 0.5 });
}




