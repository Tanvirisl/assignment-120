import React, { useEffect, useState } from 'react';
import AddReviewDetail from './AddReviewDetail';

const AddReviewDetails = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getReview',{
            method:'GET',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=' border-2 rounded-lg mt-20'>
            <h1 className='text-3xl font-bold text-secondary text-center mt-5'>Customer Review</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-16'>
                {
                    reviews.map(review => <AddReviewDetail
                        key={review._id}
                        review={review}
                    ></AddReviewDetail>)
                }
            </div>
        </div>
    );
};

export default AddReviewDetails;