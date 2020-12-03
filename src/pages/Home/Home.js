
import './Home.scss';

import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import Menu from './components/Menu/Menu';
import ProductItem from './components/ProductItem/ProductItem';

import playdohImg from 'assets/images/playdoh.jpg'
import earthImg from 'assets/images/earth.jpg'
import sunImg from 'assets/images/sun.jpg'
import snowmanImg from 'assets/images/snowman.jpg'
import patrickImg from 'assets/images/patrick.jpg'
import burgerImg from 'assets/images/burger.jpg'

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

const productList = window.productList = [
    {
        id: '1',
        name: 'Burger',
        description: '',
        price: '',
        imgSrc: burgerImg,
        category: ['food'],
        color: ['orange']
    },
    {
        id: '2',
        name: 'Sun',
        description: '',
        price: '',
        imgSrc: sunImg,
        category: ['space'],
        color: ['red', 'orange']
    },
    {
        id: '3',
        name: 'Earth',
        description: '',
        price: '',
        imgSrc: earthImg,
        category: ['space'],
        color: ['blue', 'green', 'white']
    },
    {
        id: '4',
        name: 'Snowman',
        description: '',
        price: '',
        imgSrc: snowmanImg,
        category: [],
        color: ['white']
    },
    {
        id: '5',
        name: 'Patrick',
        description: 'The best character in Bikini Bottom',
        price: '5',
        imgSrc: patrickImg,
        category: ['tv'],
        color: ['pink', 'green', 'purple', 'red']
    },
    {
        id: '6',
        name: 'Example',
        description: '',
        price: '',
        imgSrc: playdohImg,
        category: [],
        color: []
    },
]

function Home() {
    const [products, setProducts] = useState(productList);
    const [selectedColorFilters, setSelectedColorFilters] = useState({});
    const [selectedCategoryFilters, setSelectedCategoryFilters] = useState({});
    // const [sortBy, setSortBy] = useState();
    const history = useHistory();

    useEffect(function () {
        let filteredProducts = productList;

        if (Object.keys(selectedColorFilters).length) {
            filteredProducts = productList.filter((product) => product.color.some((color) => color.toLowerCase() in selectedColorFilters))
        }

        if (Object.keys(selectedCategoryFilters).length) {
            filteredProducts = filteredProducts.filter((product) => product.category.some((category) => category.toLowerCase() in selectedCategoryFilters))
        }

        setProducts(filteredProducts);
    }, [selectedColorFilters, selectedCategoryFilters])

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
        console.log(value);
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
                    <div className='product-list'>
                        {products.map(function (product) {
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
                                />
                            )
                        })}
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
