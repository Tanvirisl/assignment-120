import React from 'react';
import { Link } from 'react-router-dom';
import SharedButton from '../Shared/SharedButton';

const ToolService = ({ tool }) => {
    const { _id, img, name, description, quantity, price } = tool;

    return (
        <div className='w-[350px] border-2 p-5 rounded-lg shadow-xl'>
            <div>
                <img className='h-52' src={img} alt="" />
            </div>
            <div className=''>
                <div>
                    <h2><span className='font-bold text-secondary'>Name</span> : {name}</h2>
                    <h2><span className='font-bold text-secondary'>Stocks</span> : {quantity}</h2>
                    <p><span className='font-bold text-secondary'>Description</span> : {description}</p>
                    <h2><span className='font-bold text-secondary'>Per quantity</span> : ${price}</h2>
                </div>
                <div className='mt-6'>
                    <Link to={`/toolsParts/${_id}`}><SharedButton>Order</SharedButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ToolService;