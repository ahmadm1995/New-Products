
import addToCartIcon from '../assets/photos/icon-add-to-cart.svg'
import addIcon from '../assets/photos/icon-increment-quantity.svg'
import subtractIcon from '../assets/photos/icon-decrement-quantity.svg'
import Card from './Card'
import { useContext } from 'react'
import { MyContext } from '../MyContext'


function FoodCardContainer() {


    const {cardCounts, handleAdd, handleSubtract, dataArray} = useContext(MyContext);


 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[32px] pb-[88px]">
            {dataArray.map((product,index)=>(
                <Card 
                key={index}
                id={index}
                count={cardCounts[index].count}
                icon={product.icon}
                addToCartIcon={addToCartIcon}
                addIcon={addIcon}
                subtractIcon={subtractIcon}
                category={product.category}
                name={product.name}
                price={product.price}
                handleAdd={()=> handleAdd(index)}
                handleSubtract={()=> handleSubtract(index)}
                
                />
            ))}
        </div>
      );
}

export default FoodCardContainer;

