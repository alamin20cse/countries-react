import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


const Countries = () => {

    const [countries,setcountries]=useState([]);

    const [visitedCountry,setvisitedCountry]=useState([])
    const [visitedflag,setvisitedflag]=useState([]);




    useEffect(()=>
    {

        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[]);
    
    const handelCountry=(country)=>
    {

        // console.log("clicked add countyr");
        // console.log(country);
        const newVisedcountry=[...visitedCountry,country];
        setvisitedCountry(newVisedcountry);
    }


    const handelFlag=(country)=>
    {

        console.log("clicked flag");
        console.log(country);
        const newVisitedflag=[...visitedflag,country];
        setvisitedflag(newVisitedflag);

    }


    return (

       <div>
         <h1>countires len: {countries.length}</h1>
         <div>
         <h2>Visited Country list:</h2>
         <ul>
           {/* for country name add mark visited button */}
           {
            visitedCountry.map(country=><li  key={country.cca3}> {country.name.common}   </li>)
           
           
           }
         </ul>
         </div>
         <div>

            <ul>
               {
                 visitedflag.map(country=><li key={country.common}>  <img src={country.flags.png} alt="" />   </li>)
               }
               
            </ul>
         </div>
        <div className="country-continer ">
            

            {
                countries.map(country=><Country country={country} handelCountry={()=>handelCountry(country)} handelFlag={()=>handelFlag(country)} key={name.common}> </Country>)
            }
        </div>
       </div>
    );
};

export default Countries;