import React from 'react';
const services = [
    {
        icon: 'https://i.ibb.co/MBwqZRq/health-care-black-glyph-icon-260nw-1859845591-removebg-preview.png',
        title: 'Emergency Services',
        description: 'Details about the emergency services, including 24/7 availability and response times.'
    },
    {
        icon: 'https://i.ibb.co/853V8nR/hospital-003-512.webp',
        title: 'Surgical Facilities',
        description: 'Information on operating rooms, surgical technology, and recovery areas.'
    },
    {
        icon: 'https://i.ibb.co/dfSpXZt/medical.png',
        title: 'Body Testing',
        description: 'Ensuring the highest quality of your products through comprehensive testing services.'
    },
    {
        icon: 'https://i.ibb.co/yY2w7xZ/safety-at-work.png',
        title: 'Health Management',
        description: 'Managing and optimizing your health infrastructure for better performance and reliability.'
    },
    {
        icon: 'https://i.ibb.co/MVXjMjL/family-insurance.png',
        title: 'Life Health Security',
        description: 'Protecting your health from any virus with advanced life security solutions.'
    },
    {
        icon: 'https://i.ibb.co/ZJxBcHC/x-ray.png',
        title: 'X-ray',
        description: 'Providing seamless and secure wireless connectivity solutions for your business.'
    }
];

const Services = () => {
    return (
        <section className="py-10 ">
            <h2 className='text-4xl mb-7 font-bold'>Our Facility</h2>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="icon mb-4">
                                <img style={{width:'80px', height:'71px'}} src={service.icon} alt={`Service ${index + 1} Icon`} className="mx-auto" />
                            </div>
                            <h2 className="service-title text-2xl font-semibold mb-2">{service.title}</h2>
                            <p className="description text-gray-600 mb-4">{service.description}</p>
                            <button className="service-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
