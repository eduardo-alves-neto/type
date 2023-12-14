import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const history = useNavigate();

    const handlerClik = () =>{
        history("/");

    }

    const [email, setemail] = useState("");

    const handlerOpen = () =>{

        console.log(email)

    }

    handlerOpen();

    
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          width: 300,
          padding: "10px",
        }}
      >
        <label style={{ marginBottom: "10px" }}>
            <span>NOME:</span>
          
          <input placeholder="PEDRO" type="text" required value={email} onChange={e => setemail(e.target.value)}/>
        </label>
        <label>
          <span>SENHA:</span>
          <input placeholder="13#$!@" type="password" required/>
        </label>
        <button type="button" onClick={handlerOpen}>entrar</button>
      </div>
      <button onClick={handlerClik}>voltar</button>
    </>
  );
};
