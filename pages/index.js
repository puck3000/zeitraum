import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'

export default function Home() {
  return (
    <Div100vh>
      <div id='wrapper' className='flex flex-col min-h-full'>
        <Head>
          <title>Zeitraum</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header>
          <h1 className='m-auto w-1/2 mt-12'>
            <Image
              src='/assets/ZEITRAUM_Claim_Basic.svg'
              alt='Zeitraum - Reine Kopfsache'
              width={1731}
              height={768}
            />
          </h1>
        </header>
        <main className='flex-1'>
          <Image
            src='/assets/ZEITRAUM_Quer_02_WEB.jpg'
            alt='Zeitraum Team Portrait'
            width={1600}
            height={1090}
          />
          <article>
            <h2 className='text-2xl my-6'>Über uns</h2>
            <p className='font-normal'>
              Raum und Zeit sind relativ, im Grunde also Kopfsache. Deinen Kopf
              machen wir zur Hauptsache, soviel steht fest. In unserem Raum
              geniesst du deine Zeit, in besten Händen an bester Lage und mit
              viel Gemütlichkeit. Für ein paar Augenblicke vergisst du den Rest,
              die verlorene Zeit lohnt sich um's Mehrfache.
            </p>
          </article>
        </main>
        <footer className='my-12'>
          <a href='/'>MOSERSTRASSE 18, 3014 BERN</a>
          <br />
          <a href='tel:0041315353535'>031 535 35 35</a>
        </footer>
        <style jsx global>
          {`
            body {
              background-color: #fff0f0;
              margin: auto 0.2rem;
              text-align: center;
            }
            @font-face {
              font-family: 'Oswald';
              src: url('/fonts/Oswald-VariableFont_wght.ttf');
              font-weight: 900;
              font-style: normal;
            }

            html {
              font-family: 'Oswald', sans;
            }
            p {
              font-variation-settings: 'wght' 450;
            }
          `}
        </style>
      </div>
    </Div100vh>
  )
}
