import dynamic from 'next/dynamic';

export const Revealer = dynamic(() => import('./Reveal'), {
    ssr: false,
})