import './Header.css'

function WeatherDetails() {
    return(
        <div className='flex w-full bg-(--Neutral-900) items-center justify-center'>
            <div className='flex items-center w-[92%] flex-wrap gap-3 pb-8'>
                <div className='flex flex-grow flex-col bg-(--Neutral-800) w-full basis-30 rounded-2xl border border-(--Neutral-300) justify-evenly items-start pl-5 h-28'>
                    <p className='text-white text-xl'>Feels Like</p>
                    <p className='text-white text-3xl font-light'>18°</p>
                </div>
                <div className='flex flex-grow flex-col bg-(--Neutral-800) w-full basis-30 rounded-2xl border border-(--Neutral-300) justify-evenly items-start pl-5 h-28'>
                    <p className='text-white text-xl'>Humidity</p>
                    <p className='text-white text-3xl font-light'>46%</p>
                </div>
                <div className='flex flex-grow flex-col bg-(--Neutral-800) w-full basis-30 rounded-2xl border border-(--Neutral-300) justify-evenly items-start pl-5 h-28'>
                    <p className='text-white text-xl'>Wind</p>
                    <p className='text-white text-3xl font-light'>14Km/h</p>
                </div>
                <div className='flex flex-grow flex-col bg-(--Neutral-800) w-full basis-30 rounded-2xl border border-(--Neutral-300) justify-evenly items-start pl-5 h-28'>
                    <p className='text-white text-xl'>Precipitation</p>
                    <p className='text-white text-3xl font-light'>0 mm</p>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherDetails