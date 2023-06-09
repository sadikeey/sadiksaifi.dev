import SkillButton from '../../components/SkillButton'
import Dash from '../../components/Dash'
import { Link } from 'react-router-dom'
import navigationLinks from '../../data/navigationLinks'

const skillButtonItems = [
  'React',
  'TypeScript',
  'Redux',
  'Tailwind',
  'JavaScript',
  'Node.Js',
  'Express.Js',
  'MongoDB',
  'HTML',
  'CSS',
  'Git',
  'Github',
]

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='md:pt-40 pt-20 md:pb-20 text-foreground flex flex-col items-center w-full'
    >
      <h1 className='text-3xl md:text-4xl font-extrabold mb-5 md:mb-8 uppercase tracking-[0.4rem]'>
        About Me
      </h1>
      <Dash />
      <p className='leading-8 text-sm mt-4 md:mt-6 md:text-xl text-altforeground text-center md:px-[7vw]'>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
      <div
        id='about-info'
        className='flex flex-col md:flex-row mt-8 md:mt-28 md:justify-evenly w-full'
      >
        <article id='about-main' className='md:pr-8 md:w-[50vw] my-8'>
          <h1 className='text-2xl font-extrabold text-foreground mb-2'>
            Get to know me!
          </h1>
          <Dash />
          <p className='leading-8 text-sm mt-6 md:mt-6 md:text-xl text-altforeground flex flex-col gap-4'>
            <span className='block'>
              I'm a <span className='font-bold text-foreground'> Frontend Web Developer</span> ,building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out usefull articles in the <Link className='font-bold text-foreground hover:text-primary' to={navigationLinks[0].path}> Blog</Link> page.</span>
            <span>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to <Link className='text-foreground font-bold hover:text-primary' to={navigationLinks[3].path}> contact me</Link>.</span></p>
        </article>
        <article id='skills' className='md:pr-8 md:w-[50vw] my-8'>
          <h1 className='text-2xl font-extrabold text-foreground mb-2'>
            Tech Stack
          </h1>
          <Dash />
          <div className='flex flex-wrap gap-4 mt-8'>
            {skillButtonItems.map((item) => (
              <SkillButton key={item} name={item} />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
