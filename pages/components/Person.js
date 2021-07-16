import Image from 'next/image'

export default function Person({ person }) {
  return (
    <figure className='mx-auto mb-8 sm:max-w-xs'>
      <Image
        src={person?.img}
        width='853'
        height='1280'
        alt={`Portrait of ${person?.name}`}
      />
      <figcaption className=''>
        <span className='block text-xl'>{person?.name}</span>
        {person?.bio}
      </figcaption>
    </figure>
  )
}
