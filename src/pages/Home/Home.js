
import './Home.scss';

import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";

import Menu from './components/Menu/Menu';
import ProductItem from './components/ProductItem/ProductItem';

import { ProductContext } from 'components/ProductContextProvider'

const categoryMenuHeader = {
    text: 'All categories',
    clickable: true
}

const categoryFilters = [
    'Accessories',
    'Animals',
    'Food',
    'TV',
    'Space'
].map((text) => text.toLowerCase());

const colorMenuHeader = {
    text: 'All colors',
    clickable: true
}

const colorFilters = [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
    'Brown',
    'Pink',
    'Black',
    'White',
    'Grey'
].map((text) => text.toLowerCase());

const sortMenuHeader = {
    text: 'Sort',
    clickable: false
}

function Home({ children }) {
    const { products } = useContext(ProductContext);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedColorFilters, setSelectedColorFilters] = useState({});
    const [selectedCategoryFilters, setSelectedCategoryFilters] = useState({});
    // const [sortBy, setSortBy] = useState();
    const history = useHistory();

    useEffect(function () {
        let filteredProducts = products;

        if (Object.keys(selectedColorFilters).length) {
            filteredProducts = products.filter((product) => product.color.some((color) => color.toLowerCase() in selectedColorFilters))
        }

        if (Object.keys(selectedCategoryFilters).length) {
            filteredProducts = filteredProducts.filter((product) => product.category.some((category) => category.toLowerCase() in selectedCategoryFilters))
        }

        setFilteredProducts(filteredProducts);
    }, [selectedColorFilters, selectedCategoryFilters, products])

    function handleFilterByCategory(e, filterValue) {
        if (filterValue.toLowerCase() === 'all categories') {
            return setSelectedCategoryFilters({})
        }

        if (filterValue in selectedCategoryFilters) {
            const { [filterValue]: deletedKey, ...rest } = selectedCategoryFilters;

            setSelectedCategoryFilters(rest)
        } else {
            setSelectedCategoryFilters({ [filterValue]: true })
        }
    }

    function handleFilterByColor(e, filterValue) {
        if (filterValue.toLowerCase() === 'all colors') {
            return setSelectedColorFilters({})
        }

        if (filterValue in selectedColorFilters) {
            const { [filterValue]: deletedKey, ...rest } = selectedColorFilters;

            setSelectedColorFilters(rest)
        } else {
            setSelectedColorFilters({ ...selectedColorFilters, [filterValue]: true })
        }
    }

    function handleSort(e, value) {
        // console.log(value);
    }

    return (
        <div className="component-home">
            <div className='container'>
                <div className='left-pane desktop-visible'>
                    <Menu
                        onClick={handleFilterByCategory}
                        headerItem={categoryMenuHeader}
                        items={categoryFilters}
                        selected={selectedCategoryFilters}
                    />

                    <Menu
                        onClick={handleFilterByColor}
                        headerItem={colorMenuHeader}
                        items={colorFilters}
                        selected={selectedColorFilters}
                        multiselect
                        colored
                    />
                </div>

                <div className='inner-container'>
                    {children}

                    <div className='product-list-container'>
                        {filteredProducts.length
                            ? <div className='product-list'>
                                {filteredProducts.map(function (product) {
                                    if (product.hidden) {
                                        return null;
                                    }

                                    function handleOnClick() {
                                        history.push(`/product/${product.id}`);
                                    }

                                    return (
                                        <ProductItem
                                            key={product.id}
                                            onClick={handleOnClick}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            imgSrc={product.imgSrc}
                                            available={product.available}
                                        />
                                    )
                                })}
                            </div>
                            : <p>No pieces found.</p>
                        }
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '9px' }}>~</p>
                    <p style={{ textAlign: 'center' }}>Collection</p>
                </div>

                <div className='right-pane desktop-visible'>
                    <Menu
                        onClick={handleSort}
                        headerItem={sortMenuHeader}
                        items={[
                            'Latest arrivals',
                            'Trending',
                            'Price: Low to high',
                            'Price: High to low',
                            'Sale: Low to high',
                            'Sale: High to low'
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
