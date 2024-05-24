import React from "react"

const Login = () => {
    const [cep, setCep] = React.useState('');       
    const [err, setErr] = React.useState(null);

    function validaCep(value){
        if(value.length === 0){
            setErr("O CEP não pode estar vazio")
            return false
        }else if(!/\d{5}-\d{3}/.test(value)){
            setErr('Cep invalido')
        }else{
            setErr(null)
            return true
        }
        
    }

    function handleBlur({target}){
        validaCep(target.value)
    }

    return (<>
        <form>
            <input 
                value={cep} type="text" onChange={({ target }) => setCep(target.value)} onBlur={handleBlur} />
            <button>enviar</button>
            {err && <p>{err}</p>}
        </form>
        
        </>
    )
}
export default Login;