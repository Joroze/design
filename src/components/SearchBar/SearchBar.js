import './SearchBar.scss';

function SearchBar(props) {
    const {
        value,
        onChange,
        autoFocus,
        onBlur,
        placeholder,
        children
    } = props;

    return (
        <div className='component-search-bar'>
            <input
                // onBlur={onBlur}
                placeholder={placeholder || 'Search'}
                autoFocus={autoFocus}
                value={value}
                onChange={onChange}
            />
            {children}
        </div>
    )
}

export default SearchBar;