import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToolsParts from '../hooks/useToolsParts';
import SharedButton from '../Shared/SharedButton';

const ToolsAndPartsDetails = () => {
    const { toolsId } = useParams()
    const [tools] = useToolsParts(toolsId)
    const { img, name, price, quantity, sellQuantity } = tools;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [num, setNum] = useState(1);
    const handleMinus = () => {
        const number = parseFloat(num - 1)
        setNum(number)
    }
    const handlePlus = () => {
        const number = parseFloat(num + 1)
        setNum(number)

    }
    const handleOnChange = (event) => {
        const newNumber = parseFloat(event.target.value)
        setNum(newNumber);
    }

    const onSubmit = async (event) => {


        if (num > quantity) {
            toast.error(`please order low quantity of ${quantity}`)
        }
        if (num < sellQuantity) {
            toast.error(`Minimum sell quantity ${sellQuantity}`)
        }
        const myOrder = {
            price: data.price,
            quantity: data.quantity,
        }
        console.log(myOrder);
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myOrder)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.dataId) {
                    toast.success('Order success')
                }
                else {
                    toast.error('Order error')
                }
            })
    }





    return (
        <div className='p-24  flex justify-center'>
            <div className='flex border-2 rounded-lg p-5'>
                <div className='w-96 flex justify-center items-center'>
                    <img className='w-56 h-56' src={img} alt="" />
                </div>
                <div className='w-96'>
                    <h1 className='text-xl font-bold font-serif text-secondary'>Name : {name}</h1>
                    <h1 className='text-xl text-secondary'>Price : ${price}</h1>
                    <h1 className='text-xl font-serif text-secondary'>Quantity : {quantity}</h1>
                    <h1 className='text-xl font-serif text-secondary'>minimum sell : {sellQuantity}</h1>

                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <div className="form-control w-full max-w-xs">
                           
                            <input

                                type="number"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "file is Required"
                                    },

                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            
                            <input

                                type="number"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "file is Required"
                                    },

                                })}
                            />
                        </div>
                    </form>
                    <div onClick={handleSubmit} className='mt-2'>
                        <SharedButton>Place Order</SharedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsAndPartsDetails;