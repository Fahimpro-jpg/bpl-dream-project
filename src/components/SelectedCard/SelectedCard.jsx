import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player)

  const handleRemove =()=>{
    removePlayer(
        player
    )
  }
    return (
     <div className='border-2 border-gray-300 p-3 flex justify-between items-center rounded-xl'>
       <div className='flex gap-3'>
      <img className="w-[50px] h-[50px] rounded-xl" src={player.player_image} alt="" />
         <div>
        <h2>{player.player_name}</h2>
         <p className='text-xs'>{player.player_role}</p>
         </div>
     </div>

      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/jx9WGJ5/Frame.png" alt="" />
       </div>
         </div>
    );
};

export default SelectedCard;