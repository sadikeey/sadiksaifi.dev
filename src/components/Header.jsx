import { useState } from 'preact/hooks'
import { HiMail } from 'react-icons/hi'
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'


const SocialMediaNavigationLinkItem = ({
  name,
  path,
  socialMediaIcon: SocialMediaIcon,
  className,
}) => {
  return (
    <li className={className}>
      <a href={path} target='_blank'>
        {name}
        <SocialMediaIcon />
      </a>
    </li>
  )
}

const navigationLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/#home',
  },
  {
    id: 2,
    name: 'About',
    path: '/#about',
  },
  {
    id: 3,
    name: 'Blog',
    path: 'https://blog.sadiksaifi.dev',
  },
  {
    id: 4,
    name: 'Contact',
    path: '/#contact',
  },
]

const socialMediaNavigationLinks = [
  {
    id: 1,
    name: 'Github',
    path: 'https://github.com/sadikeey',
    socialMediaIcon: AiFillGithub,
  },
  {
    id: 2,
    name: 'Linkedin',
    path: 'https://linkedin.com/in/sadikeey',
    socialMediaIcon: AiFillLinkedin,
  },
  {
    id: 3,
    name: 'Twitter',
    path: 'https://twitter.com/sadikeey',
    socialMediaIcon: AiFillTwitterCircle,
  },
  {
    id: 4,
    name: 'Email',
    path: 'mailto:sadiksaifi205@gmail.com',
    socialMediaIcon: HiMail,
  },
]

const NavigationLinkItem = ({ name, path, className }) => <li className={className}><a href={path}>{name}</a></li>

export default function Navbar() {

  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <header className='w-full flex justify-center'>
      <nav
        className='overflow-y-hidden fixed flex justify-between items-center bg-background 
        h-[10vh] w-full px-6 xl:px-28 2xl:px-96 z-50  backdrop-filter
        backdrop-blur-lg bg-opacity-50'
      >
        <a href='/#home'>
          <img
            className='w-10 fill-white'
            src='/assets/logo.svg'
            alt='sdk-logo'
          />
        </a>
        <ul className='md:flex justify-between hidden text-sm font-bold text-foreground uppercase'>
          {navigationLinks.map(({ id, name, path }) => {
            return (
              <NavigationLinkItem
                key={id}
                name={name}
                path={path}
                className='border-b-4 border-transparent hover:border-primary px-4 py-2'
              />
            )
          })}
        </ul>
        <button
          className='block md:hidden cursor-pointer text-3xl font-extrabold z-1 text-foreground'
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
      <nav
        className={` fixed flex md:hidden flex-col justify-between bg-background 
        top-[10vh] h-[90vh] p-10 pb-24 pt-20 z-40 w-[75vw] ease-in-out backdrop-filter 
        backdrop-blur-lg bg-opacity-50 duration-500 ${
          isOpen ? 'right-0' : 'right-[-100vw]'
        } `}
        onClick={() => setOpen(!isOpen)}
      >
        <ul className='flex flex-col items-center uppercase text-xl text-foreground '>
          {navigationLinks.map(({ id, name, path }) => {
            return (
              <NavigationLinkItem
                key={id}
                name={name}
                path={path}
                className='hover:text-primary px-20 py-5'
              />
            )
          })}
        </ul>
        <ul className='flex text-3xl justify-around w-full items-center text-foreground'>
          {socialMediaNavigationLinks.map(
            ({ id, path, socialMediaIcon }) => {
              return (
                <SocialMediaNavigationLinkItem
                  key={id}
                  path={path}
                  socialMediaIcon={socialMediaIcon}
                  className='hover:text-primary p-4'
                />
              )
            }
          )}
        </ul>
      </nav>
    </header>
  )
}
