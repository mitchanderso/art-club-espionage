import Head from 'next/head'
import React, { useState, useRef }from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [eyeStyle, setEyeStyle] = useState({
     color: 'red'
  })

  const eye = useRef(null);
  const myBox = useRef(null);

  function handleMouseMove(ev) { 
    var x = eye.current.offsetLeft + (eye.current.offsetWidth / 2);
    var y = eye.current.offsetTop + (eye.current.offsetHeight / 2);
    var rad = Math.atan2(ev.pageX - x, ev.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;

    setEyeStyle({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    })
  }

  return (
    <div className={styles.container} onMouseMove={(ev)=> handleMouseMove(ev)}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p> LOOK WITH YOUR SPECIAL EYES TO FIND THE TRUE SOURCE </p>
        <p className={styles.secret}>Go to /espionage</p>
        <div className={styles.myContainer}>
          <div ref={eye} className={styles.eye} style={eyeStyle}></div>
          <div ref={eye} className={styles.eye} style={eyeStyle}></div>
        </div>
        
      </main>


    </div>
  )
}
