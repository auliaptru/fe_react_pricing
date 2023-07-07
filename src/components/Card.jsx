import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const Card = ({ cardData }) => {
    const [activeCard, setActiveCard] = useState(2);

    const handleClickCard = (i) => {
        setActiveCard(i);
        console.log(i);
    };

    return (
        <div className='cards'>
            <div className='cards__wrapper'>
                {cardData.map((card) => {
                    const style = () => {
                        activeCard === card.id ? '#4a53ff' : '#7d82f1';
                    };
                    return (
                        <div
                            className={`card ${
                                activeCard === card.id && 'active'
                            }`}
                            key={card.id}
                            onClick={() => handleClickCard(card.id)}
                        >
                            <h2>{card.plan}</h2>

                            {card.price === 'free' ? (
                                <h1
                                    style={{
                                        color:
                                            activeCard === card.id
                                                ? '#4a53ff'
                                                : '#7d82f1',
                                    }}
                                >
                                    {card.price}
                                </h1>
                            ) : (
                                <h1
                                    style={{
                                        color:
                                            activeCard === card.id
                                                ? '#4a53ff'
                                                : '#7d82f1',
                                    }}
                                >
                                    ${card.price}
                                    <span>/month</span>
                                </h1>
                            )}

                            <p>{card.desc}</p>
                            <ul className='list'>
                                {card.item.map((item, idx) => (
                                    <div key={idx} className='list__wrapper'>
                                        {idx < card.ceklis && (
                                            <span
                                                style={{
                                                    color:
                                                        activeCard === card.id
                                                            ? '#4a53ff'
                                                            : '#7d82f1',
                                                }}
                                            >
                                                ✔
                                            </span>
                                        )}
                                        <li
                                            className={
                                                idx >= card.ceklis && 'tes'
                                            }
                                        >
                                            <a href={`#${item}`}>{item}</a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <button
                                style={{
                                    backgroundColor:
                                        activeCard === card.id
                                            ? '#4a53ff'
                                            : '#7d82f1',
                                }}
                            >
                                {card.btn}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Card.propTypes = {
    cardData: PropTypes.array,
};

export default Card;
