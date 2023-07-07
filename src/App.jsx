import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Card from './components/Card';
import './app.scss';

const cardData = [
    {
        id: 1,
        plan: 'starter',
        price: 'free',
        desc: 'Free forever when you host with Debbi. Free for freelancers with Client Billing.',
        item: [
            '2 projects',
            'Client Billing',
            'Free staging',
            'Code export',
            'White labeling',
            'Site password protection',
            'Team dashboard',
        ],
        ceklis: 3,
        btn: 'Current Plan',
    },
    {
        id: 2,
        plan: 'lite',
        price: 16,
        desc: 'A light plan that lets you export your code for use in other environments or build prototypes.',
        item: [
            '2 projects',
            'Client Billing',
            'Free staging',
            'Code export',
            'White labeling',
            'Site password protection',
            'Team dashboard',
        ],
        ceklis: 4,
        btn: 'Upgrade Plan',
    },
    {
        id: 3,
        plan: 'pro',
        price: 35,
        desc: 'Best for active freelancers and designers who need more projects and premium features.',
        item: [
            '2 projects',
            'Client Billing',
            'Free staging',
            'Code export',
            'White labeling',
            'Site password protection',
            'Team dashboard',
        ],
        ceklis: 7,
        btn: 'Current Plan',
    },
];

const App = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className='app'>
            <div className='app__navbar'>
                <Navbar />
            </div>
            <div className='app__pricing-card'>
                <div className='pricing__title'>
                    <h1>Our Pricing Plans</h1>
                    <p>Pick an account plan that fits your workflow</p>
                </div>

                <div className='pricing__subs'>
                    <p>Monthly</p>
                    <div
                        onClick={() => setToggle(!toggle)}
                        className={`toggle__btn ${toggle && 'active'}`}
                    >
                        <span className='toggle__ball'></span>
                    </div>
                    <p>Annually</p>
                </div>

                <div className='pricing__card'>
                    <Card cardData={cardData} />
                </div>
            </div>
        </div>
    );
};

export default App;
