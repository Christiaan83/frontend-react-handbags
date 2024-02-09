import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({disabled, children, handleClick,buttonType}) {
    return (
        <button
          disabled={disabled}
          onClick={handleClick}
          type={buttonType}>
            {children}
        </button>
    );
}

export default Button;