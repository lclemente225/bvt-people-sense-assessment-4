import React , { useEffect, useState } from 'react';


  const url = 'https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '716dae4e1dmsh60dfbd9dee039aep183ffajsn070d31f62f7b',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };

const BballData = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          console.log("fetching data");
          const response = await fetch(url,options)

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("got data", data.response);
          return setData(data.response)
      
          // Now you can use 'data' in your component or perform other actions
        } catch (err) {
          console.log("ran into an error fetching", err);
        }
      };
      
      useEffect(() => {
        fetchData();
        function cleanup() {
          return console.log("cleanup")
        }
        cleanup();
      }, [])


  return (
    <div className='basketball-data'>
      {
        data.map((value) => {
          return (
          <p className='each-team'>
            <img src={`${value.logo}`} alt="basketball team logo" className='basketball-logo' />
            {value.name}
          </p>
          )
        })
      }
    </div>
  )
}

export default BballData
