import React from 'react'

function Greetings(lang) {
    console.log(lang.lang)
  
    if (lang.lang == "de")
    {
        console.log("tada")
        return (
            <div><p>hallo {lang.children}</p></div>
        )
    }
    else{
        return (
            <div>error</div>
        )
    }
  
}

export default Greetings