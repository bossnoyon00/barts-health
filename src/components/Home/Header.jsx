import React from 'react';
const Header = () => {
    return (
        <header className="py-5  border-b">
            <div className="container px-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <img style={{ width: '75px' }} src='https://i.ibb.co/rsWKkxY/pngtree-doctor-icon-circle-png-image-2055257-removebg-preview-1.png' alt="Logo" />
                    <h5 className="text-2xl">Barts Health</h5>
                </div>
                <div className="flex items-center gap-2 mb-4 sm:mb-0 text-center sm:text-left">
                    <h5 className="text-1xl">
                        <span className="font-semibold">Customer Support</span> <br /> +550 554 4554
                    </h5>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        className="btn bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition font-semibold"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Appointment
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;