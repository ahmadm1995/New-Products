import emptyCart from '../assets/photos/illustration-empty-cart.svg'
import { useContext } from 'react';
import { MyContext } from '../MyContext';


function CartCard() {

    const {cardCounts, carbonNeutralIcon, removeIcon, handleRemove, handleOpen} = useContext(MyContext)
    let totalCount = 0;
    let totalPrice = 0;
    
    cardCounts.forEach(element => {
        totalCount+=element.count
    });

    

    

    let filteredCharge = cardCounts.filter((x)=>x.prices!=0)
    console.log(filteredCharge)
    

    filteredCharge.forEach(element => {
        totalPrice+=element.prices
    });

    console.log(totalPrice)

    const displayItems = filteredCharge.map((item, index)=> (
        <div key={index} className='flex mt-[24px] mb-[16px] '>
            
            <div className='flex flex-col w-full '>
                <h1 className='font-red-hat font-semibold text-[16px]  text-custom-rose-900 '>{item.name}</h1>
                <h1 className='font-red-hat font-normal text-[14px]  text-custom-rose-500 mb-[16px]'>{`${item.count}x @${item.price} $${item.prices}`}</h1>
                <hr className="h-px   border-0 dark:bg-rose-100"></hr>
            </div>
            <button onClick={()=> handleRemove(item.category)} className="mr-[24px]">
                <img src={removeIcon} />
            </button>
            

        </div>
    ))
    

    return (
        <>
            {totalCount === 0 ? (
                <div className='w-[384px] h-[299px] bg-white flex flex-col justify-start items-center pl-[24px] pt-[24px] rounded-12px mr-[112px]'>
                    <h1 className='font-red-hat font-bold text-[24px] text-custom-red place-self-start'>Your Cart (0)</h1>
                    <img className="w-[128px] h-[128px] mt-[40px]" src={emptyCart} alt="Empty Cart" />
                    <h1 className='font-red-hat font-semibold text-[14px] text-custom-rose-500 mb-[40px]'>
                        Your added items will appear here
                    </h1>
                </div>
            ) : (
                <div className='w-[384px] h-auto bg-white flex flex-col justify-start items-start pl-[24px] pt-[24px] rounded-12px mr-[112px] pb-[40px]'>
                    <h1 className='font-red-hat font-bold text-[24px] text-custom-red '>Your Cart ({totalCount})</h1>
                    <div className='w-full'>
                        {displayItems}
                    </div>
                    <div className='flex justify-between w-full pr-[24px] mb-[24px]'>
                        <h1 className='font-red-hat font-normal text-[14px] text-custom-rose-900'>Order Total</h1>
                        <h1 className='font-red-hat font-bold text-[24px] text-custom-rose-900'>{`$${totalPrice}`}</h1>
                    </div>
                    <div className='flex justify-center items-center h-[52px] w-[336px] pr-[24px] bg-custom-rose-50 rounded-lg mb-[24px]'>
                        <img src={carbonNeutralIcon} alt="" />
                        <h1 className='pl-[8px] font-red-hat font-normal text-[14px]'>This is a <strong>carbon-neutral</strong> delivery</h1>
                    </div>

                    <button onClick={handleOpen} className='bg-custom-red w-[336px] h-[53px] rounded-3xl text-white font-red-hat font-semibold text-[16px] '>Confirm Order</button>
                </div>
            )}
        </>
    );
}

export default CartCard;