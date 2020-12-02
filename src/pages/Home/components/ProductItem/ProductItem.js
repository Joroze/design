import './ProductItem.scss';

import PropTypes from 'prop-types';

function ProductItem({ img, title, description }) {

    return (
        <div className='component-product-item'>
            <img src={img} alt="product-item-text" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Cras nec mi posuere, interdum massa a, laoreet risus. Aenean sollicitudin blandit quam, ac egestas est suscipit at. Vestibulum ante ipsum primis ino.</p>
        </div>
    );
}

ProductItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
};

export default ProductItem;
