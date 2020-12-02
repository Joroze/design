import './Menu.scss';

function Menu({ headerItem, items, colored }) {
    return (
        <div className="component-menu">
            <nav>
                <ul>
                    {headerItem &&
                        <li className={colored ? 'colored' : null}>
                            <h2>
                                {headerItem.link
                                    ? <a href={headerItem.link}>{headerItem.text}</a>
                                    : headerItem.text
                                }
                            </h2>
                        </li>
                    }
                    {items.map((item, index) => (
                        <li key={index}>
                            {colored && <div className='square' style={{ backgroundColor: item }} />}
                            <a href='#'><span>{item}</span></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
