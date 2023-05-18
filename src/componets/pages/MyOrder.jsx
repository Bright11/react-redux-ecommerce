import { collection, getDocs, query, where } from 'firebase/firestore';
import React,{useEffect,useState} from 'react'
import { db } from '../../firebase';
import './myorder.css'

function MyOrder() {
    const [order,setOrder]= useState([])
    useEffect(() => {
        const getCat = async () => {
          const categorys = collection(db, "orders");
          const allact = query(categorys, where("username", "==", "chika 2"));
          const querySnapshot = await getDocs(allact);
          let myorder = [];
          querySnapshot.forEach((doc) => {
            myorder.push({ id: doc.id, ...doc.data() });
          });
          setOrder(myorder);
        };
        return () => {
          getCat();
        };
      }, [order]);
    console.log(order)
  return (
    <div>
       <div className="order-container">
       {order?.map((order)=>(
        <>
        <div className='order'>
            {/* <h1>{order.username}</h1>
         
            */}
            <div className="itemsorder">
            {order?.items.map((items)=>(
                 <div className="oredr-content">
           <div className="orderimage">
           <img src={items.image} alt="" />
           </div>
           <div className="order-info">
           <h1>{items.name}</h1>
           <h1>{items.price}</h1>
          
           </div>
                 </div>
            ))}
            </div>
            <div className="totalandqty">
             <h1>Amount to pay ${order.cartTotalAmount}</h1>
           <h1>Number of items ({order.cartTotalQuantity})</h1>
        </div>
        </div>
        <div className="checkoutform">
        <form action="">
            <label htmlFor="">Email</label>
            <input type="text" value="chikanwazuo@gmail.com" />
            <label htmlFor="">Number order</label>
            <input type="text" readOnly value={order.cartTotalQuantity}/>
            <label htmlFor="">Order Amount ${order.cartTotalAmount}</label>
            <input type="text" readOnly value={`${order.cartTotalAmount}`} />
            <label htmlFor="">Shipping Address</label>
            <input type="text" placeholder='Shipping Address' />
            <button>Complete order</button>

        </form>
       </div>
        </>
       ))}
      
       </div>
    </div>
  )
}

export default MyOrder