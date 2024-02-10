import axios from "axios";


export function getLocation(search) {
    
    const options = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: {
        // minPopulation: '1000',
        namePrefix: search
      },
      headers: {
        'X-RapidAPI-Key': '84a5f79517msha963dad4924083fp1e2236jsna9e916a9e0e8',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    
    try {
        return axios.request(options)
        .then((response)=>{
            const results = response.data.data.map((city) => {
                return {
                    value: {
                        lat: city.latitude,
                        lon: city.longitude
                    },
                    label: `${city.name}, ${city.region}, ${city.countryCode}` 
                }
            })
            return results
        })
    } catch (error) {
        console.error(error);
    }
}

// getLocation('Phagwara')