import './Button.scss';

function Button({ content, borderless, inactive, children, onClick, ...rest }) {
    return (
        <button
            className={`component-button${borderless ? ' borderless' : ''}${inactive ? ' inactive' : ''}`}
            onClick={inactive ? null : onClick}
            {...rest}
        >
            {children || content}
        </button>
    );
}

export default Button;
