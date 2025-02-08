import { Day } from "./Day";

export function WeatherPanel({ displayLocation, weather }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: code,
  } = weather;

  return (
    <>
      <h2>{displayLocation}</h2>
      <div className="weather">
        {dates?.map((date, index) => (
          <Day
            max={max.at(index)}
            min={min.at(index)}
            day={dates.at(index)}
            code={code.at(0)}
            key={dates.at(index)}
            isToday={index === 0}
          />
        ))}
      </div>
    </>
  );
}
