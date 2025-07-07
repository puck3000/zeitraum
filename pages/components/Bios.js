import Person from './Person'

export default function Bios() {
  const persons = [
    {
      name: 'Sophie',
      img: '/assets/SOPHIE.jpg',
      bio: 'kreativ vielfältig sorgfältig direkt spontan locker herzlich zielstrebig',
    },
    {
      name: 'Daniela',
      img: '/assets/DANI.jpg',
      bio: 'fröhlich harmonisch präzise feinfühlig talentiert leidenschaftlich',
    },
    {
      name: 'Katja',
      img: '/assets/KATJA.jpg',
      bio: 'offen feinfühlig leidenschaftlich neugierig sattelfest experimentierfreudig',
    },
  ]
  return (
    <section className='pt-12'>
      <h2 className='inline px-6 py-1 text-lg xl:text-2xl'>Team</h2>
      <article className='grid-cols-3 mt-4 md:gap-4 md:grid'>
        {persons.map((person) => {
          return <Person key={person.name} person={person} />
        })}
      </article>
    </section>
  )
}
