import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({item}) => {
    return (
        <div className="card">
            {/** Probably no image */}
            <div className="card__img"></div>
            <div className="card__title">
                <p>{item.title}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card;