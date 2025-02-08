import { WeatherPanel } from "./WeatherPanel";
import { Input } from "./Input";
import { useFetchWeather } from "./useFetchWeather";
import useLocalStorageState from "./useLocalStorageState";

export default function App() {
  const [location, setLocation] = useLocalStorageState("", "location");
  const { weather, displayLocation, isLoading } = useFetchWeather(location);

  return (
    <div className="app">
      <h2>WEATHER CITY FETCHING APPLICATION</h2>
      <Input location={location} setLocation={setLocation} />
      {isLoading && <p className="loader">The data is being fethed...</p>}
      {weather?.weathercode && !isLoading && (
        <WeatherPanel displayLocation={displayLocation} weather={weather} />
      )}
    </div>
  );
}
