import './ProductItem.scss';

import PropTypes from 'prop-types';

function ProductItem({ name, description, price, imgSrc, category, onClick }) {

    return (
        <div className={`component-product-item ${onClick ? 'clickable' : ''}`} onClick={onClick}>
            <img src={imgSrc} alt="product-item-text" />
            <p>{name || '???'}</p>
            {description && <p className='description'>{description}</p>}
            <span>{price ? `$${price}` : ' N/A'}</span>
        </div>
    );
}

ProductItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imgSrc: PropTypes.string,
    category: PropTypes.string
};

export default ProductItem;
