/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
// import { useState,useEffect , useRef} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  // const [register, setRegister] = useState('');
  // const [participants, setParticipants] = useState('');
  // const [institue, setInstitue] = useState('');
  // const [project, setProject] = useState('');
  // const reg = useRef();
  // const part = useRef();
  // const inst = useRef();
  // const proj = useRef();

  // useEffect(() => {

  // },[])
  return (
    <div className="">
      <Head>
        <title>About | Hack The Winter 2023</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full flex flex-col gap-20">
        <div className="w-full h-full flex flex-col gap-20 sm:px-10 xs:px-5">

          <div className='absolute right-0 top-0 hidden md:block w-[50%] h-full overflow-hidden '>
            <img src="./assets/homepage-bg/Winter-Pines.png" alt="homepage" />
          </div>
          <div className="md:w-3/6 sm:w-full">
            <h1 className="text-6xl md:text-7xl lg:text-8xl  pt-14 text-[#183E43]">
              Hack The<br /><span className="text-[#3EB0AC]">Winter</span>
            </h1>
            <div className="text-xl  py-10  tracking-wide md:pr-5">
              <p>
                A Community-organized saga of 30-days of open source events focused around
                multiple hot text stacks in where attendees get hands-on coding experience by
                building real world projects under the guidance of mentors.
                Join this venture with your very own technical leads from the corporate world
                guiding you throughout your journey.
              </p>
              <p>
                So buckle up to start your journey on Hacking the Winter at Hack The Winter!
              </p>
            </div>
            <div className="flex xs:flex-col md:flex-row pt-10 justify-start items-center gap-5">
              <div className="xs:w-full  lg:w-[50%] md:w-full xl:text-2xl text-center text-white rounded-full border-2 border-[#183E43] bg-[#183E43] py-4 px-12 cursor-pointer hover:bg-transparent hover:text-black ">Register with H2S</div>
              <div className="xs:w-full lg:w-[40%] md:w-full xl:text-2xl py-4 px-12 text-center rounded-full border-2 border-[#183E43] cursor-pointer hover:bg-[#183E43]  hover:text-white">Learn More</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-20 bg-[url('/assets/homepage-bg/Group.svg')] bg-fixed bg-center bg-no-repeat">
          <div className='xs:grid flex xs:grid-cols-1 md:grid-cols-2 gap-5 h-full w-full sm:px-10'>
            <div className='flex sm:w-1/2 xs:w-full h-full justify-center px-5 md:px-0 lg:px-5'>
              <img src='./assets/homepage-bg/Frame.svg' alt="frame" className='hidden sm:block md:w-8/12 sm:w-full h-screen' />
            </div>
            <div className='flex flex-col sm:w-1/2 xs:w-full text-center px-3 lg:px-10 text-xl gap-10'>
              <h1 className='text-5xl xs:text-4xl xs:mt-18 lg:mt-40 md:mt-20'>All About Programming Community</h1>
              <p>All About Programming Community aims at providing everything needed to ace your tech career free of cost which includes Free courses, Job/Internship Updates, Hackathons, Expert Sessions, Roadmaps, Coding Contests, Mini projects, Mock Interviews , Free Resume Reviews and much more.
              </p>
              <p>
                We have grown to 4.5k+ in just 10 months and we are growing rapidly throughout the whole country spreading the right resources at the right time.</p>
            </div>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-8 px-10 md:px-32 text-center '>
            <div className='mb-3.5'>
              <h1 className='text-4xl xs:text-3xl'>Members</h1>
              <div className='text-3xl xs:text-2xl pt-2' data-target="500">6000+</div>
            </div>
            <div className='mb-3.5'>
              <h1 className='text-4xl xs:text-3xl'>Registrations</h1>
              <div className='text-3xl xs:text-2xl pt-2' data-target="1500">3000+</div>
            </div>
            <div className='mb-3.5'>
              <h1 className='text-4xl xs:text-3xl'>Projects</h1>
              <div className='text-3xl xs:text-2xl pt-2' data-target="500">100+</div>
            </div>
            <div className='mb-3.5'>
              <h1 className='text-4xl xs:text-3xl'>Institutes</h1>
              <div className='text-3xl xs:text-2xl pt-2' data-target="100">50+</div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center">
            <img alt="Timeline" className="md:w-8/12 xs:full h-auto" src="./assets/homepage-bg/Timeline.svg" />
          </div>
        </div>

        <div className='w-full h-full flex flex-col justify-start items-center gap-8 p-5 bg-[#EDEDED]'>
          <h1 className='text-5xl font-bold'>Our Sponsors</h1>
          <h1 className='text-2xl'>Platform Partner</h1>
          <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center'>
            <img src='https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg' alt="H2S" className='px-10 w-full sm:w-1/4 h-auto' />
          </div>
          <h1 className='text-2xl'>Powered By</h1>
          <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center gap-10 px-10'>
            <img src='./codingMinutes.png' alt="Coding Minutes" className='w-full sm:w-1/4 h-auto' />
            <img src='./codingBlocksLogo.png' alt="Coding Blocks" className='w-full sm:w-1/4 h-auto' />
          </div>
        </div>


        {/* <footer className={styles.footer}>
        <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        >
        Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </div>
  )
}
