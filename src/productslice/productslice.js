import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState ={
    // items:[],
    items:localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const productsSlice =createSlice({
        name:"products",
        initialState,
        reducers:{
            addTocart(state,action){
                // state.items.push(action.payload)
                const product=state.items.findIndex(
                    (item)=> item.id=== action.payload.id
                );
                if(product >=0){
                    state.items[product].cartqty +=1;
                    toast.info("increased to cart quantity",{
                        position:"top-right",
                    });
                }else{
                    const newproduct = {...action.payload, cartqty:1};
                    state.items.push(newproduct);
                    toast.success("product added to cart",{
                        position:"bottom-left",
                    });
                }
                localStorage.setItem("items", JSON.stringify(state.items) );
            },
            // decrese cart
            decreascart(state,action){
                const product= state.items.findIndex(
                    itemcart=>itemcart.id === action.payload.id
                )
                if(state.items[product].cartqty>1){
                    state.items[product].cartqty -=1
                    toast.error("item decreased",{
                        position:"top-right",
                    });
                }else if(state.items[product].cartqty ===1){
                    const nextcart=state.items.filter(
                        (itemcart)=>itemcart.id !==action.payload.id
                    );
                    state.items =nextcart;
                    toast.error("removed from cart",{
                        position:"top-right"
                    });
                }
                localStorage.setItem("items", JSON.stringify(state.items))
            },

            // the end
            // cleacart all 
            clearallcart(state,action){
                state.items=[];
                toast.error("All cart deleted successfully",{
                    position:"top-left",
                });
                localStorage.setItem("items",JSON.stringify(state.items));
            },
            // the end
            // remove from cart
            Removefromcart(state,action){
                const nextcart = state.items.filter(
                    (itemcart)=>itemcart.id !==action.payload.id
                );
                state.items =nextcart;
                localStorage.setItem("items",JSON.stringify(state.items));
                toast.error("item removed successfully",{
                    position:"top-center",
                });
            },

            // the end
            // getting items total
            getTotal(state,action){
                let {total,quantity}=state.items.reduce((cartTotal,cartItem)=>{
                    const {price,cartqty}= cartItem;
                    const itemTotal = price * cartqty;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartqty;
                    return cartTotal
                },{
                    total:0,
                    quantity:0
                });
                state.cartTotalQuantity=quantity;
                state.cartTotalAmount=total;
            }
            // the end
        },
        
    
});


export const {addTocart,decreascart,clearallcart,Removefromcart,getTotal}=productsSlice.actions;
export default productsSlice.reducer;