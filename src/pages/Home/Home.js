
import './Home.scss';

import { useState, useEffect } from 'react'

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

const productList = [
    {
        name: 'Burger',
        description: '',
        price: '',
        imgSrc: burgerImg,
        category: ['food'],
        color: ['orange']
    },
    {
        name: 'Sun',
        description: '',
        price: '',
        imgSrc: sunImg,
        category: ['space'],
        color: ['red', 'orange']
    },
    {
        name: 'Earth',
        description: '',
        price: '',
        imgSrc: earthImg,
        category: ['space'],
        color: ['blue', 'green', 'white']
    },
    {
        name: 'Snowman',
        description: '',
        price: '',
        imgSrc: snowmanImg,
        category: [],
        color: ['white']
    },
    {
        name: 'Patrick',
        description: 'The best character in Bikini Bottom.',
        price: '',
        imgSrc: patrickImg,
        category: ['tv'],
        color: ['pink', 'green', 'purple', 'red']
    },
    {
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
                        {products.map(function (product, index) {
                            return (
                                <ProductItem
                                    key={index}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    imgSrc={product.imgSrc}
                                />
                            )
                        })}
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '9px' }}>~</p>
                    <p>Maecenas dignissim hendrerit arcu, viverra gravida arcu sodales vitae. In hac habitasse platea dictumst. Ut rutrum iaculis tortor vehicula dapibus. Fusce volutpat tortor ac ipsum lobortis, a pharetra lorem laoreet.</p>
                    <p>Curabitur eu eros interdum, vestibulum massa ac, mattis dui. Mauris quis tincidunt ex. Cras vehicula risus in dui porttitor, eget pharetra magna pharetra. Nulla facilisi. Nullam tincidunt ligula arcu, at ornare mauris semper et. Donec neque purus, dapibus nec nisi in, facilisis posuere metus. Maecenas vestibulum, dui et lacinia convallis, nulla sem pharetra enim, id luctus nisl ipsum a ligula. Nunc neque velit, dignissim non efficitur eu, eleifend sed nibh. Pellentesque magna elit, lobortis sit amet condimentum a, bibendum vitae mauris.</p>
                    <p>Vivamus sed nisl lorem. Donec vulputate tellus at nisi ullamcorper, vel maximus enim porta. Maecenas mattis ultricies velit sed eleifend. Quisque nec sollicitudin lorem. Nam nec felis justo. Maecenas eu diam nec libero elementum dictum.</p>
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
