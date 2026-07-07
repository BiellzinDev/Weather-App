import './Header.css'
import rainIcon from './assets/images/icon-rain.webp'
import drizzleIcon from './assets/images/icon-drizzle.webp'
import sunIcon from './assets/images/icon-sunny.webp'
import partlynIcon from './assets/images/icon-partly-cloudy.webp'
import stormnIcon from './assets/images/icon-storm.webp'
import snowIcon from './assets/images/icon-snow.webp'
import fogIcon from './assets/images/icon-fog.webp'

function DailyForecast() {
    return(
        <div className='flex bg-(--Neutral-900) w-full items-center justify-center pb-8 xl:pb-0'>
            <div className='flex w-[92%] justify-center items-start flex-col gap-6 xl:justify-between '>
            <p className='text-white text-2xl'>Daily forecast</p>
            <div className='flex flex-wrap w-full gap-4 xl:flex-nowrap  '>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2 xl:basis-10 h-44.5 '>
                    <p className='text-2xl'>Tue</p>
                    <img src={rainIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2 xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Wed</p>
                    <img src={drizzleIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2 xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Thu</p>
                    <img src={sunIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div> 
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2 xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Fri</p>
                    <img src={partlynIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2  xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Sat</p>
                    <img src={stormnIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl p-2 xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Sun</p>
                    <img src={snowIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20 bg-(--Neutral-800) border border-(--Neutral-300) items-center justify-between rounded-2xl min-[402px]:h-[178px] p-2 xl:basis-10 xl:h-44.5 '>
                    <p className='text-2xl'>Mon</p>
                    <img src={fogIcon} className='w-20' alt="rain icon" />
                    <div className='flex items-center justify-around w-full xl:gap-2'>
                        <p className='text-xl xl:text-base'>20°</p>
                        <p className='text-xl xl:text-base'>14°</p>
                    </div>
                </div>
                <div className='flex flex-grow flex-col basis-20  items-center justify-between rounded-2xl p-2 md:hidden'>
                </div>
                <div className='flex flex-grow flex-col basis-20  items-center justify-between rounded-2xl p-2 min-[402px]:hidden'>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DailyForecast