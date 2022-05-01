import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';
import Modal from 'react-modal';

function BackendNewsForm({backendList}) {
    const [buttonModal, setButtonModal] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formId, setFormId] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formText, setFormText] = useState("");
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    function closeModal() {
        setModalIsOpen(false);
        setButtonModal(true);
    }

    const openModal = (id, title, text) => {
        setModalIsOpen(true);
        setButtonModal(false);
        setFormId(id);
        setFormTitle(title);
        setFormText(text);
    }

    const editNews = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');

        const putData  = {
            id: formId,
            title: formTitle,
            text: formText
        };

        fetch('http://localhost:4000/backend/editnews',
        {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify(putData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 220 || data.status === 550) {
                setFormMsg(data.message);
                setFormClassValidation("msg__error");
                return;
            }

            setFormMsg(data.message);
            setFormClassValidation("msg__ok");
        })
        .catch(e => {
            setFormMsg(e);
            setFormClassValidation("msg__error");
        })
        .finally(()=>{
            setStarLoading(false);
        })
    }

    const deleteNews = (id, value) => {
        let token = sessionStorage.getItem('token');

        const putData  = {
            id: id
        };

        fetch('http://localhost:4000/backend/deletenews',
        {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify(putData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 220 || data.status === 550) {
                setFormMsg(data.message);
                setFormClassValidation("msg__error");
                return;
            }

            setFormMsg(data.message);
            setFormClassValidation("msg__ok");
        })
        .catch(e => {
            setFormMsg(e);
            setFormClassValidation("msg__error");
        })
        .finally(()=>{
            setStarLoading(false);
        })
    }

    const contentCard =
        <>
            <form onSubmit={editNews} className="form">
                <input type="text" className="form__input" placeholder="Title*" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} required />
                <textarea value={formText} onChange={(e) => setFormText(e.target.value)} />
                <button className={"btn__button"}>modificar &rarr;</button>
            </form>
        </>;

    return (
        <>
            <div className='backend__table'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        backendList.length === 0 ? '' :
                        backendList[1].news.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td style={{textAlign: "center"}}>{value.id}</td>
                                    <td style={{minWidth: "90px"}}>{value.title}</td>
                                    <td>{value.text}</td>
                                    <td style={{textAlign: "center"}}><a onClick={(e) => openModal(value.id,value.title,value.text)}><i className="fas fa-edit"></i></a><a onClick={(e) => deleteNews(value.id, e)}><i className="fas fa-trash"></i></a></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

            {
                formMsg !== "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
            }

            <span className='loading'>
                <Loader color={color} loading={starLoading} />
            </span>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Example Modal">
                <div className="modal_content modal__backend">
                    <h2 className="h2__heading">Edit - News</h2>
                    <button className="closeModal" onClick={closeModal}><i className="fas fa-times"></i></button>
                    {contentCard}
                    {
                        formMsg !== "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
                    }
                </div>
            </Modal>
        </>
    );
}

export default BackendNewsForm;