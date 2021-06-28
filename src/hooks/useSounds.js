import {useEffect, useRef} from 'react';
import * as Tone from 'tone';
//useEffect permettra de jouer une fois le hooks useSounds
//useRef => sampler on peut pas yaccéder car dans le useEffect => créer un useRef(référence extérieur)

export default function useSounds(){
    const mySampler = useRef(null);
    useEffect(() => {
        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
        // méthode quand tout est chargé
        Tone.loaded().then(() => {
        mySampler.current = sampler;
        })
    }, []);
    const buttonList = [
        {soundPlay: () =>mySampler.current.triggerAttackRelease(["C4"], 4)},
        {soundPlay: () =>mySampler.current.triggerAttackRelease(["D#4"], 4)},
        {soundPlay: () =>mySampler.current.triggerAttackRelease(["F#4"], 4)},
        {soundPlay: () =>mySampler.current.triggerAttackRelease(["A4"], 4)},
    ];

   
    return { buttonList };
}