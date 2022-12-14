// import * as THREE from "three";
// import { useRef, useState, useMemo, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Text, TrackballControls } from "@react-three/drei";
// import randomWord from "random-words";
// import useWords from "./useWords";
//
//
// function Word(p) {
//   const { children, url, ...props } = p;
//   const color = new THREE.Color();
//   const fontProps = {
//     font: "/FZZJ-XWQSXTJW.TTF",
//     fontSize: 2.5,
//     letterSpacing: -0.05,
//     lineHeight: 1,
//     "material-toneMapped": false,
//   };
//   const ref = useRef();
//   const [hovered, setHovered] = useState(false);
//   const over = (e) => (e.stopPropagation(), setHovered(true));
//   const out = () => setHovered(false);
//   // Change the mouse cursor on hover
//   useEffect(() => {
//     if (hovered) document.body.style.cursor = "pointer";
//   }, [hovered]);
//   // Tie component to the render-loop
//   useFrame(({ camera }) => {
//     // Make text face the camera
//     ref.current && ref.current.quaternion.copy(camera.quaternion);
//     // Animate font color
//     ref.current &&
//       ref.current.material.color.lerp(
//         color.set(hovered ? "#fa2720" : "white"),
//         0.1
//       );
//   });
//   return (
//     <Text
//       ref={ref}
//       onPointerOver={over}
//       onPointerOut={out}
//       onClick={() => {
//         window.open(url);
//       }}
//       {...props}
//       {...fontProps}
//       children={children}
//     />
//   );
// }
//
// export default function Cloud({ count = 4, radius = 20 }) {
//   const getwords = useWords();
//
//   // Create a count x count random words with spherical distribution
//   const words = useMemo(() => {
//     const temp = [];
//     const spherical = new THREE.Spherical();
//     const phiSpan = Math.PI / (count + 1);
//     const thetaSpan = (Math.PI * 2) / count;
//     for (let i = 1; i < count + 1; i++)
//       for (let j = 0; j < count; j++) {
//         const nowWord = getwords(count * count);
//         temp.push([
//           new THREE.Vector3().setFromSpherical(
//             spherical.set(radius, phiSpan * i, thetaSpan * j)
//           ),
//           nowWord.name,
//           nowWord.url,
//           nowWord.weight,
//         ]);
//       }
//     return temp;
//   }, [count, radius]);
//   const size = 0.3;
//   return (
//     <>
//       {words.map(([pos, word, url, weight], index) => (
//         <Word
//           key={index}
//           position={pos}
//           children={word}
//           url={url}
//           scale={[
//             (weight) * size,
//             (weight) * size,
//             (weight) * size,
//           ]}
//         />
//       ))}
//     </>
//   );
// }
