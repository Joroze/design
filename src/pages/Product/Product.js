import './Product.scss';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import { useMemo, useContext, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import Modal from 'components/Modal/Modal';
import ProductItem from '../Home/components/ProductItem/ProductItem'

import { ProductContext } from 'components/ProductContextProvider'

function Product(props) {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const history = useHistory();
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open);

    const product = useMemo(() => products.find((product) => product.id === Number(id)), [id, products])

    if (!product) {
        return <Redirect to='/' />
    }

    return (
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

                {product.price
                    ? <Button onClick={toggleOpen} borderless>Purchase</Button>
                    : <Button disabled borderless>Unavailable</Button>
                }
            </div>

            <p style={{ textAlign: 'center', fontSize: '9px', marginTop: '15px' }}>~</p>

            <div className='product-disclosure'>
                <div><strong>SCULPTURE</strong> was founded on the philosophy of my roommate (Christopher Rizzo) matching the cost of a purchase towards myself in need, but has evolved to go deeper into the community. The more items we sell, the more my roommate matches his donation. As we grow, our giving and community efforts will continue to grow right alongside us. One purchased = one donation matched</div>
                <div>Disclosure: Donation per purchase is matched up to $100.</div>
            </div>

            {open &&
                <Modal
                    className='product-modal'
                    title="Confirm purchase"
                    onClose={toggleOpen}
                >
                    <div>You are purchasing the following Scultpure: <strong>{product.name}</strong></div>
                    <img src={product.imgSrc[0]} alt={product.name} />
                    <CheckoutForm
                        productId={id}
                        price={product.price}
                        onFormInitializationError={toggleOpen}
                    />
                </Modal>
            }

        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
    imgSrc: PropTypes.string,
    category: PropTypes.string
};

export default Product;
