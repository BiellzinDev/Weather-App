import { useState } from 'react'
import engineImg from './assets/icon-units.svg'
import dropDownImg from './assets/icon-dropdown.svg'
import logoImg from './assets/logo.svg'
import './Header.css'

function Header() {
  return (
    <div className='header w-full bg-(--Neutral-900) flex justify-center flex-row items-center h-20'>
      <div className='w-[92%] items-center flex justify-end relative'>
        <div className='w-full h-fit flex justify-between  items-center'>
          <h1><img src={logoImg} className='w-32' alt="" /></h1>
          <div className='flex  w-fit items-center gap-2 bg-(--Neutral-800) h-fit p-2 rounded-lg'>
            <img src={engineImg} className='w-5' alt=""/>
            <p className='text-white'>Units</p>
            <img src={dropDownImg} className='w-3' alt="" />
            </div>
        </div>
        <div className='hidden absolute w-50 top-17 bg-(--Neutral-800) rounded-2xl justify-center items-center py-1 border-(--Neutral-600) border-[1px] shadow-(--shadow)'>
        <div className='flex flex-col items-start justify-between px-2 text-white text-base w-full'>
          <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Switch to imperial</a>
          <div className='flex items-start flex-col w-full gap-1'>
            <p className='text-xs text-(--Neutral-300) pl-1'>Temperature</p>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Celsius (°C) <span></span></a>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Fahrenheit (°F) <span></span></a>
          </div>
          <div className='flex items-start flex-col w-full gap-1'>
            <p className='text-xs text-(--Neutral-300) pl-1'>Wind Speed</p>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Km/h <span></span></a>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>mph <span></span></a>
          </div>
          <div className='flex items-start flex-col w-full gap-1'>
            <p className='text-xs text-(--Neutral-300) pl-1'>Precipitation</p>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Milimeters (mm) <span></span></a>
            <a href="#" className='p-1 w-full text-start hover:bg-(--Neutral-600) rounded-lg'>Inches (in) <span></span></a>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Header
