import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the check icon
// import feature from '../../assets/feature/feature-img.png';

const Featured = () => {
    return (
        <section className='py-10'>
            <h1 className='text-4xl mb-5 font-bold'>Our Features</h1>
            <div className='lg:flex items-center'>
                <div>
                    <div className='mb-4'>
                        <h2 className='text-4xl font-semibold mb-5 text-left'>We Provide Exceptional Healthcare Services</h2>
                        <p className='text-left'>Our hospital is equipped with state-of-the-art technology and staffed by highly trained professionals dedicated to providing the best care possible.</p>
                    </div>
                    <div className='text-left font-semibold mt-4 space-y-1'>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Advanced Medical Technology</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Specialized Care Departments</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> 24/7 Emergency Services</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Highly Qualified Medical Staff</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Patient-Centered Care</p>
                    </div>
                    <div className='mt-6 text-left'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='lg:ml-10 mt-4 rounded-lg'>
                    <img  src='https://img.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg?w=900&t=st=1719817481~exp=1719818081~hmac=8cf6602a5a109250606210f0ee373a5e68148093cfadc3be87c3a271e10ebd0d' alt="Feature" />
                </div>
            </div>
        </section>
    );
};

export default Featured;
