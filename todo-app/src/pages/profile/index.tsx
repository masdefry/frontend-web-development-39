import { useEffect, useState } from 'react';

export default function Profile() {
  const [quantity, setQuantity] = useState<number>(0);

  const onChangeQuantity = () => {
    setQuantity(quantity + 1);
  };

    // Lifecycle Method Component
    useEffect(() => {
        
    }, []);   
    

  return (
    <div className='px-32'>
      {quantity}
      <button onClick={onChangeQuantity}>Plus</button>
    </div>
  );
}
