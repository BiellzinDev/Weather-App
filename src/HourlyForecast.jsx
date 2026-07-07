import './Header.css'
import rainIcon from './assets/images/icon-rain.webp'
import drizzleIcon from './assets/images/icon-drizzle.webp'
import sunIcon from './assets/images/icon-sunny.webp'
import partlynIcon from './assets/images/icon-partly-cloudy.webp'
import stormnIcon from './assets/images/icon-storm.webp'
import snowIcon from './assets/images/icon-snow.webp'
import fogIcon from './assets/images/icon-fog.webp'
import overCast from './assets/images/icon-overcast.webp'
import dropDownImg from './assets/icon-dropdown.svg'

function HourlyForecast() {
    return(
        <div className='flex items-center justify-center w-full bg-(--Neutral-900) pb-8'>
            <div className='flex w-11/12 bg-(--Neutral-800) rounded-2xl flex-col items-center justify-center gap-4 pb-8 xl:w-full'>
                <div className='flex w-[90%] items-center justify-end py-4 relative'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-white text-xl xl:text-base'>Hourly forecast</p>
                        <div className='flex gap-3 bg-(--Neutral-700) p-2 rounded-lg text-white text-lg xl:text-base'>
                            <span>Monday</span>
                            <button> <img src={dropDownImg} alt="" /></button>
                        </div>
                    </div>
                    <ul className='hidden absolute top-16 w-40 bg-(--Neutral-800) flex-col items-center p-1 border-(--Neutral-600) border-[1px] shadow-(--shadow) rounded-2xl text-white'>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Monday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Tuesday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Wednesday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Thursday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Friday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Saturday</a></li>
                        <li className='flex w-full p-1 text-start hover:bg-(--Neutral-600) rounded-lg'><a href="#">Sunday</a></li>
                    </ul>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) border-(--Neutral-600) border-[1px] rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <img src={overCast} className='w-14' alt="" />
                        <p className='text-white text-xl'>3 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={partlynIcon} className='w-14' alt="" />
                        <p className='text-white text-xl'>4 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={sunIcon} className='w-14' alt="" />
                        <p className='text-white text-xl'>5 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={overCast} className='w-14' alt="" />
                        <p className='text-white text-xl'>6 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={snowIcon} className='w-14' alt="" />
                        <p className='text-white text-xl'>7 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={fogIcon} className='w-14' alt="" />
                        <p className='text-white text-xl'>8 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={snowIcon} className='w-14' alt="" />
                        <p className='text-white text-xl'>9 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
                <div className='flex items-center justify-between w-[90%] bg-(--Neutral-800) rounded-lg border-(--Neutral-600) border-[1px]'>
                    <div className='flex items-center gap-3'>
                        <img src={overCast} className='w-14' alt="" />
                        <p className='text-white text-xl'>10 PM</p>
                    </div>
                    <p className='text-white text-lg pr-3'>20°</p>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast