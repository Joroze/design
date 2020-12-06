import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import './ProductItem.scss';

import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';

function ProductItem({ name, description, price, imgSrc, detailedImageView, category, onClick }) {
    return (
        <div className={`component-product-item ${onClick ? 'clickable' : ''}`} onClick={onClick}>
            {detailedImageView ?
                imgSrc.map(function (img, index) {
                    return (
                        <InnerImageZoom
                            key={index}
                            src={img}
                            alt={name}
                            fullscreenOnMobile
                        />
                    )
                })
                : <img src={imgSrc[0]} alt={name} />
            }
            <p>{name || '???'}</p>
            {description && <p className='description'>{description}</p>}
            <span>{price ? `$${price}` : ' N/A'}</span>
        </div>
    );
}

ProductItem.defaultProps = {
    imgSrc: []
};

ProductItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imgSrc: PropTypes.array,
    detailedImageView: PropTypes.bool,
    category: PropTypes.string
};

export default ProductItem;
