import {useState, useEffect, createContext} from 'react'
import {housesData} from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    })
    // console.log(allCountries);
    const uniqueCountries = ['Location (any', ...new Set(allCountries)];
    // console.log(uniqueCountries);
    setCountries(uniqueCountries);
  },[]);

    useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    })
    // console.log(allProperties);
    const uniqueProperties = ['Property type (any', ...new Set(allProperties)];
    // console.log(uniqueProperties);
    setProperties(uniqueProperties);
  },[])

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
    }}>{children}</HouseContext.Provider>
  )
}

export default HouseContextProvider