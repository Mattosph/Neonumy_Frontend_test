import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const App = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'dd36ada27d7947b9efec5b7700050ba1',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default ReactWeather