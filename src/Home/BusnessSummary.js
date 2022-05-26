import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SharedButton from '../Shared/SharedButton';

const BusnessSummary = () => {
    const [num, setNum] = useState(0)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async(data)=>{
        const order = {
            price:data.price,
        }
        console.log(order)
    }
    const handleMinus = () => {
        const number = parseFloat(num - 1)
        setNum(number)
    }
    const handlePlus = () => {
        const number = parseFloat(num + 1)
        setNum(number)

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-secondary font-bold text-center text-xl mb-3'>Add your Product</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        
                        type="number"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs mb-2"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "file is Required"
                            },

                        })}
                    />
                </div>
                <button onClick={handleMinus}>-</button>
                <button onClick={handlePlus}>+</button>
                <SharedButton>add</SharedButton>
            </form>
        </div>
    );
};

export default BusnessSummary;