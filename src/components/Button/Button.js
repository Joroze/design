import './Button.scss';

function Button({ content, borderless, inactive, children, onClick, icon, ...rest }) {
    return (
        <button
            className={`component-button${borderless || icon ? ' borderless' : ''}${inactive ? ' inactive' : ''}`}
            onClick={inactive ? null : onClick}
            {...rest}
        >
            {icon} {children || content}
        </button>
    );
}

export default Button;
