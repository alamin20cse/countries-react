import { useState } from "react";


const Country = ({country,handelCountry,handelFlag}) => {

    // console.log(country);
    const {name,flags,area,population,cca3}=country;
    const [visited,setvisited]=useState(false);

    const handelVisetd=()=>
    {
        setvisited(!visited);

    }

    // console.log(handelCountry);

    

    return (

        <div className={`country ${visited?'visited':'notvisited'}`}>
            <h2>name :{name.common} </h2>
            <img src={flags.png} alt="" />
            <h3>area:  {area}</h3>
            <h2>population: {population} </h2>
            <h2>code:{cca3} </h2>
            <button onClick={handelVisetd}>{visited?'Visited':'Going'}</button>
            {visited==true? 'Visited':'Not visited'}
            <br />
            <button onClick={handelCountry}>Mark Visited</button>
            <br />
            <br /><br />
            <button onClick={handelFlag}>ADD flag</button>
           
           

        </div>
    );
};

export default Country;