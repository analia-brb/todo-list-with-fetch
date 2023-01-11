import React, {useState} from "react";

const Home = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);


    function handleInput(e) {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if (input.length === 0) {
            alert("Debe ingresar un valor")
        } else {
            setTodos(todos.concat([input]));
        }
    }

    const clickBorrar = () => {
        setTodos([])
    }


    return (
        <div className="container">

            <div className="padding-superior m-auto">
                <h5 className="pb-3">
                    A continuación ingrese su tarea a realizar</h5>
                <div className="input-group mb-3">
                    <button onClick={handleClick}
                        className="btn btn-success"
                        type="button"
                        id="button-addon1">Ingresar Tarea</button>
                    <input onChange={handleInput}
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"/>
                </div>
                <div id="contenedorTodos" className="bg-secondary text-light">
                    {/* <ul> {todos.map((item, index)=> (<li key={index}>{item}</li>))} </ul> */}
                    {
                    todos.map((item, index) => (
                        <div className="row d-flex b-1">
							<div className="col-6">{item}
                            {""}</div>
							<div className="col-6 text-end">
                            <i class="fas fa-trash-alt align-items-end "
                                onClick={
                                    () => setTodos(todos.filter((elementoDiv,currentIndex) => index != currentIndex))
                            }></i>
							</div>
							</div>                        
                    ))
                } </div>
                <div id="contadorTodos">
                    <p>Faltan por realizar {
                        todos.length
                    }
                        &nbsp;tareas</p>
                </div>
                <button onClick={clickBorrar}
                    className="btn btn-warning"
                    type="button"
                    id="button-addon1">Borrar Todo</button>
            </div>
        </div>
    );
};

export default Home;
