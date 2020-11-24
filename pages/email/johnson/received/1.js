import Head from 'next/head'
import emailStyles from '../../../../styles/email.module.css'

export default function Home() {

 
  return (
    <div className={emailStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={emailStyles.main}>
        <p> FROM: smith@<span className={emailStyles.redacted}>mail.com</span> </p>
        <p> SUBJECT : EYES AND EARS</p>
        <p> DATE : 01/03/1997</p>
        <p> 
          WE HAVE BEEN WATCHING YOU CLOSELY, AND HAVE IDENTIFIED YOU AS A PERSON OF POTENTIAL, 
          I AM CURRENTLY WORKING ON THE <span className={emailStyles.redacted}>OMEGA</span> PROJECT AND
          REQUIRE CERTAIN INFORMATION TO BE FOUND FOR ME. I SPECIFICALLY REQUIRE DATA SURROUNDING 
          THE <span className={emailStyles.redacted}>PREVIOUS TRIAL SUBJECTS</span> WHO WERE 
          <span className={emailStyles.redacted}>UNSUCCESSFUL</span> IN PASSING TRIALS <span className={emailStyles.redacted}>HNAP</span>-<span className={emailStyles.redacted}>3078</span> 
           IN PROJECT <span className={emailStyles.redacted}>DELTA</span>. I TRUST THAT I CAN LEAVE YOU WITH THIS SIMPLE TASK.
          <p>
            I EXPECT YOUR RESPONSE TO BE SENT EXACTLY ON THE 7TH OF THIS MONTH. DONT LET ME DOWN 
          </p>
          <p>
            <span className={emailStyles.redacted}>SMITH</span>
          </p>
        
        </p>
        
      </main>


    </div>
  )
}
