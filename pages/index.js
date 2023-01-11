import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Div100vh from 'react-div-100vh'
import Bios from './components/Bios'
import { useMediaQuery } from '../lib/useMediaQuery'

export default function Home() {
  const [toggle, setToggle] = useState(false)
  let isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <Div100vh className=''>
      <div id='wrapper' className='relative flex flex-col w-full min-h-full'>
        <Head>
          <title>Raumzeit - Reine Kopfsache</title>
          <link rel='icon' href='/favicon.ico' />
          {/* Twitter */}
          <meta
            name='twitter:card'
            content='Dein Kopf ist unsere Hauptsache.'
            key='twcard'
          />

          {/* Open Graph */}
          <meta
            property='og:url'
            content='https://reinekopfache-bern.ch'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='/assets/ZEITRAUM_SoMe_KeyVisual.jpg'
            key='ogimage'
          />
          <meta
            property='og:site_name'
            content='Raumzeit - Reine Kopfsache'
            key='ogsitename'
          />
          <meta
            property='og:title'
            content='Raumzeit - Reine Kopfsache'
            key='ogtitle'
          />
          <meta
            property='og:description'
            content='Dein Kopf ist unsere Hauptsache.'
            key='ogdesc'
          />
        </Head>
        <header className=''>
          <h1 className='w-1/2 m-auto mt-12 mb-6 md:w-48'>
            <Image
              src='/assets/RAUMZEIT+Claim_Basic.svg'
              alt='Raumzeit - Reine Kopfsache | Logo'
              width={966}
              height={301}
              quality='100'
            />
          </h1>
          <a
            href='tel:0041315353535'
            className='absolute w-10 h-10 top-6 right-6 md:hidden '
          >
            <Image
              src='/assets/icons/Phone-100px.svg'
              alt='Raumzeit - Reine Kopfsache | Phone-Link'
              width={100}
              height={100}
              quality='100'
            />
          </a>
        </header>
        <main className='flex-1 lg:w-1/2 lg:m-auto'>
          {isMobile ? (
            <>
              <Image
                src='/assets/ZEITRAUM_Quer_02_WEB_Klimaneutral_optim.jpg'
                alt='Raumzeit Team Portrait'
                width={1600}
                height={1090}
                id='mainPortrait'
                className={`${isMobile ? '' : 'hidden'}`}
                onClick={() => setToggle(!toggle)}
              />
              <article
                className={`pt-6 lg:cursor-pointer transition-opacity duration-200`}
                onClick={() => setToggle(!toggle)}
              >
                <p className='mx-auto mb-2 font-normal md:w-2/3 xl:text-2xl '>
                  In unserem Raum geniesst du deine Zeit, in besten Händen, an
                  bester Lage und mit viel Wohlbefinden.
                </p>
                <p className='mx-auto mb-2 font-normal md:w-2/3 xl:text-2xl '>
                  Raum und Zeit sind relativ, im Grunde also reine Kopfsache.
                </p>
                <p className='mx-auto mb-8 font-normal md:w-2/3 xl:text-2xl '>
                  Deinen Kopf machen wir zur Hauptsache.
                </p>
                <a
                  href='/assets/RAUMZEIT_ReineKopfsachePreise2023.pdf'
                  target='_blank'
                  rel='noopener'
                  className={`tracking-widest text-lg bg-white px-6 py-1 xl:text-2xl`}
                >
                  Angebot
                </a>
                <Bios />
              </article>
            </>
          ) : toggle ? (
            <article
              className={`mx-2 pt-6 lg:cursor-pointer`}
              onClick={() => setToggle(!toggle)}
            >
              <p className='mx-auto mb-2 font-normal md:w-2/3 xl:text-2xl '>
                In unserem Raum geniesst du deine Zeit, in besten Händen, an
                bester Lage und mit viel Wohlbefinden.
              </p>
              <p className='mx-auto mb-2 font-normal md:w-2/3 xl:text-2xl '>
                Raum und Zeit sind relativ, im Grunde also reine Kopfsache.
              </p>
              <p className='mx-auto mb-8 font-normal md:w-2/3 xl:text-2xl '>
                Deinen Kopf machen wir zur Hauptsache.
              </p>
              <a
                href='/assets/RAUMZEIT_ReineKopfsachePreise2023.pdf'
                target='_blank'
                rel='noopener'
                className={`tracking-widest text-lg bg-white px-6 py-1 xl:text-2xl`}
              >
                Angebot
              </a>
              <Bios />
            </article>
          ) : (
            <Image
              src='/assets/ZEITRAUM_Quer_02_WEB_Klimaneutral_optim.jpg'
              alt='Raumzeit Team Portrait'
              width={1600}
              height={1090}
              id='mainPortrait'
              onClick={() => setToggle(!toggle)}
              className='cursor-pointer'
            />
          )}
        </main>
        <footer className='mt-6 mb-12 xl:text-2xl '>
          <a
            href='https://goo.gl/maps/Gt8LNHDwnG8Vts2EA'
            target='_blank'
            rel='noopener'
          >
            MOSERSTRASSE 18, 3014 BERN
          </a>
          <br />
          <a className='block mb-8' href='tel:0041315353535'>
            031 535 35 35
          </a>
          <ul className='flex flex-wrap md:justify-between w-full lg:w-1/2 lg:m-auto '>
            <li className='w-full md:w-1/2'>
              <ul className='flex justify-center md:justify-start mb-4 md:mb-0'>
                <li className='p-1 mr-4 rounded-full h-9 w-9 hover:bg-white '>
                  <a
                    href='https://www.facebook.com/zeitraumbern'
                    target='_blank'
                  >
                    <Image
                      src='/assets/icons/Facebook-100px.svg'
                      alt='Raumzeit - Reine Kopfsache | Facebook-Link'
                      width={100}
                      height={100}
                      quality='100'
                    />
                  </a>
                </li>
                <li className='p-1 mr-4 rounded-full h-9 w-9 hover:bg-white '>
                  <a href='mailto:kontakt@reinekopfsache-bern.ch'>
                    <Image
                      src='/assets/icons/Email-100px.svg'
                      alt='Raumzeit - Reine Kopfsache | Email-Link'
                      width={100}
                      height={100}
                      quality='100'
                    />
                  </a>
                </li>
                <li className='p-1 mr-4 rounded-full h-9 w-9 hover:bg-white '>
                  <a
                    href='https://www.instagram.com/raumzeit_rk/'
                    target='_blank'
                  >
                    <Image
                      src='/assets/icons/Instagram-100px.svg'
                      alt='Zeitraum - Reine Kopfsache | Instagram-Link'
                      width={100}
                      height={100}
                      quality='100'
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li className='w-full md:w-1/2'>
              <ul className='flex justify-center md:justify-end'>
                <li className='h-9'>
                  <svg className='h-9 p-1 mr-4' viewBox='0 0 355 75'>
                    <path d='M7.6 3.5h-6v45.1h16.1v-5.2H7.6zM30 3.4l-9.8 45.2H26l1.7-8.8h9l1.7 8.8h6.1L34.7 3.4H30zm-1.4 31.8 3.6-23h.1l2.3 16.4 1.2 6.5h-7.2zM74.8 25.7v-.1c4.8-1.3 5.7-5.6 5.7-10 0-7.6-2.3-12.1-10.4-12.1h-7.5v45.2h7.2c8.3 0 11.4-4 11.4-12.3 0-5.1-1.2-9.1-6.4-10.7zM68.3 8.5h1c4.1-.1 5.3 3.2 5.3 6.8 0 4.8-.8 8.3-6.4 8V8.5zm0 35.1V28.1c5.5-.1 6.5 3 6.5 8s-1.3 7.7-6.5 7.5zM86.8 3.5h6v45.2h-6zM110.5 2.9c-11.6 0-11.7 15-11.7 23.2s.1 23.2 11.7 23.2 11.7-15 11.7-23.2 0-23.2-11.7-23.2zm0 40.7c-4.7 0-5.4-8-5.4-17.6s.7-17.6 5.4-17.6 5.4 8 5.4 17.6-.6 17.6-5.4 17.6zM138.8 24.2l-4.6-5c-1.2-1.6-1.7-2.9-1.7-4.9 0-3.1 2-5.8 5.3-5.8 2 0 3.5.8 5.1 1.9l.1-6.1c-1.9-1.1-4.1-1.5-6.4-1.5-6.8 0-10.1 5.2-10.1 11.6 0 11.9 12.6 13.7 12.6 22.7 0 3.4-1.6 6.3-5.3 6.3-2.3 0-4.1-1-5.9-2.3v6.1c1.9 1.5 4.3 2.2 6.6 2.2 6.6 0 10.6-5.5 10.6-11.8.1-6.3-2.3-9.3-6.3-13.4zM168.3 3.5h-19.9v5.2h7.1v39.9h6V8.7h6.8zM188.8 21.1h-9V3.5h-6v45.1h6V26.3h9v22.3h6V3.5h-6zM202 48.6h16.1v-5.2H208V28.1h9v-5.2h-9V8.7h10.1V3.5H202zM223.2 8.7h7.1v39.9h6V8.7h6.8V3.5h-19.9zM248.6 3.5h6v45.2h-6zM283.9 32.9c.2-2.5.2-4.9.2-6.9 0-8.2-.1-23.2-11.7-23.2s-11.7 15-11.7 23.2c0 2 0 4.4.2 6.9.6 7.7 2.8 16.3 11.6 16.3 2.4 0 4.4-.5 6.1-1.9l3.2 4.7 3.9-2.8-4.1-5.6c1.3-3 2-6.9 2.3-10.7zm-6.8 4.7h-.1l-2.3-3.2-3.7 2.9 3.8 5.5c-.6.7-1.4 1-2.5 1-3.5 0-4.8-4.4-5.2-10.7-.1-2.1-.2-4.5-.2-6.9 0-9.6.7-17.6 5.4-17.6s5.4 8 5.4 17.6c0 2.3-.1 4.6-.3 6.9 0 1.4-.2 3-.3 4.5zM305 37.3c-.1 3.7-.4 6.4-4.6 6.4-2.5 0-4.2-1.2-4.2-7V3.5h-6v31.2c0 8.1.8 14.6 10.4 14.6 10.4 0 10.4-7.8 10.4-13.7V3.5h-6v33.8zM318.1 48.6h16.2v-5.2h-10.2V28.1h9.1v-5.2h-9.1V8.7h10.2V3.5h-16.2zM133.2 56h-2.3v15.8h2v-6.6h1.1c3 0 5.5-1.3 5.5-4.6.1-2.9-1.4-4.6-6.3-4.6zm.3 7.4h-.6v-5.7h.5c2 0 4.3.3 4.3 2.8s-2.2 2.9-4.2 2.9zM144.3 71.8h2.1l1.8-4h7.3l1.8 4h2.1l-7.5-16.5-7.6 16.5zM149 66l2.8-6.4 2.8 6.4H149zM175.6 60.5c0-1.5-.8-3-2.1-3.8-1.3-.7-2.8-.7-4.2-.7H167v15.8h2v-6.7h.8l4.7 6.7h2.4l-5-6.9c2.2-.2 3.7-2.1 3.7-4.4zm-6 3h-.6v-5.7h.5c2 0 4.3.4 4.3 2.8 0 2.5-2.2 2.9-4.2 2.9zM184.6 56h2v15.8h-2zM201 62.5l-1.1-.4c-1-.4-2.2-1-2.2-2.3 0-1.4 1.4-2.2 2.6-2.2 1.2 0 2 .5 2.5 1.5l1.6-.9c-.9-1.5-2.3-2.4-4.1-2.4-2.4 0-4.7 1.5-4.7 4.1 0 2.2 1.6 3.2 3.4 4l1.1.5c1.4.6 2.7 1.3 2.7 3s-1.2 3.1-2.9 3.1-3.1-1.3-3.1-3l-2 .4c.3 2.5 2.3 4.4 4.9 4.4 2.8 0 5.1-2.1 5.1-4.9.2-2.8-1.5-4.1-3.8-4.9zM345.8 3c-4.2 0-7.6 3.4-7.6 7.5 0 4.2 3.4 7.6 7.6 7.6 4.2 0 7.5-3.3 7.5-7.6.1-4.2-3.3-7.5-7.5-7.5zm0 13.8c-3.6 0-6.3-2.7-6.3-6.3 0-3.5 2.8-6.3 6.3-6.3 3.6 0 6.3 2.8 6.3 6.3 0 3.6-2.7 6.3-6.3 6.3z' />
                    <path d='M349.5 8.5c0-.7-.3-1.5-1-1.8-.6-.5-1.3-.5-2-.5h-3.7v8.5h1.2v-3.8h1.6l2.4 3.8h1.4l-2.5-3.8c1.4 0 2.6-.6 2.6-2.4zm-4.1 1.5H344V7.2h2.3c1 0 2 .1 2 1.3 0 1.6-1.7 1.5-2.9 1.5z' />
                  </svg>
                </li>
                <li>
                  <svg className='h-9 p-1' viewBox='0 0 475 70'>
                    <path d='M35 .6c1.4.1 2.7.4 4 .7.5.1.5.3.3.7-.8 1.8-1.6 3.5-2.4 5.3-.6 1.4-.6 1.3-2.1 1.1-2.2-.4-4.5-.4-6.7-.1-4.4.7-8.3 2.4-11.7 5.4-3.7 3.3-6.2 7.3-7.2 12.2-1.5 7.3.3 13.9 5.2 19.5 1.1 1.3 2.4 2.4 3.7 3.3.4.3.4.5.2 1-.9 2-1.7 4-2.6 6-.2.4-.3.7-.8.3-5-3.5-8.9-8-11.4-13.8-1.1-2.6-1.9-5.3-2.1-8.1-.2-.6-.1-1.2-.2-1.7v-3.8c.1-.6.1-1.2.1-1.8 0-2.9.8-5.5 1.9-8.1 1.8-4.4 4.6-8.2 8.2-11.3C15.3 4 19.8 1.7 24.9.6c1-.2 2-.3 3-.2.5 0 1 0 1.6-.1h3.8c.6.2 1.2.1 1.7.3' />
                    <path d='m1.2 27.3.2-.5c.1.6 0 1.3-.2 1.9v-1.4zM1.2 32.4c.2.6.3 1.1.2 1.7l-.2-.4v-1.3zM146.2 35.4V22c0-.4.1-.6.6-.6h6.3c.4 0 .6.1.6.6v2.5l.1.4.3-.2c1.7-1.9 3.9-3 6.3-3.6 2.2-.5 4.3-.4 6.4.4 1.7.7 2.9 2 3.6 3.7l.2.4.3-.2c2-2.6 4.6-4 7.8-4.5 2.5-.3 4.9-.1 7 1.5 1.7 1.3 2.4 3.2 2.7 5.2.1.4.1.9.1 1.4v20c0 .4-.1.6-.6.6h-6.3c-.5 0-.6-.2-.6-.6V35.6c0-1.5 0-3-.1-4.5 0-.8-.3-1.5-.7-2.1-.5-.8-1.3-1.3-2.3-1.4-2.8-.5-5.2 1-6.7 2.9l-.2.5v17.7c0 .6-.1.8-.7.8h-6.2c-.6 0-.7-.2-.7-.7V31.5c0-3.5-2.5-4.6-5.5-4-1.6.4-2.9 1.3-4 2.6-.3.3-.4.7-.4 1.2v17.6c0 .5-.2.6-.6.6h-6.2c-.5 0-.6-.1-.6-.6.1-4.5.1-9 .1-13.5M23.5 69.6h-4.1c-.4 0-.5-.1-.3-.5 2.3-5.2 4.5-10.4 6.8-15.6.5-1.1.5-1.1 1.7-.9 9.7 1.6 19-2.9 23.7-11.6 2.6-4.8 3.3-9.8 2.2-15.1-1.2-5.7-4.3-10.3-9-13.7-.3-.3-.4-.4-.2-.8.9-2.1 1.8-4.2 2.7-6.2.2-.4.4-.4.7-.2 6 3.9 10.3 9.3 12.6 16.2.9 2.7 1.4 5.4 1.4 8.2.2 7.9-2.2 14.8-7.3 20.8-3.8 4.4-8.5 7.5-14.1 9.2-2.5.8-5.1 1.2-7.7 1.3-.5 0-.6.3-.8.6-1.1 2.6-2.3 5.3-3.4 7.9-.1.3-.3.4-.7.4h-4.2M97 10.1c4.6 0 8.7 1.3 12.2 4.4 1.5 1.3 2.8 3 3.8 4.7.2.3.2.5-.2.7-2.1 1-4.2 2-6.3 3.1-.4.2-.5 0-.7-.3-1.5-2.6-3.8-4.4-6.7-4.9-4.5-.8-8.3.5-11.3 4-1.8 2.1-2.7 4.7-2.8 7.5-.2 3.4.6 6.6 2.8 9.3 1.9 2.4 4.5 3.7 7.5 4.1 2.6.3 5-.1 7.2-1.5 1.3-.9 2.5-2 3.2-3.4.3-.5.4-.6 1-.3 2 1 4 1.9 6 2.9.4.2.6.3.3.8-2 3.1-4.4 5.7-7.8 7.3-2.1 1-4.3 1.5-6.6 1.7-3.2.2-6.4-.1-9.4-1.3-6.2-2.3-10.3-6.7-12.1-13.1-.8-3.1-1-6.2-.4-9.3 1.3-7.1 5.3-12 12-14.7 2.8-1.2 5.5-1.6 8.3-1.7' />
                    <path d='M31.4 16.8c7.3 0 13.7 5.7 13.7 13.7 0 7.8-6.3 14-14.3 13.7-7.2-.2-13.2-6.1-13.3-13.7.1-7.5 6.4-13.8 13.9-13.7M392.3 35.4V21.9c0-.5.1-.6.6-.6h6.3c.5 0 .6.1.6.6-.1.8 0 1.5-.1 2.3l.1.4.4-.2c2-2.1 4.5-3.3 7.3-3.7 2.9-.4 5.8-.2 8.3 1.7 1.5 1.1 2.2 2.7 2.6 4.5.2 1.1.3 2.2.3 3.4v18.4c0 .5-.1.7-.6.7h-6.2c-.5 0-.7-.1-.7-.6V32.1c0-.9-.2-1.8-.6-2.6-.9-1.6-2.4-2.1-4.1-2.2-2.5-.1-4.6.9-6.3 2.7-.3.3-.4.7-.4 1.2v17.7c0 .4-.2.6-.6.6h-6.3c-.5 0-.6-.2-.6-.6V35.4M231.2 35.6v-7.2c0-.5-.2-.5-.6-.5h-3.4c-.5 0-.6-.1-.6-.6v-5.2c0-.5.2-.6.6-.6h3.4c.4 0 .6-.1.6-.6v-6.5c0-.5.2-.6.6-.6h6.4c.4 0 .6.1.6.5v6.5c0 .4.1.6.6.6h4.6c.4 0 .6.1.6.6v5.3c0 .5-.1.6-.6.6h-4.6c-.4 0-.5.1-.5.5v12.2c0 .8.2 1.5.7 2.2.9 1.1 2.3 1 3.8.3.5-.2.7-.3.8.3.4 1.5.8 3 1.2 4.4.1.4 0 .7-.3.9-1 .7-2.2 1.1-3.4 1.3-2.2.3-4.4.3-6.5-.6-2.2-1-3.3-2.7-3.7-5-.4-2.5-.1-5.1-.2-7.7-.2-.4-.2-.8-.1-1.1zM373.9 35.6v-7.2c0-.4-.1-.6-.6-.6h-3.5c-.5 0-.6-.1-.6-.6V22c0-.5.1-.7.6-.7h3.4c.5 0 .6-.2.6-.6v-6.5c0-.5.2-.6.6-.5h6.4c.4 0 .6.1.6.6v6.5c0 .4.1.6.6.6h4.6c.5 0 .6.1.6.6v5.3c0 .5-.1.6-.6.6H382c-.4 0-.6.1-.6.6v12.1c0 .5.1 1 .3 1.5.4 1.1 1.5 1.7 2.7 1.5.6-.1 1.2-.2 1.7-.6.3-.2.5-.1.6.2.4 1.5.8 3 1.3 4.5.2.5 0 .8-.4 1-.9.6-1.9 1-3 1.1-2.1.3-4.2.4-6.2-.3-2.4-.8-3.7-2.6-4.2-5-.2-.9-.2-1.8-.2-2.7-.1-2.1-.1-4.1-.1-6.2zM117.5 30.1V11.4c0-.5.2-.6.6-.6h6.1c.6 0 .7.2.7.7v37.3c0 .5-.2.7-.7.7H118c-.5 0-.7-.2-.7-.7.2-6.2.2-12.5.2-18.7M350.4 35.4V21.9c0-.4.1-.5.5-.5h6.5c.4 0 .5.1.5.5v2.6l.1.4.4-.3c1.9-2.1 4.4-3.4 7.2-3.9h.6c.6-.1.7.1.7.7v5.8c0 .6-.1.7-.7.7-2.5-.3-4.8.3-6.8 1.7l-.5.4c-.7.5-1 1.1-.9 2v16.9c0 .5-.2.7-.7.6h-6.2c-.5 0-.7-.1-.6-.6-.1-4.5-.1-9-.1-13.5M457.5 35.4V22c0-.4.1-.5.5-.5h6.3c.4 0 .6.1.6.6 0 .8 0 1.7-.1 2.5l.1.4.4-.3c2-2.2 4.5-3.5 7.5-3.9h.4c.4 0 .5.1.5.5v6.1c0 .5-.3.5-.7.5-1.7-.2-3.4 0-5 .7-1.1.5-2.1 1.1-2.9 1.9-.2.3-.3.5-.3.9v17.3c0 .6-.1.7-.7.7H458c-.4 0-.6-.1-.6-.6.1-4.4.1-8.9.1-13.4zM139.3 35.5v13.3c0 .5-.1.7-.7.7h-6.2c-.5 0-.6-.1-.6-.6V22c0-.4.1-.5.5-.5h6.4c.5 0 .5.2.5.6.1 4.4.1 8.9.1 13.4M131.1 14.1c-.2-2.4 2.1-4.4 4.4-4.4 2.5 0 4.5 1.9 4.5 4.4 0 2.4-2 4.5-4.4 4.4-2.6 0-4.6-2.1-4.5-4.4M299.3 28.3c-2 .1-3.9 0-5.9.1h-3.1c-.5 0-.6-.2-.6-.6v-9.3c0-.4.1-.5.5-.5 3 0 5.9-.1 8.9.1 2.2.1 3.9 1.1 4.7 3.3 1.2 3.3-1 6.7-4.5 6.9m13.1-7.4c-.6-3.5-2.3-6.3-5.4-8.2-2.1-1.3-4.5-1.8-6.9-1.9h-17.9c-.5 0-.7.1-.7.7v37.4c0 .5.1.6.6.6h7.1c.4 0 .6-.1.6-.6V36.3c0-.5.2-.6.7-.6h8.9c1.7 0 3.4-.2 5.1-.7 3.2-1.1 5.6-3.1 7-6.2 1-2.6 1.3-5.2.9-7.9M336 35.5v4.3c0 .4-.1.8-.4 1.1-1.4 1.5-3.1 2.3-5.1 2.6-3.2.4-6.1-1.3-7.2-4.5-1.1-2.8-.9-5.7.6-8.3 1.4-2.5 4.4-3.7 7.2-3.1 1.8.4 3.3 1.1 4.5 2.4.3.3.5.7.5 1.2-.1 1.4-.1 2.8-.1 4.3m7.6 0V22c0-.4-.1-.6-.5-.6h-6.6c-.4 0-.5.1-.5.5v2.4l-.1.4-.3-.2c-2.2-2.6-5-3.8-8.4-3.7-4.7.1-8.3 2.3-10.4 6.5-2.3 4.4-2.3 9.1-1.1 13.9 1.3 4.9 5.1 8.6 10.6 9 3.7.2 6.8-.9 9.2-3.7l.4-.2.1.4c0 .8 0 1.5-.1 2.3 0 .5.2.6.6.6h6.3c.5 0 .6-.1.6-.6.2-4.6.2-9.1.2-13.5M214.5 40.7c-2.4 2.9-7.4 4-10.6 1.1-1.2-1.1-2-2.5-2.3-4.1-.5-2.5-.3-5 1.1-7.2 1.5-2.4 4.4-3.6 7.2-3 1.8.4 3.3 1.2 4.6 2.6.2.3.4.6.4.9v8.8c0 .4-.1.7-.4.9m7.8-5.2V22c0-.4-.1-.5-.5-.5h-6.5c-.5 0-.6.2-.5.6 0 .8 0 1.6.1 2.3l-.1.4-.3-.2c-2.2-2.6-5-3.8-8.4-3.8-4.8 0-9 2.8-10.8 7.3-1.8 4.5-1.9 9-.5 13.6 1 3.2 3 5.8 6.1 7.3 2.6 1.2 5.2 1.5 8 .9 2.2-.5 4.1-1.7 5.6-3.4l.4-.3.1.5V49c0 .4.1.6.6.6h6.3c.4 0 .6-.1.6-.6-.2-4.6-.2-9.1-.2-13.5M268 32.8h-12.5c-.5 0-.7-.2-.5-.7 1-4.2 4.4-6 8.3-5.3 3.4.6 4.9 3.2 5.2 5.4.1.5 0 .6-.5.6m7.4-.6c-.7-3.2-2.1-6.1-4.6-8.3-2.7-2.3-5.9-3.3-9.5-3.2-5.2.2-9.3 2.4-12 6.8-1.8 2.9-2.3 6.2-2 9.5.2 2 .7 3.9 1.7 5.7 2.8 5 7.3 7.1 12.8 7.3 2.2.1 4.4-.2 6.5-.9 1.9-.6 3.7-1.4 5.2-2.7.2-.2.3-.4.1-.7-.9-1.3-1.9-2.7-2.8-4.1-.2-.3-.4-.3-.7-.1-2.4 1.9-5.1 2.7-8.1 2.4-3.6-.3-6-2.3-6.9-5.8-.1-.5 0-.6.5-.6h19.6c.5 0 .6-.2.6-.6 0-1.4 0-3.1-.4-4.7M444.6 32.8H432c-.3 0-.6 0-.5-.4.5-2.2 1.6-4 3.7-5 3.1-1.5 8.2-.8 9.7 3.8.1.3.2.7.3 1.1.1.3-.1.5-.6.5m6.8-2.8c-1.1-3.2-3-5.8-6-7.5-3-1.7-6.3-2.1-9.6-1.5-4.4.7-7.8 3-10 6.9-2.2 3.9-2.5 8.1-1.2 12.4 1.6 5.2 5.3 8.2 10.5 9.4 3.3.8 6.6.5 9.9-.5 1.8-.6 3.5-1.4 5-2.6.3-.2.5-.4.2-.8-.9-1.3-1.8-2.7-2.7-4-.2-.3-.4-.4-.7-.1-2.9 2.2-6.2 3.1-9.8 2.1-2.8-.8-4.5-2.7-5.2-5.5-.1-.4 0-.6.5-.6h19.6c.4 0 .6-.1.6-.5 0-2.4-.2-4.9-1.1-7.2' />
                  </svg>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
        <a
          href='https://hellastudio.ch'
          target='_blank'
          rel='noopener noreferrer'
          className='absolute right-0 bottom-2'
        >
          {/* made with ❤ by */}
          <svg
            className='absolute inline w-4 h-4 right-2 bottom-2 lg:right-5'
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
            // @media screen and (min-width: 1024px) {
            //   #wrapper {
            //     position: absolute;
            //     top: 50%;
            //     left: 50%;
            //     transform: translate(-50%, -50%);
            //   }
            // }
          `}
        </style>
      </div>
    </Div100vh>
  )
}
