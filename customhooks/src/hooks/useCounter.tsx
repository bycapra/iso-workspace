
import React, { useState } from 'react'

function useCounter() {
    
    const [counter,setCounter] = useState(0);

    const increase = () => {       
        setCounter(counter+1);
    }

    const decrease = () =>{        
        setCounter(counter-1)
    }

    //Normal component yerine bu şekilde dönünce bunu her yerde kullanabiliriz. Object distruction yaparak.
    return {counter,increase,decrease}

}

export default useCounter