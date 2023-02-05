import React, {useEffect, useState} from "react";

const Home = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [todosFromapi, setTodosFromapi] = useState([])


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
        deleteTodos()
    }

    useEffect(()=> {
        createTodos()
    }, [])

    useEffect(()=> {
        getTodos()
        updateTodos()
        deleteTodos()
    }, [])

    // Fetch con POST

    function createTodos (){
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/annie`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([])
        })
            .then((response)=> response.json())
            .then((data)=>console-log(todos))

        }

        // Fetch con GET

    function getTodos (){
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/annie`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then((response)=> response.json())
        .then((data)=>setTodosFromapi(data))
    }

    function updateTodos (){
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/annie`,
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([])
        })
            .then((response)=> response.json())
            .then((data)=>console-log(todosFromapi))

        }

        function deleteTodos (){
            fetch(`https://assets.breatheco.de/apis/fake/todos/user/annie`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            })
            .then((response)=> response.json())
            .then((data)=>console.log(data))
        }


    return (
        <div className="container">

            <div className="padding-superior m-auto">
                <h5 className="pb-3">
                    Ingrese su tarea a realizar</h5>
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
