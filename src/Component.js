/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "./App.css";


const Comp1=()=>{
    

    const [change,setChange]=useState({});

  
    useEffect(()=>{

        function success(pos) {
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=bdf366566b2f29144294acc9b2b08f05`)
            .then(res=>{
              
                setChange(res)});  
        };
          
          function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
          };
          
          navigator.geolocation.getCurrentPosition(success, error);
    },[])
    console.log(change);


return (

     <div className="coco">
     <h1><b>water app</b></h1>
   
     <p>{change.data?.name},{change.data?.sys.country}</p>
     
     <div className="index">
     <div className="cont_im">
    <img className="img" src={`http://openweathermap.org/img/wn/${change.data?.weather[0].icon}@2x.png`}></img>
     <p> <span>{Number((change.data?.main.temp-273.15).toFixed(2))} °C </span></p>
     </div>
     <div className="conte_text"> 
     <p><b>"{change.data?.weather[0].description}" </b></p> 
     <p><i class="fa-solid fa-wind"></i> <b> Wind speed: </b><span> {change.data?.wind.speed} m/s </span></p>
     <p><i class="fa-solid fa-cloud"> </i> <b>clouds:</b><span>{change.data?.clouds.all} % </span> </p>
     <p> <i class="fa-brands fa-cloudsmith"></i> <b>pressure: </b><span> {change.data?.main.pressure} mb </span> </p>
     </div> 
     </div>

     </div>
     
     
   

)


}

export default Comp1;