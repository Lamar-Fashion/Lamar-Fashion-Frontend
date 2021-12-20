import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import "../../../styles/profile/fav-item.css"

function FavouriteItem() {
    const [favArray, setFavArray] = useState([])
    useEffect(() => {
      setFavArray(JSON.parse(window.localStorage.getItem("fav")))
    }, [favArray])
    // let array=new Array(10).fill(0)
    const deleteItem=async(indx,item)=>{
     await favArray.splice(Number(indx), 1);
    await  window.localStorage.setItem("fav",JSON.stringify(favArray))
    }
    return (
        <>
        <section className="fav-item">
        <div className="lamar-container">
            {favArray&&
            favArray.map((item,indx)=><div className='box'>
          <div className='over-view'>
          <div className='fav' onClick={()=>{
            deleteItem(indx,item)
            
          }}>

          <i class="fas fa-trash-alt" ></i>
            </div>
            <div className='fav'>
            <Link to="/ProductDetails" onClick={()=>{
                window.scrollTo({
                  left:0,
                  top:0,
                  behavior: "smooth"
                })
                window.localStorage.setItem("product",JSON.stringify(item))
              }}><i class='fas fa-shopping-bag'></i></Link>
            </div>
            
            <div className='go-view'>
            <Link to="/ProductDetails" onClick={()=>{
                window.scrollTo({
                  left:0,
                  top:0,
                  behavior: "smooth"
                })
                window.localStorage.setItem("product",JSON.stringify(item))
              }}><i class='far fa-eye' ></i></Link>
            </div>
          </div>
          <div className='overlay'></div>
          <div className='image'>
            <img src={item.images[0]} alt='' className='img-product' />
            <div className='shadow'></div>
          </div>
          <div className='info'>
            <h3>lamar</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <div className='price'>
              <span className='size'>small</span>
              <span className='price-p'>QAR 1200</span>
            </div>
            <button className='add-cart'> add to cart </button>
          </div>
        </div>)}
            
            </div>
        </section>
           
            
        </>
    )
}

export default FavouriteItem
