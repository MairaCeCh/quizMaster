// "use client";
// import { useEffect, useRef } from "react";

// export default function Background() {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef<any>(null);

//   useEffect(() => {
//     const loadScripts = async () => {
//       await Promise.all([
//         loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"),
//         loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"),
//       ]);

//     //  const waitForThree = setInterval(() => {
//     //     if (window.THREE && window.VANTA?.WAVES && !vantaEffect.current) {
//     //       clearInterval(waitForThree);
//     //       vantaEffect.current = window.VANTA.WAVES({
//     //         el: vantaRef.current,
//     //         THREE: window.THREE,
//     //         mouseControls: true,
//     //         touchControls: true,
//     //         gyroControls: false,
//     //         minHeight: 200.0,
//     //         minWidth: 200.0,
//     //         scale: 1.0,
//     //         scaleMobile: 1.0,
//     //         color: 0xb2ffff, // Color celeste
//     //         shininess: 150.0,
//     //         waveHeight: 40.0,
//     //         waveSpeed: 0.4,
//     //         zoom: 1.75,
//     //       });
//     //     }
//     //   }, 100);
//     // };

//     loadScripts();

//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, []);

//   return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
// }

// function loadScript(src: string): Promise<void> {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = () => resolve();
//     script.onerror = () => reject(new Error(`Error loading script: ${src}`));
//     document.head.appendChild(script);
//   });
// }
    "use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const loadScripts = async () => {
      await Promise.all([
        // Mantienes el script de three.js
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"),
        // ¡Cambiamos a la URL del script de FOG!
        loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"),
      ]);

      const waitForVanta = setInterval(() => {
        if (window.THREE && window.VANTA?.FOG && !vantaEffect.current) {
          clearInterval(waitForVanta);
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xc200fa,
            midtoneColor: 0x33cf5b,
            lowlightColor: 0x1f28f0,
            baseColor: 0xf7f7f7,
            blurFactor: 0.55,
            speed: 1.30,
            zoom: 0.20
          });
        }
      }, 100);
    };

    loadScripts();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Error loading script: ${src}`));
    document.head.appendChild(script);
  });
}