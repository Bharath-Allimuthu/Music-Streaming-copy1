import { useState } from "react";
import Toggle from "./components/Toggle";
import Header from "./components/header";
import"./App.css";

const App = () => {
const [isLight, setIsLight] = useState("isLight", true);
  return (    
    <section>
      <div className='theme' data-theme={isLight ? "dark" : "light"}> 
      <Toggle isChecked={isLight} handleChange={() => setIsLight(!isLight)}/>
        <div className="box">
            <h2>Music-Streaming-App</h2>
        </div>
      </div>
      <Header title={"Music Stream"}/>
    </section>
  )
}

export default App