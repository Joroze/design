import './SearchBar.scss';

function SearchBar(props) {
    const {
        value,
        onChange,
        autoFocus,
        onBlur,
        children
    } = props;

    return (
        <div className='component-search-bar'>
            <input
                onBlur={onBlur}
                autoFocus={autoFocus}
                value={value}
                onChange={onChange}
            />
            {children}
        </div>
    )
}

export default SearchBar;