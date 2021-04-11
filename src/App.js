import {Button, Container, Input, InputGroup, InputGroupAddon} from "reactstrap";
import "./App.css"
import {useEffect, useState} from "react";

function App() {

    const [newTodo, setNewTodo] = useState("");
    const [editValue, setEditValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(todos);
    }, [todos])

    return (
        <Container>
            <InputGroup style={{marginTop: "10px"}}>
                <Input  invalid={!!error} value={newTodo} onChange={(e) => {
                    setError(null);
                    if (e.target.value.length < 20){
                        setNewTodo(e.target.value);
                    }
                }}
                       placeholder="Название дела"/>
                <InputGroupAddon addonType={"append"}>
                    <Button onClick={() => {
                        if (todos.findIndex(v => v.name === newTodo) === -1) {
                            setTodos(prev => prev.concat({name: newTodo, checked: false}));
                        } else {
                            setError("Такое дело уже есть")
                        }
                    }} style={{
                        backgroundColor: "#3a62fb"
                    }}>+</Button>
                </InputGroupAddon>
            </InputGroup>
            {error && <span style={{
                color: "red",
                fontSize: "12px"
            }}>{error}</span>}
            <div style={{
                marginTop: "10px"
            }}>
                {
                    todos.sort((a, b) => {
                        if (!a.checked && b.checked) {
                            return 1;
                        }
                        if (a.checked && !b.checked) {
                            return -1;
                        }
                        return a.name.localeCompare(b.name);
                    }).map((t, i) => (<div style={{
                        display: "grid",
                        justifyItems: "center",
                        alignItems: "center",
                        gridTemplateColumns: "50px auto 50px 50px",
                        width: "100%",
                        minHeight: "80px",
                        borderBottom: "1px solid rgb(0, 0, 0, 0.2)",
                        borderTop: "1px solid rgb(0, 0, 0, 0.2)"
                    }}>
                        <div className={"round"} style={{justifySelf: "flex-start"}}>
                            <input checked={t.checked}
                                   onChangeCapture={() => setTodos(prev => prev.map((k, index) => k.name === t.name ? {
                                       ...k,
                                       checked: !k.checked
                                   } : k))} id={`${i}`} type={"checkbox"}/>
                            <label htmlFor={`${i}`}></label>
                        </div>
                        {
                            t.name === edit ? <Input placeholder={"Введите новое значение"} value={editValue}
                                                     onChange={(e) => {
                                                         if (e.target.value.length < 20) {
                                                             setEditValue(e.target.value)
                                                         }
                                                     }}/> :
                                <div>{t.name}</div>
                        }
                        {
                            t.name === edit ? <ApproveButton approve={() => {
                                setTodos(prev => prev.map((k, index) => k.name === t.name ? {
                                    ...k,
                                    name: editValue
                                } : k));
                                setEdit(null);
                            }}/> : <EditButton edit={() => {
                                setEdit(t.name);
                                setEditValue(t.name);
                            }}/>
                        }
                        <Button close onClick={() => {
                            if (t.name === edit) {
                                setEdit(null);
                                setEditValue("");
                            } else {
                                setTodos(prev => prev.filter(k => k.name !== t.name));
                            }
                        }
                        }/>
                    </div>))
                }
            </div>
        </Container>
    );
}

const EditButton = ({edit}) => {
    const [hover, setHover] = useState(false);

    return (<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 width={"40%"}
                 height={"40%"}
                 viewBox="0 0 348.882 348.882">
        <g opacity={hover ? "1" : "0.7"} >
            <foreignObject x="0px" y="0px"
                           width={"100%"}
                           height={"100%"} >
                <div
                    onClick={() => edit()}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                        cursor: "pointer"
                }}></div>
            </foreignObject>
            <path d="M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231
		c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685
		c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176
		C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99
		L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386
		c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"/>
            <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904
		c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15
		s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798
		c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"/>
        </g>
    </svg>)
}

const ApproveButton = ({approve}) => {
    const [hover, setHover] = useState(false);

    return (<svg id="Capa_2" height="40%" viewBox="0 0 512 512" width="40%" xmlns="http://www.w3.org/2000/svg">
        <g opacity={hover ? "1" : "0.7"} >
            <foreignObject x="0px" y="0px"
                           width={"100%"}
                           height={"100%"} >
                <div
                    onClick={() => approve()}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer"
                    }}></div>
            </foreignObject>
            <path d="m450.585 68.552-252.065 252.065-137.105-137.104-61.415 61.415 198.52 198.52 313.48-313.48z"/>
        </g>
    </svg>)
}

export default App;
