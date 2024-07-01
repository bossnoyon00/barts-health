import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const plans = {
    monthly: [
        {
            title: 'Basic',
            service: 'General Check-Up',
            price: '$50/month',
            features: [
                'Monthly General Check-Up',
                'Basic Blood Tests',
                'Access to Health Resources',
                'Discount on Medications',
            ],
        },
        {
            title: 'Standard',
            service: 'Advanced Care',
            price: '$100/month',
            features: [
                'Monthly General Check-Up',
                'Comprehensive Blood Tests',
                'Specialist Consultations',
                'Priority Appointments',
                'Access to Health Resources',
                'Discount on Medications',
            ],
            popular: true, // Add a flag for popular card
        },
        {
            title: 'Premium',
            service: 'Complete Health Package',
            price: '$200/month',
            features: [
                'Monthly General Check-Up',
                'Full Body Scans',
                'Specialist Consultations',
                '24/7 Telehealth Services',
                'Priority Appointments',
                'Access to Health Resources',
                'Discount on Medications',
            ],
        },
    ],
    yearly: [
        {
            title: 'Basic',
            service: 'General Check-Up',
            price: '$500/year',
            features: [
                'Annual General Check-Up',
                'Basic Blood Tests',
                'Access to Health Resources',
                'Discount on Medications',
            ],
        },
        {
            title: 'Standard',
            service: 'Advanced Care',
            price: '$1000/year',
            features: [
                'Annual General Check-Up',
                'Comprehensive Blood Tests',
                'Specialist Consultations',
                'Priority Appointments',
                'Access to Health Resources',
                'Discount on Medications',
            ],
            popular: true, // Add a flag for popular card
        },
        {
            title: 'Premium',
            service: 'Complete Health Package',
            price: '$2000/year',
            features: [
                'Annual General Check-Up',
                'Full Body Scans',
                'Specialist Consultations',
                '24/7 Telehealth Services',
                'Priority Appointments',
                'Access to Health Resources',
                'Discount on Medications',
            ],
        },
    ],
};

const OurPlan = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl mb-2 font-bold text-center">Our Plan</h1>
                <p className="text-xl font-semibold text-gray-600 text-center mb-7">Choose a plan that suits your healthcare needs</p>
                <Tabs>
                    <TabList className="flex font-bold border justify-center w-min mx-auto mb-8">
                        <Tab
                            className="px-5 py-2 rounded cursor-pointer transition text-blue-500"
                            selectedClassName="bg-blue-500 text-white"
                        >
                            Monthly
                        </Tab>
                        <Tab
                            className="px-5 py-2 rounded cursor-pointer transition text-blue-500"
                            selectedClassName="bg-blue-500 text-white"
                        >
                            Yearly
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.monthly.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`plan-card bg-white p-6 rounded-lg shadow-md flex flex-col justify-between text-center transition transform hover:scale-105 hover:shadow-lg ${plan.popular ? 'relative' : ''}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-tl-lg rounded-br-lg">
                                            Popular
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-1">{plan.title}</h2>
                                        <h3 className="text-xl text-gray-500 mb-4">{plan.service}</h3>
                                        <div className="text-xl font-bold mb-6 bg-zinc-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                                            <p>{plan.price}</p>
                                        </div>
                                        <div className="text-left font-medium space-y-2">
                                            {plan.features.map((feature, index) => (
                                                <p key={index} className="flex items-center">
                                                    <FaCheckCircle className="text-green-500 mr-2" />
                                                    {feature}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.yearly.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`plan-card bg-white p-6 rounded-lg shadow-md flex flex-col justify-between text-center transition transform hover:scale-105 hover:shadow-lg ${plan.popular ? 'relative' : ''}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-tl-lg rounded-br-lg">
                                            Popular
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-1">{plan.title}</h2>
                                        <h3 className="text-xl text-gray-500 mb-4">{plan.service}</h3>
                                        <div className="text-xl font-bold mb-6 bg-zinc-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                                            <p>{plan.price}</p>
                                        </div>
                                        <div className="text-left font-medium space-y-2">
                                            {plan.features.map((feature, index) => (
                                                <p key={index} className="flex items-center">
                                                    <FaCheckCircle className="text-green-500 mr-2" />
                                                    {feature}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default OurPlan;
