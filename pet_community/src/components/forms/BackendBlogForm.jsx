import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

function BackendBlogForm({backendList}) {
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    const showHideBlog = (id, view, value) => {
        let token = sessionStorage.getItem('token');

        const putData  = {
            id: id,
            view: view
        };

        fetch('http://localhost:4000/backend/showhideblog',
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

    return (
        <>
            <div className='backend__table'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>View</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        backendList.length === 0 ? '' :
                        backendList[0].blog.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td style={{textAlign: "center"}}>{value.id}</td>
                                    <td style={{minWidth: "90px"}}>{value.title}</td>
                                    <td>{value.text}</td>
                                    <td style={{textAlign: "center"}}>{value.view ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</td>
                                    <td style={{textAlign: "center"}}><a onClick={(e) => showHideBlog(value.id, value.view, e)}>{value.view ? <i title='desaprobar' className="fas fa-thumbs-down"></i> : <i title='aprobar' className="fas fa-thumbs-up"></i>}</a></td>
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
        </>
    );
}

export default BackendBlogForm;