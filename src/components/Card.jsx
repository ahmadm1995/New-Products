function Card({id, icon, count, addToCartIcon, category, name, price, handleAdd, handleSubtract, addIcon, subtractIcon}) {
    return ( 
        <div key={id} className={`flex flex-col relative h-[400px] w-[240px]`}>
        <img className="h-[240px] w-[240px] rounded-8px" src={icon} />
        {count === 0 ? (
            <button 
                onClick={handleAdd}
                className="h-[44px] w-[160px] bg-white rounded-999 flex items-center justify-center px-[28px] py-[12.5px] self-center -mt-[22px] border border-custom-rose-400">
            <img src={addToCartIcon}/>
            <h1 className='font-red-hat font-semibold text-[14px] text-custom-rose-900'>Add to Cart</h1>
        </button>
        ) : (
            <div className="h-[44px] w-[160px] bg-custom-red rounded-999 flex items-center justify-around px-[12px] py-[12px] self-center -mt-[22px]">
                <button onClick={handleSubtract}><img src={subtractIcon}/></button>
                <span className="font-red-hat font-semibold text-[14px] text-white">{count}</span>
                <button onClick={handleAdd}><img src={addIcon}/></button>
            </div>
        )}
        <h1 className={`font-red-hat font-regular text-[14px] mt-[16px] text-custom-rose-500`}>{category}</h1>
        <h1 className={`font-red-hat font-semibold text-[16px]  text-custom-rose-900`}>{name}</h1>
        <h1 className={`font-red-hat font-semibold text-[16px] text-custom-red`}>{`$${price}`}</h1>
        
    </div>
     );
}

export default Card;



