import { useState } from 'react';
import Modal from 'react-modal';
import PartnerForm from '../forms/PartnerForm';

import cardPictureA from './../../assets/img/dog-partner-3.jpg';
import cardPictureB from './../../assets/img/dog-partner-4.jpg';

const PartnerCard = (props) => {
    const [buttonModal, setButtonModal] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
        setButtonModal(false);
    }

    function closeModal() {
        setModalIsOpen(false);
        setButtonModal(true);
    }

    let backgroundImage = '';
    if(props.number === 1) {
        backgroundImage = `linear-gradient(to right bottom, #e48e38, #CD7F32),url(${cardPictureA})`;
    } else if(props.number === 2) {
        backgroundImage = `linear-gradient(to right bottom, #D4AF37, #eec53d),url(${cardPictureB})`;
    } else {
        backgroundImage = `linear-gradient(to right bottom, #b4b4b4, #C0C0C0),url(${cardPictureA})`;
    }

    const customStyles = {
        content: {
            backgroundColor: 'transparent',
            backgroundImage: `${backgroundImage}`
        },
    };
    
    const contentCard =
        <>
            <h4 className="card__heading">
                <span className={"card__heading-span--" + props.number}>{props.title}</span>
            </h4>
            <div className="card__details">
                <ul>
                    <li>Aparces en la secci&oacute;n sponsor</li>
                    <li>Aparces en la p&aacute;gina sponsor</li>
                    <li>Corona en la foto <i className={"fas fa-crown " + props.type}></i></li>
                    {
                        props.type === 'silver' || props.type === 'gold' ? <li>Prioridad en resultados</li> : ''
                    }
                    {
                        props.type === 'gold' ? <li>Landing page personalizada</li> : ''
                    }
                    <li>Precio: USD{props.price}</li>
                    {buttonModal && (<button className="btn__button" onClick={openModal}>Unirse</button>)}
                </ul>
            </div>
        </>;

    return (
        <div className={"partners__card partners__card--" + props.number}>
            <div className={"card__picture card__picture--" + props.number}>
                &nbsp;
            </div>
            {contentCard}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false} contentLabel="Example Modal">
                <div className="modal_content">
                    {contentCard}
                    <button className="closeModal" onClick={closeModal}><i className="fas fa-times"></i></button>
                    <PartnerForm title={props.title} price={props.price} number={props.number}/>
                </div>
            </Modal>
        </div>
    );
}

export default PartnerCard;