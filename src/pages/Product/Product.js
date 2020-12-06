import './Product.scss';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import { useMemo, useContext, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ProductItem from '../Home/components/ProductItem/ProductItem'

import { ProductContext } from 'App'

function Product(props) {
    const { availableItems } = useContext(ProductContext);
    const { id } = useParams();
    const history = useHistory();
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open);

    const product = useMemo(() => availableItems.find((product) => product.id === id), [id, availableItems])

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

                <Button onClick={toggleOpen} borderless>
                    {'Purchase'}
                </Button>
            </div>

            <p style={{ textAlign: 'center', fontSize: '9px', marginTop: '15px' }}>~</p>

            <div className='product-disclosure'>
                <div><strong>SCULPTURE</strong> was founded on the philosophy of my roommate (Christopher Rizzo) matching the cost of a purchase towards myself in need, but has evolved to go deeper into the community. The more items we sell, the more my roommate matches his donation. As we grow, our giving and community efforts will continue to grow right alongside us. One purchased = one donation matched</div>
                <div>Disclosure: Donation per purchase is matched up to $100.</div>
            </div>

            {open &&
                <Modal
                    title="Confirm purchase"
                    onClose={toggleOpen}
                >
                    You know where to contact me.
                </Modal>
            }

        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imgSrc: PropTypes.string,
    category: PropTypes.string
};

export default Product;
