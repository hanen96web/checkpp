import React from 'react'
import Image from "./venttt.jpg"
import Carddd from './Carddd'

const Main = ({data}) => {
    return (
        <div className="backkk">
            
            <img className="sizzimg" src={Image} alt='bbhbh'/>
            <h5 className="abbsol">مع مزادي ديما الربح ليك</h5>
            <h1>LES PROCHAINES ENCHERES</h1>
            

            <div className='card_container'>
        {data.map((han)=>(
          <Carddd han={han}/>
        ))}
        </div> 
            
        </div>
    )
}

export default Main
