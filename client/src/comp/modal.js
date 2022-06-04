import '../styles/showquestion.css'

const Modal = ({onPositiveClick, onNegativeClick, content, positiveText, negativeText, id}) => {

    return (
        <div id={id} class="modal-window">
            <div>
                <a href="#" title="Close" class="modal-close">Close</a>
                <h4>{content}</h4>
                <div>

                    <button className='btn' onClick={onPositiveClick} >
                        {positiveText}
                    </button>
                    {onNegativeClick ? 
                    <button className='btn' onClick={onNegativeClick} >
                        {positiveText}
                    </button> : 
                    <a className='btn' href='#'>
                        {negativeText}
                    </a> }

                </div>
            </div>
        </div>
    )
}

export default Modal;