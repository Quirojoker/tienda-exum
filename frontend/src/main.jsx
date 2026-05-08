import React from 'react'
import ReactDOM from 'react-dom/client'
import Particles from './components/backgrounds/particles/Particles.js'
import Galaxy from './components/backgrounds/galaxy/Galaxy.js'
import FloatingLines from './components/backgrounds/floatinglines/FloatingLines.js'
import Masonry from './components/banner/slide-1/Mansory.js'
import TextType from './components/banner/slide-1/TextType.js'

const elparticles = document.getElementById('mi-componente-react')
if (elparticles) {
  ReactDOM.createRoot(elparticles).render(
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Particles
        particleColors={["#ffffff", "#e0d9e6"]}
        particleCount={500}
        particleSpread={10}
        speed={0.3}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  )
}

const elgalaxy = document.getElementById('galaxy-background')
if (elgalaxy) {
  ReactDOM.createRoot(elgalaxy).render(
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Galaxy 
        mouseRepulsion={false}
        mouseInteraction={false}
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.3}
        speed={0.3}
     />
   </div>
  )
}

const elfloatinglines = document.getElementById('floatinglines-background')
if (elfloatinglines) {
  ReactDOM.createRoot(elfloatinglines).render(
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <FloatingLines 
        enabledWaves={["middle","bottom","top"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={10}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={8}
        bendRadius={3}
        bendStrength={-10}
        interactive={false}
        parallax={true}
        animationSpeed={0.9}
        linesGradient={["#12067b", "#120f50", "#393555"]}
      />
</div> 
  )
}

const elmansory = document.getElementById('mansory-slide-1')
if (elmansory) {
  const {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10} = elmansory.dataset;

  const items = [
    // Accesorios de mascotas //
    {id: "1", img: img1, url: "#", height: 400,},

    // Tecnologia para el hogar //
    {id: "2", img: img2, url: "#", height: 250,},

    // Accesorios de moda //
    {id: "3", img: img3, url: "#", height: 600,},

    // Mascotas //
    {id: "4", img: img4, url: "#", height: 900,},

    // Accesorios de moda //
    {id: "5", img: img5, url: "#", height: 500,},

    // Mascotas //
    {id: "6", img: img6, url: "#", height: 900,},

    // Tecnologia //
    {id: "7", img: img7, url: "#", height: 600,},

    // Dropi //
    {id: "8", img: img8, url: "#", height: 250,},
    
    // Ropa deportiva //
    {id: "9", img: img9, url: "#", height: 600,},

    // Perfumes //
    {id: "10", img: img10, url: "#", height: 450,},
  ]

  ReactDOM.createRoot(elmansory).render(
    <Masonry
      items={items}
      ease="power3.out"
      duration={0.1}
      stagger={0.1}
      animateFrom="random"
      scaleOnHover={true}
      hoverScale={0.95}
      blurToFocus={true}
      colorShiftOnHover={true}
      repeatEntry = {true}
      repeatDelay = {5}
    />
  )
}

const eltexttype = document.getElementById('texttype-slide-1')
if (eltexttype) {
  ReactDOM.createRoot(eltexttype).render(
    <TextType 
      text={["Tienda Exum", "Los mejores productos", "Envíos a todo Colombia"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="_"
      loop={true}
      deletingSpeed={50}
      variableSpeedEnabled={false}
      variableSpeedMin={60}
      variableSpeedMax={120}
      cursorBlinkDuration={0.5}
    />
  )
}