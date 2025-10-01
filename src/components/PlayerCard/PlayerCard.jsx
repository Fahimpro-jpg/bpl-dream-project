import React, { useState } from 'react';
import userImg from "../../assets/Group.png"
import flagImg from "../../assets/flag.png"
import { toast } from 'react-toastify';
const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {
   
    const handleSelected = (playerData)=>{
         const playerPrice = parseInt(playerData.price.split(",").join(""))
         if(availableBalance<playerPrice){
            toast ("Not enough coins!!")
            return
         }
         if(purchasedPlayers.length===6){
            toast("6 players already selected")
            return
         }
        setIsSelected(true),
        setAvailableBalance(availableBalance-playerPrice)
        setPurchasedPlayers([...purchasedPlayers,playerData])
    }
    const [isSelected,setIsSelected]=useState(false);
    return (
        <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img className='w-[360px] h-[240px]'
      src={player.player_image}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img src={userImg} alt="" />
    <h2 className="card-title ml-2">{player.player_name}</h2>
    </div>
    
    <div className='flex justify-between border-b-1 border-gray-400 pb-2'>
        <div className='flex mt-3 items-center'>
            <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
            <p className='ml-2'>{player.player_country}</p>
        </div>
        <button className='btn'>{player.player_role}</button>
    </div>

        <div>
           <div className='flex justify-between font-bold'>
             <span>Rating</span>
             <span>{player.rating}</span>
           </div>

            <div className='flex justify-between mt-2'>
            <p>{player.batting_style}</p>
            <p>{player.bowling_style}</p>
            </div>
        </div>

        <div className='flex justify-between mt-2'>
            <p>price: ${player.price}</p>
            <button disabled={isSelected} onClick={()=>{ handleSelected(player)}}
             className='btn'>{isSelected===true?"Selected":"Choose Player"}</button>
        </div>

   
       </div>
    </div>
    );
};

export default PlayerCard;