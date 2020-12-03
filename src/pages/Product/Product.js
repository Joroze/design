import './Product.scss';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import { useMemo } from 'react';
import { Switch, Route, Redirect, useHistory, useParams } from 'react-router-dom';
import InnerImageZoom from 'react-inner-image-zoom';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import ProductItem from '../Home/components/ProductItem/ProductItem'

function Product(props) {
    const history = useHistory();
    const { id } = useParams();
    const product = useMemo(() => window.productList.find((product) => product.id === id), [id])

    return product ?
        (
            <div className='component-product-page'>
                <div className='product-page-container'>
                    <Button onClick={() => history.push('/')} borderless>
                        {'< Previous'}
                    </Button>
                    <ProductItem
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imgSrc={product.imgSrc}
                        detailedImageView
                    />
                </div>

                <p style={{ textAlign: 'center', fontSize: '9px', marginTop: '15px' }}>~</p>

                <div className='product-disclosure'>
                    <div><strong>SCULPTURE</strong> was founded on the philosophy of my roommate (Christopher Rizzo) matching the cost of a purchase towards myself in need, but has evolved to go deeper into the community. The more items we sell, the more my roommate matches his donation. As we grow, our giving and community efforts will continue to grow right alongside us. One purchased = one donation matched</div>
                    <div>Disclosure: Donation per purchase is matched up to $100.</div>
                </div>

            </div>
        )
        : <Redirect to='/' />
}

Product.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imgSrc: PropTypes.string,
    category: PropTypes.string
};

export default Product;
