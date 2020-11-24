import Head from 'next/head'
import React, { useState, useEffect, useCallback }from 'react';
import styles from '../styles/espionage.module.css'
import Link from 'next/link'

export default function Espionage() {

    const [bombPercentInt, setBombPercentInt] = useState(0)
    const [defused, setDefused] = useState(false)
    const [bombPercent, setBombPercent] = useState({
        transform: 'translate(0px, '+ bombPercentInt +'px)'
    })

    const defuseMe = useCallback(() => {
        setDefused(true)
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setBombPercentInt(bombPercentInt < 45 ? bombPercentInt + 5 : 45);
            setBombPercent({transform: 'translate(0px, '+ bombPercentInt +'px)'})
            console.log('new pc ' + bombPercentInt)
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [bombPercentInt]);


    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            {bombPercentInt !== 45 && !defused ? 
               
            <div className={styles.main}>
                <p> YOU MADE IT </p>
                <div className={styles.bombArea}>
                    <div className={styles.fuse} style={bombPercent} onClick={defuseMe}></div>
                    <div className={styles.bomb}></div> 
                </div>
                
            </div> : '' }
            {!defused && bombPercentInt === 45 ? <p> BAD </p> : ''}
            {defused ? 
                <div> 
                    <p> GOOD - BUT CAN YOU DO <Link href="/email/johnson/received/1"><a>BETTER?</a></Link></p> 
                </div>
                
                : ''
            }
        
            
        </main>


        </div>
    )
}
