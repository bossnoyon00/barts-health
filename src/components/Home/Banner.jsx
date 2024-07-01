import React from 'react';
import banner from '../../assets/banner1.png'

const Banner = ({ onContactClick }) => {
    return (
        <section className="h-full mt-10  max-h-[640px] mb-52 xl:mb-24 ">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
                    <h1 className="text-2xl lg:text-[58px] font-semibold leading-none mb-5">
                        <span className="text-violet-700">Discover </span>Our Advanced
                         Medical Facilities
                    </h1>
                    <p className="max-w-[480px] mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
                        dolorem qui et obcaecati repellat tempora dicta impedit! Dolore eum
                        suscipit sunt fuga veniam ad ipsum? Officiis ipsam ex fugit!
                    </p>
                    <div className='my-3 text-left'>
                        <button onClick={onContactClick} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                            Contact Us
                        </button>
                    </div>
                </div>
                {/* image  */}
                <div className=" flex-1 lg:flex justify-end items-end">
                    <img style={{ width: '400px', borderRadius: '5px' }} src={banner} alt="Banner Image" />
                </div>
            </div>
        </section>
    );
};

export default Banner;