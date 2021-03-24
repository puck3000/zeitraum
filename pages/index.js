import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'

export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <Div100vh className='relative'>
      <div id='wrapper' className='flex flex-col min-h-full lg:min-h-0 w-full'>
        <Head>
          <title>Zeitraum - Reine Kopfsache</title>
          <link rel='icon' href='/favicon.ico' />
          {/* Twitter */}
          <meta
            name='twitter:card'
            content='Dein Kopf ist unsere Hauptsache.'
            key='twcard'
          />

          {/* Open Graph */}
          <meta property='og:url' content='https://zeitraum.ch' key='ogurl' />
          <meta
            property='og:image'
            content='/assets/ZEITRAUM_Quer_02_WEB.jpg'
            key='ogimage'
          />
          <meta
            property='og:site_name'
            content='Zeitraum - Reine Kopfsache'
            key='ogsitename'
          />
          <meta
            property='og:title'
            content='Zeitraum - Reine Kopfsache'
            key='ogtitle'
          />
          <meta
            property='og:description'
            content='Dein Kopf ist unsere Hauptsache.'
            key='ogdesc'
          />
        </Head>
        <header>
          <h1 className='m-auto w-1/2 mt-12 mb-6 md:w-48'>
            <Image
              src='/assets/ZEITRAUM_Claim_Basic.svg'
              alt='Zeitraum - Reine Kopfsache | Logo'
              width={966}
              height={301}
              quality='100'
            />
          </h1>
        </header>
        <main className='flex-1 lg:relative lg:w-1/2 lg:m-auto'>
          <Image
            src='/assets/ZEITRAUM_Quer_02_WEB.jpg'
            alt='Zeitraum Team Portrait'
            width={1600}
            height={1090}
            id='mainPortrait'
            className={`lg:absolute lg:inset-0 transition-opacity duration-200 ${
              toggle ? 'lg:opacity-0' : 'lg:opacity-100'
            }`}
          />
          <article
            className={`mx-2 pt-6 lg:absolute lg:inset-0 lg:cursor-pointer transition-opacity duration-200 ${
              toggle ? 'lg:opacity-100' : 'lg:opacity-0'
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <p className='font-normal md:w-2/3 mx-auto mb-2 xl:text-2xl '>
              In unserem Raum geniesst du deine Zeit, in besten Händen, an
              bester Lage und mit viel Wohlbefinden.
            </p>
            <p className='font-normal md:w-2/3 mx-auto mb-2 xl:text-2xl '>
              Raum und Zeit sind relativ, im Grunde also reine Kopfsache.
            </p>
            <p className='font-normal md:w-2/3 mx-auto mb-8 xl:text-2xl '>
              Deinen Kopf machen wir zur Hauptsache.
            </p>
            <a
              href='/assets/ZEITRAUM_Angebot_0–99.pdf'
              target='_blank'
              rel='noopener'
              className={`tracking-widest text-lg bg-white px-6 py-1 xl:text-2xl ${
                toggle ? '' : 'lg:hidden'
              }`}
            >
              Angebot
            </a>
          </article>
        </main>
        <footer className='mb-12 mt-6 xl:text-2xl '>
          <a
            href='https://goo.gl/maps/Gt8LNHDwnG8Vts2EA'
            target='_blank'
            rel='noopener'
          >
            MOSERSTRASSE 18, 3014 BERN
          </a>
          <br />
          <a href='tel:0041315353535'>031 535 35 35</a>
        </footer>
        <style jsx global>
          {`
            body {
              background-color: #fff0f0;
              margin: auto 0.2rem;
              text-align: center;
              text-transform: uppercase;
            }
            @font-face {
              font-family: 'Oswald';
              src: url('/fonts/Oswald-VariableFont_wght.ttf');
              font-weight: 900;
              font-style: normal;
            }

            html {
              font-family: 'Oswald', sans;
              font-variation-settings: 'wght' 350;
            }
            p {
              line-height: 1.4rem;
            }

            @media screen and (min-width: 768px) {
              body {
                margin: auto 2rem;
              }
            }
            @media screen and (min-width: 1024px) {
              #wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          `}
        </style>
      </div>
    </Div100vh>
  )
}
