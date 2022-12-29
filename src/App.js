import { useState } from "react";
import React  from "react";


function App () {

    const [count, setCount] = useState(3);
    const [count1, setCount1] = useState(9);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [texterae, setTextarea] = useState("");

    const handle= (event)=>{
        event.preventDefault();
        setTextarea(event.target.value);

    }
    return(
        <div className="App">
            <p>{count}</p>
            <p>{count1}</p>
            <button onClick={()=>{
                setCount( c=> c + 1);
                setCount1(a => a + 1)}
                }>+</button>
                <br/>
                <input type='email' onChange={(e) =>setEmail(e.target.value)} placeholder='email' value={email}/>
                <br/>
                <input type='password' onChange={(e) =>setPassword(e.target.value)} placeholder='password' value={password}/>
                 
                 <textarea onChange={handle}></textarea>
                 <p>{email}</p>
                 <p>{password}</p>
                 <p>{texterae}</p>
        </div>
    )
}
export default App