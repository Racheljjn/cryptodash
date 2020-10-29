import React from 'react'
import { AppContext } from '../App/AppProvider';

function WelcomeMessage({firstVisit}){
 return <AppContext.Consumer>
    {
     ({firstVisit})=>
     firstVisit?
     <div>
       Welcome to CryptoDashboard,please select your favorite coin and confirm favorite to get your own dashboard
     </div>:null
    }

   </AppContext.Consumer>
  
  
 
}

export default WelcomeMessage;