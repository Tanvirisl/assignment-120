import React from 'react';

const Banner = () => {
    return (

        <div class="carousel w-[1200px] h-[600px] m-auto rounded-lg mt-6 border-2">
            <div id="slide1" class="carousel-item relative w-full">
                <img className=' w-full' src="https://image.shutterstock.com/image-photo/old-dusty-pc-motherboard-cables-600w-271479983.jpg" class="w-full" alt=''/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img className='w-full' src="https://image.shutterstock.com/image-photo/hard-disks-motherboards-old-computer-600w-1906241782.jpg" class="w-full" alt=''/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img className=' w-full' src="https://image.shutterstock.com/image-photo/scrapped-mobile-phones-600w-739669459.jpg" class="w-full" alt=''/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img className=' w-full' src="https://image.shutterstock.com/image-photo/broken-laptop-that-fell-on-600w-1634479768.jpg" class="w-full" alt=''/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>

    );
};

export default Banner;