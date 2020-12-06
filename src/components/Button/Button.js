import './Button.scss';

function Button({ content, onClick, borderless, children, disabled }) {
    return (
        <button
            className={`component-button ${borderless ? 'borderless' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children || content}
        </button>
    );
}

export default Button;
