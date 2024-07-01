import React from 'react';
import faq from '../../assets/contact-img.png'
const ContactForm = () => {
    return (
        <section id="contact" className='mt-6 mb-8 '>

            <div className='my-10 '>
                <h3 className='text-4xl mb-2 font-bold'>Share Your Vision for Exceptional Healthcare!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum maxime eaque adipisci, <br /> architecto veniam vitae blanditiis deserunt beatae
                </p>
            </div>
            <div className='lg:flex gap-9'>
                <div>
                    <img style={{ width: '500px' }} className='' src={faq} alt="" />
                </div>


                <form data-aos="fade-up" >
                    <div className='flex lg:flex-row md:flex-row flex-col gap-5 mb-5'>
                        <div className='lg:w-1/2 md:w-1/2'>
                            <label className='text-sm text-white'>Full Name <span className='text-error'>*</span></label><br />
                            <input name="user_name" type="text" placeholder="Your Name" className="input w-full px-3 focus:outline-none" required />
                        </div>
                        <div className='lg:w-1/2 md:w-1/2'>
                            <label className='text-sm text-white'>Email <span className='text-error'>*</span></label><br />
                            <input name="user_email" type="email" placeholder="Your Email" className="input w-full px-3 focus:outline-none" required />
                        </div>
                    </div>
                    <label className='text-sm text-white'>Message <span className='text-error'>*</span></label>
                    <textarea name="message" className="textarea w-full px-3 mt-2 p-0 h-64 focus:outline-none" placeholder="Your Message" required></textarea>
                    <hr />
                    <div className='flex justify-center'>
                        <input type="submit" value="Submit" className="btn btn-wide bg-blue-500 hover:bg-blue-600 rounded-md mt-10 px-6" />
                    </div>
                </form>
            </div>

            {/* FORM */}

        </section>
    );
};

export default ContactForm;