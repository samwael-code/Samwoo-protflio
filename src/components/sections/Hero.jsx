import { useState } from 'react';
import { ChevronDown, Star  } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants'; 
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../animations/backgrounds/RadialGradienBackground';


const Hero = () => {
  return (
   <section className='relative min-h-screen flex items-center overflow-hidden'>
   {/* <RadialGradientBackground varint='hero'/>*/} 
    {/* Hero Content */}

    <div className='relative z-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* left column - content*/} 
        <div className='text-left'>
          <fadeIn delay={0}>
            <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 to-primary/20 border border-primary/20 rounded-full'>
               <Star className='w-4 text-white fill-white' />
               <span className='text-xm md:text-sm text-white traking-[1.2px]'>
                {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}

               </span>
            </div>
          </fadeIn>
          <fadeIn delay={100}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white'>
             {PERSONAL_INFO.name}
            </h1>
            
          </fadeIn>
          <fadeIn delay={200}>
            <p className='text-lg text-white/70 max-w-[550px] mb-8'>
              {PERSONAL_INFO.tagline}
            </p>
          </fadeIn>
          <fadeIn delay={300}>
            <button 
              onClick={() => scrollToSection('contact')}
              className='inline-flex items-center gap=0 mb-12 group'
            >
              <div className='relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-based font-medium border boeder-white '
              >
                Cet in Touch
              </div>

            </button>
          </fadeIn>
          <fadeIn delay={400}>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full'> 
              {STATS.map((stat, index) => (
                <div key={index} className='text-left border-r border-wwhite/50 pr-10 last:border-r-0'>
                 <div className='text-2xl font-normal text-primary mb-[8px] font-mono'>
                  {stat.value}
                  </div>
                  <p className=' text-sm text-white leading-snug '>
                    {stat.label}
                  </p>
                </div>
              ))}
              </div>
          </fadeIn>

          </div>
        {/* right column - image and tech stack */}
        <fadeIn delay={200}>
          <div className='relative '>
            <div className='relative overflow-hidden rounded-2xl aspect-4/5 max-w[500px] ml-auto group'>
              <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                <div className='absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl'>

                </div>
                {/**Image container */}
                <div className=''>
                  <img 
                  src='/developer-portrait.jpeg'
                  alt='Developer at work'
                  className=''
                   />
                </div>
                {/**Technoloy logos */}
                <div className='relative rounded-2xl '>
                  <fadeIn delay={500}>
                    <div className=''>
                      <div className=''>
                        <SiReact className='text-4xl text-white'/>
                      </div>
                      <div className=''>
                        <SiNextdotjs className='text-4xl text-white'/>
                      </div>
                      <div className=''>
                        <SiNodedotjs className='text-4xl text-white'/>
                      </div>
                      <div className=''>
                        <SiTailwindcss className='text-4xl text-white'/>
                      </div>
                      <div className=''>
                        <SiMongodb className='text-4xl text-white'/>
                      </div>
                    </div>
                  </fadeIn>

                </div>
              </div>
            </div>
          </div>

        </fadeIn>
      </div>
    </div>

   </section>
  );
}

export default Hero