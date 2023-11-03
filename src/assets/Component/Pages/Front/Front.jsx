import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import img from '../../../../assets/photo.jpg'
const Front = () => {

       

    return (
        <div>
          <div className='max-h-full bg-zinc-800 flex'>
          <div className='py-52 text-white px-56'>
          <h1 className=' py-5 text-6xl '> I'M MAHADY SUMON! <br /> CREATIVE
          
          <span style={{ color: 'red', fontWeight: 'bold',  }}>
          
          <Typewriter
            words={['Devloper', 'Frontend', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
          
          />
        </span>
          
          </h1>
         
          <p className='text-2xl'>I'm a passionate UI/UX designer with a mission to create delightful and <br /> intuitive digital experiences. With a strong foundation in design principles and <br /> a keen eye for detail, I specialize in translating <br /> complex ideas into user-friendly interfaces that captivate and engage.</p>
          </div>
            <div>
            <img className='py-20 px-20 rounded-full ' src={img} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Front;