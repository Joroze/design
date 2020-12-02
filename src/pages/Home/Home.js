
import './Home.scss';

import Menu from './components/Menu/Menu';
import ProductItem from './components/ProductItem/ProductItem';

import playdohImg from 'assets/images/playdoh.jpg'
import earthImg from 'assets/images/earth.jpg'
import sunImg from 'assets/images/sun.jpg'
import snowmanImg from 'assets/images/snowman.jpg'
import patrickImg from 'assets/images/patrick.jpg'
import burgerImg from 'assets/images/burger.jpg'

const categoriesMenuHeader = {
    text: 'All categories',
    link: '#'
}

const colorMenuHeader = {
    text: 'All colors',
    link: '#'
}

const sortMenuHeader = {
    text: 'Sort',
    link: undefined
}

function Home() {
    return (
        <div className="component-home">
            <div className='container'>
                {/* <Menu
                    name='Categories'
                    items={[
                        'Food'
                    ]} /> */}

                <div className='left-pane desktop-visible'>
                    <Menu
                        headerItem={categoriesMenuHeader}
                        items={[
                            'Accessories',
                            'Animals',
                            'Food',
                            'TV'
                        ]} />

                    <Menu
                        headerItem={colorMenuHeader}
                        colored
                        items={[
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
                            'Grey',
                            'Misc.'
                        ]} />
                </div>

                <div className='inner-container'>
                    <div className='product-list'>
                        <ProductItem img={burgerImg} />
                        <ProductItem img={sunImg} />
                        <ProductItem img={earthImg} />
                        <ProductItem img={snowmanImg} />
                        <ProductItem img={patrickImg} />
                        <ProductItem img={playdohImg} />

                    </div>

                    <p>Maecenas dignissim hendrerit arcu, viverra gravida arcu sodales vitae. In hac habitasse platea dictumst. Ut rutrum iaculis tortor vehicula dapibus. Fusce volutpat tortor ac ipsum lobortis, a pharetra lorem laoreet. Curabitur eu eros interdum, vestibulum massa ac, mattis dui. Mauris quis tincidunt ex. Cras vehicula risus in dui porttitor, eget pharetra magna pharetra. Nulla facilisi. Nullam tincidunt ligula arcu, at ornare mauris semper et. Donec neque purus, dapibus nec nisi in, facilisis posuere metus. Maecenas vestibulum, dui et lacinia convallis, nulla sem pharetra enim, id luctus nisl ipsum a ligula. Nunc neque velit, dignissim non efficitur eu, eleifend sed nibh. Pellentesque magna elit, lobortis sit amet condimentum a, bibendum vitae mauris.</p>
                    <p>Vivamus sed nisl lorem. Donec vulputate tellus at nisi ullamcorper, vel maximus enim porta. Maecenas mattis ultricies velit sed eleifend. Quisque nec sollicitudin lorem. Nam nec felis justo. Maecenas eu diam nec libero elementum dictum. Curabitur fringilla, erat et suscipit blandit, lacus ex tristique lorem, id elementum augue turpis ac orci. Pellentesque rhoncus dolor eget felis suscipit sollicitudin. Sed placerat purus orci, a pellentesque neque commodo vel.</p>
                    <p>Mauris a fringilla arcu. Maecenas magna mauris, maximus non nisl vel, posuere ornare lacus. Duis a massa vulputate, feugiat orci id, lacinia nulla. Mauris at urna nunc. Donec nec dictum nulla. Nam aliquet, quam eget efficitur vestibulum, nisl ex lacinia diam, nec semper nisi metus vel orci. Etiam et augue purus. Fusce consectetur suscipit tempor. Integer vel arcu egestas, finibus leo eu, scelerisque lacus. Praesent convallis tempus est non ornare. Cras eu scelerisque nisi. Morbi vel dictum elit. Duis efficitur, ipsum vitae molestie interdum, odio neque condimentum sapien, ut elementum tellus nisi id nulla. Nam vel purus odio. Donec varius tristique libero, vel ullamcorper sem. Ut nisi tellus, aliquam nec congue ac, rhoncus id velit. Maecenas cursus a nisi ut sollicitudin. Nulla lacinia nunc commodo magna efficitur, et viverra neque vestibulum. Integer efficitur ornare elit eget pharetra. Morbi vehicula mattis pellentesque. Phasellus tellus nunc, fringilla vitae nisl a, euismod vehicula dolor. Quisque non tempus orci, vestibulum vehicula neque.</p>
                </div>

                <div className='right-pane desktop-visible'>
                    <Menu
                        headerItem={sortMenuHeader}
                        items={[
                            'Latest arrivals',
                            'Trending',
                            'Price: Low to high',
                            'Price: High to low',
                            'Sale: Low to high',
                            'Sale: High to low'
                        ]} />
                </div>
            </div>
        </div>
    );
}

export default Home;
