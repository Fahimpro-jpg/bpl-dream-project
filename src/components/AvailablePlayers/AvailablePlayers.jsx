import React, { use } from 'react';
import userImg from "../../assets/Group.png"
import flagImg from "../../assets/flag.png"
const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>


        {
            playerData.map(player=>         <div className="card bg-base-100 shadow-sm p-4">
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
            <p>price: {player.price}</p>
            <button className='btn'>Choose Player</button>
        </div>

   
       </div>
    </div>)
        }

 
</div>
    );
};

export default AvailablePlayers;