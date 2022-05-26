import React from 'react';
import AddReviewDetails from '../DashBoard/AddReviewDetails';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusnessSummary from './BusnessSummary';

const Home = () => {
   
    return (
        <div className='w-[1200px] m-auto'>
            <Banner></Banner>
            <Tools></Tools>
            <AddReviewDetails></AddReviewDetails>
            <BusnessSummary></BusnessSummary>
            
        </div>
    );
};

export default Home;