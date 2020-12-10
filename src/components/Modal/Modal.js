import './Modal.scss';

import PropTypes from 'prop-types';

import Button from 'components/Button/Button'

function Modal({ title, onClose, content, children, className }) {
    return (
        <div className={`component-modal ${className ? className : ''}`} >
            <div className='modal'>
                {onClose && <Button onClick={onClose} borderless content='x' />}
                {title && <div className='modal-header'>{title}</div>}
                {(content || children) &&
                    <div className='modal-content'>
                        {content || children}
                    </div>
                }
            </div>
        </ div>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.any,
    content: PropTypes.string
};

export default Modal;
