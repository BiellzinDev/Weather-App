import DailyForecast from "./DailyForecast";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import WeatherDetails from "./WeatherDetails";


function Layout(){
    return(
        <>
            <Header/>
            <main className="flex flex-col bg-(--Neutral-900) ">
                <Search/>
                <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-center">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:w-[97%] xl:justify-center">
                        <div className="flex flex-col items-center">
                            <WeatherCard/>
                            <WeatherDetails/>
                            <DailyForecast/>
                        </div>
                        <aside className="flex w-full xl:basis-[21rem]">
                            <HourlyForecast/>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Layout