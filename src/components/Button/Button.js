import './Button.scss';

function Button({ content, borderless, children, ...rest }) {
    return (
        <button
            className={`component-button ${borderless ? 'borderless' : ''}`}
            {...rest}
        >
            {children || content}
        </button>
    );
}

export default Button;
