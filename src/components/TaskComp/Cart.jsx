import React, { useContext } from 'react';
import { myContext } from '../../App';

const Cart = () => {
    const [data, setData] = useContext(myContext)
    const totalPrice = data.reduce((total, data) => total + data.price * (data.quantity || 1), 0);
    const totalQuantity = data.reduce((total, data) => total + (data.quantity || 1), 0);


    const handleIncrease = (id, quantity) => {
        setData(preData => {
            return preData.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity || quantity) + 1 }
                }
                return item
            })
        })

    }
    const handleDecrease = (id, quantity) => {
        setData(preData => {
            return preData.map((item) => {
                if (item.id === id && (item.quantity || quantity) > 0) {
                    return { ...item, quantity: (item.quantity || quantity) - 1 }
                }
                return item
            })
        })

    }
    const remove = (id) => {
        setData(data.filter((item) => item.id !== id))

    }
    return (
        <div>
            {/* <h1>Cart Comp</h1> */}
            <div className='head' style={{backgroundColor:'brown',paddingBottom:'5%',fontSizeAdjust:'20px'}}>
            <h1 className='header' style={{textAlign:'center',}}>Total Quantity:{totalQuantity}</h1>
            <h1 className='header2' style={{textAlign:'center'}}>Total Price:{totalPrice}</h1>
            </div>
            



            <div class="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item, index) => {
                    return (
                        <>
                       
                            <div key={index}>
                                <div class="col">
                                    <div class="card" style={{width:'70%',marginLeft:'50px'}}>
                                        <img style={{ width: '80%',position:'relative',paddingLeft:'25%'}} src={item.image} />
                                        <div class="card-body" style={{backgroundColor:'#077b8a'}}>
                                            <li>{item.id}</li>
                                            <h6 class="card-title"><li>{item.title}</li></h6>
                                            <li>{item.price}</li>
                                            <p class="card-text" style={{fontSize:'60%',}}><h6><li>{item.description}</li></h6></p>
                                            <li>{item.category}</li>
                                            <li>{item.rating.rate}</li>
                                            <li>{item.rating.count}</li>
                                            <button className='but' style={{marginLeft:'50px'}} onClick={() => handleIncrease(item.id, item.quantity || 1)}>+</button>
                                            <button style={{marginLeft:'40%'}} onClick={() => handleDecrease(item.id, item.quantity || -1)}>-</button>
                                            <div>
                                            <button style={{marginLeft:'30%',marginBottom:'5%',backgroundColor:'red'}} onClick={() => { remove(item.id) }}>Cart remove</button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>













                        </>
                    )
                })}
            </div>
        </div>

    );
};

export default Cart;