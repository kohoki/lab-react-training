import React from 'react'

function Greetings({lang, children}) {
  
    if (lang == "de")
    {
        return (
            <div><p>Hallo {children}</p></div>
        )
    }
    else if(lang == "fr")
    {
        return (
            <div><p>Bonjour {children}</p></div>
        )
    }
    else{
        return (
            <div>error</div>
        )
    }
}

export default Greetings