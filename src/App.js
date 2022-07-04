
import "./App.css";
import Comp1 from "./Component";
import Comp2 from "./Component2";
import { useState } from "react";

function App() {

    const [temp, setTemp] = useState(true);
    const selectTemp=()=>{setTemp(!temp)};

   

    

return (

 <div className="App">
     <div   className="coco2">
   

    {temp? <Comp1/>:<Comp2/>}
          <button onClick={selectTemp} className="button"><b>Degree °C/°F</b></button> 
    
   </div>
</div>
)

 }

 export default App;