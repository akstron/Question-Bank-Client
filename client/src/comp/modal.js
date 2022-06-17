import '../styles/showquestion.css'

const Modal = ({onPositiveClick, onNegativeClick, content, positiveText, negativeText, id, onCloseClick}) => {

    return (
        <div id={id} class="modal-window">
            <div>
                <button onClick={onCloseClick} title="Close" class="modal-close">Close</button>
                <h4>{content}</h4>
                <div>
                    <button className='btn' onClick={onPositiveClick} >
                        {positiveText}
                    </button>
                    <button className='btn' onClick={onNegativeClick} >
                        {negativeText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;