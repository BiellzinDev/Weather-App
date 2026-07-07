import './Header.css'
import searchIcon from './assets/icon-search.svg'


function Search(){
    return(
        <div className='flex w-full bg-(--Neutral-900) flex-col items-center justify-center'>
            <div className='flex flex-col w-[92%] items-center max-w-[51rem] xl:w-3/4'>
                <p className='font-bold text-6xl flex-wrap text-white w-11/12 max-w-[51rem] py-8 xl:text-5xl'>How's the sky looking today?</p>
                <div className='flex justify-center items-center flex-col w-full gap-3 py-8 xl:flex-row  '>
                    <div className='flex w-full bg-(--Neutral-800) rounded-lg max-w-[30rem] items-center gap-3 xl:w-3/5 '>
                        <img src={searchIcon} className='pl-6' alt="" />
                        <input type="text" placeholder='Search for a place...' className='w-full rounded-lg h-[50px] placeholder:text-white placeholder:text-xl' />
                        </div>
                    <button className='w-full bg-(--blue-500) rounded-lg h-[50px] max-w-[30rem] text-white font-medium text-xl xl:basis-30'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search