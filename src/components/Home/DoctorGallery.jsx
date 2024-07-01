import React from 'react';
// import './DoctorGallery.css';
import { FaUserMd } from 'react-icons/fa';

const doctors = [
    { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=900&t=st=1719772028~exp=1719772628~hmac=25962205692d61478b5079f0c075cf9650392c073fe8540190655c12d0562287' },
    { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' },
    { name: 'Dr. Alex Johnson', specialty: 'Dermatologist', image: 'https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1719781503~exp=1719782103~hmac=5f909b0b65742603c3c1c5228038e4820b30f76ea6b8df9168c852b37b1be88f' },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrician', image: 'https://img.freepik.com/free-photo/portrait-doctor_144627-39388.jpg?w=740&t=st=1719781565~exp=1719782165~hmac=ed0c50a4843db6afcda06b36e6d1b7d814f6b28cb804409798854c7aa8aad072' },
    { name: 'Dr. Michael Brown', specialty: 'Orthopedic', image: 'https://img.freepik.com/free-photo/close-up-portrait-young-male-doctor_171337-5145.jpg?w=900&t=st=1719781616~exp=1719782216~hmac=1cbc9f430092f8af35c6be3aa86f046ca2c3f44d0830774a82f7636a8e60c157' },
    { name: 'Dr. John Doe', specialty: 'Gynecologist', image: 'https://img.freepik.com/premium-photo/male-doctor-light-surface_392895-24691.jpg?w=740' },
    { name: 'Dr. Sarah Wilson', specialty: 'Gynecologist', image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1719781696~exp=1719782296~hmac=789c8ab28ee0948753476efcd7bf786dedfd1073397d3c953399f13b0c58557a' },
];

const DoctorGallery = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl mb-7 font-bold text-center">Our Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-lg shadow-lg ${
                                index % 3 === 0 ? 'md:col-span-1.5 md:row-span-2' : 'col-span-1'
                            }`}
                        >
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaUserMd className="text-white text-4xl mb-2" />
                                <h2 className="text-white text-xl font-semibold">{doctor.name}</h2>
                                <p className="text-white">{doctor.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorGallery;