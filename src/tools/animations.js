import anime from 'animejs';
import dynamic from 'next/dynamic';

export const Revealer = dynamic(() => import('./Reveal'), {
    ssr: false,
})

export const writingAnimation = (ref, mainClass, delay) => {
    ref.innerHTML = ref.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='sentence'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: `.${mainClass} .line`,
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 100
        })
        .add({
            targets: `.${mainClass} .line`,
            translateX: [0, ref.getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 100,
            delay: 100
        })
        .add({
            targets: `.${mainClass} .sentence`,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => delay + 34 * (i + 1)
        })
        .add({
            targets: `.${mainClass}`,
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}