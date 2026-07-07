import './Header.css'
import bgHero from './assets/images/bg-today-small.svg'
import bgHeroDesktop from './assets/images/bg-today-large.svg'
import sunIcon from './assets/images/icon-sunny.webp'

function WeatherCard(){
    return(
        <div className='flex w-full items-center justify-center bg-(--Neutral-900) pb-8 '>
            <div className='w-[92%] flex justify-center items-center relative'>
                <div className='w-full h-[320px] bg-no-repeat bg-center bg-cover rounded-3xl xl:hidden ' style={{backgroundImage: `url(${bgHero})`,}}></div>
                <div className='w-full hidden xl:block h-[320px] bg-center bg-no-repeat bg-cover rounded-3xl' style={{backgroundImage: `url(${bgHeroDesktop})`,}}>
                </div>
                <div className='absolute  w-[85%] h-4/6 flex flex-col items-center justify-between md:flex-row xl:w-[95%]'>
                    <div className='w-90 xl:flex xl:flex-col xl:items-start'>
                        <p className='text-3xl text-white xl:text-'>Berlin, Germany</p>
                        <p className='text-base text-white'>Tuesday, Aug 5, 2026</p>
                    </div>
                    <div className='flex items-center justify-around w-full md:justify-end'>
                        <img src={sunIcon} className='w-30 h-fit' alt="icon-sun" />
                        <h3 className='text-8xl font-medium text-white'>20°</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard