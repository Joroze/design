import './Button.scss';

function Button({ content, onClick, borderless, children }) {
    return (
        <button
            className={`component-button ${borderless ? 'borderless' : ''}`}
            onClick={onClick}
        >
            {children || content}
        </button>
    );
}

export default Button;
