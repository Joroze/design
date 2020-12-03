import './Menu.scss';

import PropTypes from 'prop-types';


import Button from 'components/Button/Button'

function Menu({ headerItem, multiselect, items, colored, onClick, selected }) {
    return (
        <div className="component-menu">
            <nav>
                <ul>
                    {headerItem &&
                        <li className={colored ? 'colored' : null}>
                            <h2>
                                {headerItem.clickable
                                    ? <Button borderless onClick={(e) => onClick(e, headerItem.text)}>{headerItem.text}</Button>
                                    : headerItem.text
                                }
                            </h2>
                        </li>
                    }
                    {items.map((item, index) => {
                        const isSelected = item in selected;

                        return (
                            <li key={index} className={isSelected ? 'selected' : ''}>
                                {colored && <div className='square' style={{ backgroundColor: item }} />}
                                <Button borderless onClick={(e) => onClick(e, item)}><span>{item} {isSelected && '(x)'}</span></Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

Menu.defaultProps = {
    selected: {}
}

Menu.propTypes = {
    headerItem: PropTypes.object,
    multiselect: PropTypes.bool,
    items: PropTypes.array,
    colored: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.object
};

export default Menu;
