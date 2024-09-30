import React, { useContext, useEffect } from "react";
import { MyContext } from "../MyContext";

function Modal() {
  const { open, handleClose, confirmedIcon, cardCounts } = useContext(MyContext);


  
  // Filter out items with non-zero prices and calculate the total price in one step
const filteredCharge = cardCounts.filter((x) => x.prices !== 0);
const totalPrice = filteredCharge.reduce((acc, item) => acc + item.prices, 0);


console.log(totalPrice);


  useEffect(() => {
    if (open) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [open]);

  if (!open) return null;

  const displayItems = filteredCharge.map((item, index)=> (
    <div key={index} className='flex px-[24px] mt-[24px] '>
        
        <div className='flex flex-col w-full  '>
            <h1 className='font-red-hat font-semibold text-[16px]  text-custom-rose-900 '>{item.name}</h1>
            <h1 className='font-red-hat font-normal text-[14px]  text-custom-rose-500 mb-[16px]'>{`${item.count}x @${item.price}`}</h1>
            <hr className="h-px   border-0 dark:bg-rose-100"></hr>
        </div>
        
        <h1 className='font-red-hat font-normal text-[14px]  text-custom-rose-500'>{`$${item.prices}`}</h1>
        

    </div>
))

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[592px] h-auto overflow-y-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={confirmedIcon} className="h-[48px] w-[48px] place-self-start ml-[15px]" />
        <h1 className="font-red-hat text-[40px] font-bold place-self-start ml-[15px]">Order Confirmed</h1>
        <h2 className="font-red-hat text-custom-rose-500 text-[16px] font-normal mb-4 place-self-start ml-[17px]">We hope you enjoy your food!</h2>
        <div className="flex flex-col bg-custom-rose-50 w-[512px] h-auto rounded-lg pb-[24px]">
          {displayItems}
          <div className='flex justify-between w-full mt-[24px]'>
                        <h1 className='font-red-hat font-normal text-[14px] ml-[24px] text-custom-rose-900'>Order Total</h1>
                        <h1 className='font-red-hat font-bold text-[24px] mr-[24px] text-custom-rose-900'>{`$${totalPrice}`}</h1>
          </div>
        </div>
        <button
          className=" mt-[32px] py-[16px] px-[194.5px] font-red-hat text-[16px] font-light bg-custom-red w-[512px] h-[53px] text-white rounded-3xl hover:bg-red-600 transition"
          onClick={handleClose}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
