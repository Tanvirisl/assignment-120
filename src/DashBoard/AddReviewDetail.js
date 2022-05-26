import React from 'react';

const AddReviewDetail = ({ review }) => {
    const { img, name, description ,ratting} = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <h2><span className='text-secondary font-bold'>Name : </span>{name}</h2>
                    <p><span className='text-secondary font-bold'>Review : </span>{description}</p>
                    <p><span className='text-secondary font-bold'>Ratting : </span>{ratting}</p>

                    
                </div>
            </div>
        </div>
    );
};

export default AddReviewDetail;