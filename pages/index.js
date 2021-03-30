import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'

export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <Div100vh className='relative'>
      <div
        id='wrapper'
        className='relative flex flex-col min-h-full lg:min-h-0 w-full'
      >
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
            content='/assets/ZEITRAUM_SoMe_KeyVisual.jpg'
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
        <header className='relative'>
          <h1 className='m-auto w-1/2 mt-12 mb-6 md:w-48'>
            <Image
              src='/assets/ZEITRAUM_Claim_Basic.svg'
              alt='Zeitraum - Reine Kopfsache | Logo'
              width={966}
              height={301}
              quality='100'
            />
          </h1>
          <a
            href='tel:0041315353535'
            className='absolute top-6 right-6 h-10 w-10 md:hidden  '
          >
            <Image
              src='/assets/icons/Phone-100px.svg'
              alt='Zeitraum - Reine Kopfsache | Phone-Link'
              width={100}
              height={100}
              quality='100'
            />
          </a>
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
          <ul className='w-full flex mt-6 justify-center'>
            {/* <li className='h-9 w-9 mr-4 p-1 hover:bg-white rounded-full '>
              <a href='http://instagram.com' target='_blank'>
                <Image
                  src='/assets/icons/Instagram-100px.svg'
                  alt='Zeitraum - Reine Kopfsache | Instagram-Link'
                  width={100}
                  height={100}
                  quality='100'
                />
              </a>
            </li> */}
            <li className='h-9 w-9 mr-4 p-1 hover:bg-white rounded-full '>
              <a href='https://www.facebook.com/zeitraumbern' target='_blank'>
                <Image
                  src='/assets/icons/Facebook-100px.svg'
                  alt='Zeitraum - Reine Kopfsache | Facebook-Link'
                  width={100}
                  height={100}
                  quality='100'
                />
              </a>
            </li>
            <li className='h-9 w-9 p-1 hover:bg-white rounded-full '>
              <a href='mailto:kontakt@zeitraum-rk.ch'>
                <Image
                  src='/assets/icons/Email-100px.svg'
                  alt='Zeitraum - Reine Kopfsache | Email-Link'
                  width={100}
                  height={100}
                  quality='100'
                />
              </a>
            </li>
          </ul>
        </footer>
        <a
          href='https://hellastudio.ch'
          target='_blank'
          rel='noopener noreferrer'
          className=''
        >
          {/* made with ❤ by */}
          <svg
            className='absolute right-2 bottom-2 lg:right-5  inline w-4 h-4'
            x='0px'
            y='0px'
            viewBox='0 0 150 132'
          >
            <g>
              <path
                d='M147,67.6c-3.3-1.2-6.7-1.7-10.2-1.4c-1.5,0.1-3,0.4-4.5,0.9c-1.4,0.4-2.2,1.9-1.8,3.3c0.4,1.4,1.9,2.2,3.3,1.8
		c0.8-0.2,1.6-0.4,2.5-0.5c-1.6,30.1-28.6,54.1-61.6,54.1c-33,0-60-24-61.6-54.1c0.8,0.1,1.7,0.3,2.5,0.5c1.4,0.4,2.9-0.4,3.3-1.8
		c0.4-1.4-0.4-2.9-1.8-3.3c-1.5-0.4-3-0.7-4.5-0.9c-3.5-0.3-6.9,0.2-10.2,1.4c-1.4,0.5-2.1,2.1-1.5,3.4c0.4,1.1,1.4,1.7,2.5,1.7
		c0.3,0,0.6-0.1,0.9-0.2c1.1-0.4,2.3-0.7,3.4-0.9c1.6,33,31,59.4,66.9,59.4c35.9,0,65.3-26.4,66.9-59.4c1.2,0.2,2.3,0.5,3.4,0.9
		c0.3,0.1,0.6,0.2,0.9,0.2c1.1,0,2.1-0.7,2.5-1.7C149.1,69.7,148.4,68.1,147,67.6z'
              />
              <ellipse cx='49.7' cy='28.4' rx='9.9' ry='27.3' />
              <ellipse cx='99.8' cy='28.4' rx='9.9' ry='27.3' />
            </g>
          </svg>
        </a>
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
