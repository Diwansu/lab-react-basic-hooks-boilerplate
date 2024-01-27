import React, { useState,useEffect } from 'react';
import '../App.css';
import UseState from './UseState';



const ToggleTheme = React.createContext();

function CombinedComponent() {
  const [theme, setTheme] = useState(true);
  const [displayContent, setDisplayContent] = useState(0);

  const handleToggle = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const  showContent=()=>{
        alert("Content Button Clicked") 
        setDisplayContent(!displayContent)
    }

     useEffect(()=>{
        return (
            console.log("changed")
        )
 }, [displayContent])

  const paraStyle = {
     display: displayContent ? 'block' : 'none' ,
  }

  const themeStyle = {
    backgroundColor: theme ? 'black' : 'grey',
    color: theme ? 'grey' : 'black',
    padding: '2rem',
    margin: '2rem',
  };

   

  return (
    <div>
      <ToggleTheme.Provider value={theme}>
        <button onClick={handleToggle}>Toggle</button>

        <div style={themeStyle}> <p style={paraStyle}>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Facere laboriosam iure provident dolore error.
         Quae dolor dolorum quisquam eius veritatis ipsam labore temporibus? 
         Dolorum quod fugit dolore. 
        Ab consequatur error sapiente corrupti.</p>
              <button onClick={showContent}>Content</button>
         <UseState/> </div>
      </ToggleTheme.Provider>
       
    
    </div>
  );
}

export default CombinedComponent;
