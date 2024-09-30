import { useState } from 'react'
// import FoodCard from './components/FoodCard'
import CartCard from './components/CartCard'
import FoodCardContainer from './components/FoodCardContainer'
import baklava from './assets/photos/image-baklava-desktop.jpg'
import brownie from './assets/photos/image-brownie-desktop.jpg'
import cake from './assets/photos/image-cake-desktop.jpg'
import cremeBrulee from './assets/photos/image-creme-brulee-desktop.jpg'
import macaron from './assets/photos/image-macaron-desktop.jpg'
import meringue from './assets/photos/image-meringue-desktop.jpg'
import pannaCotta from './assets/photos/image-panna-cotta-desktop.jpg'
import tiramisu from './assets/photos/image-tiramisu-desktop.jpg'
import waffle from './assets/photos/image-waffle-desktop.jpg'
import addToCartIcon from './assets/photos/icon-add-to-cart.svg'
import removeIcon from './assets/photos/icon-remove-item.svg'
import carbonNeutralIcon from './assets/photos/icon-carbon-neutral.svg'
import confirmedIcon from './assets/photos/icon-order-confirmed.svg'
import Modal from './components/Modal'
import Card from './components/Card'
import { MyContext } from './MyContext'
import dataJ from './data.json'
import './App.css'

function App() {

    const foodData = dataJ;
    const [cardCounts, setCardCounts] = useState(
      foodData.map(item => ({
        ...item, // Include other properties from foodData if needed
        prices: 0, // Initialize the price property to 0
        count: 0
    }))
    );

    const [open, setOpen ] = useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    function handleAdd(index, price){
        const newCounts = [...cardCounts]
        console.log("NEW COUNT")
        console.log(newCounts)
        newCounts[index].count += 1;
        setCardCounts(newCounts)
        handlePrice(index, newCounts, price)
    }

    
    function handleSubtract(index, price){
        const newCounts = [...cardCounts]
        newCounts[index].count -= 1;
        setCardCounts(newCounts)
        handlePrice(index, newCounts, price)
    }
    
    function handlePrice(index ){
        const newPrice = [...cardCounts]
        
        newPrice[index]={
          ...newPrice[index],
          prices: newPrice[index].price * newPrice[index].count,
        }
        setCardCounts(newPrice)
        console.log(newPrice)

    }

    function handleRemove(category){
      console.log("removing")
      
      const zeroOut = [...cardCounts]
      const found = zeroOut.find((element)=> element.category === category)
      if(found){
        found.prices = 0;
        found.count = 0;
      }

      setCardCounts(zeroOut)

  }
    


    const dataArray = foodData.map(item => {
        let icon;
        switch (item.category) {
          case 'Waffle':
            icon = waffle;
            break;
          case 'Crème Brûlée':
            icon = cremeBrulee;
            break;
          case 'Macaron':
            icon = macaron;
            break;
          case 'Tiramisu':
            icon = tiramisu;
            break;
          case 'Baklava':
            icon = baklava;
            break;
          case 'Pie':
            icon = meringue;
            break; 
          case 'Cake':
            icon = cake;
            break;
          case 'Brownie':
            icon = brownie;
            break;
          case 'Panna Cotta':
            icon = pannaCotta;
            break; 
          default:
            icon = ''; // Default icon or leave it blank
        }
   
        // Return the modified object with the correct icon
        return { ...item, icon };
      });

      console.log("From the container")
      console.log(dataArray)










      return (
        <MyContext.Provider value={{ cardCounts, handleAdd, handleSubtract, handlePrice, dataArray, carbonNeutralIcon, removeIcon, handleRemove, handleOpen, handleClose, open, confirmedIcon }}>
            <div className="flex flex-col md:flex-row mt-[88px] mx-[112px] justify-between">
                <div className="flex flex-col space-y-[24px]">
                    <h1 className="font-red-hat font-bold text-[40px]">Desserts</h1>
                    <FoodCardContainer />
                </div>
                <>
                  <Modal />
                </>
                <div className="md:mt-0 mt-[32px]"> {/* Add margin on top for small screens */}
                    <CartCard />
                </div>
            </div>
        </MyContext.Provider>
    );
}

export default App


