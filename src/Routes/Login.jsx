import React from "react"

const Login = () => {
    const [cep, setCep] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [err, setErr] = React.useState(null);
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    const validaNome = (value) => {
        if (value.length === 0) {
            setErr("O nome não pode estar vazio")
            return;
        } else if (!isNaN(value)) {
            setErr('Nome invalido')
            return;
        } else {
            setErr(null)
            return;
        }
    }

    const validaSenha = (value) => {
        if (value.length === 0) {
            setErr("A senha não pode ser vazia")
            return;
        } else if (value.length < 8) {
            setErr('A senha precisa ter mais de 8 digitos!')
            return;
        } else {
            setErr(null)
            return;
        }
    }

    const validaEmail = (value) => {
        if (value.length === 0) {
            setErr("O email não pode ser vazio")
            return;
        } else if (!emailRegex.test(value)) {
            setErr('O email não segue o modelo!')
            return;
        } else {
            setErr(null)
            return;
        }
    }

    const validaCep = (value) => {
        if (value.length === 0) {
            setErr("O CEP não pode estar vazio")
            return;
        } else if (!/\d{5}-\d{3}/.test(value)) {
            setErr('CEP invalido')
            return;
        } else {
            setErr(null)
            return;
        }
    }

    function nameBlur({ target }) {
        validaNome(target.value);
    }

    function senhaBlur({ target }) {
        validaSenha(target.value);
    }

    function cepBlur({ target }) {
        validaCep(target.value);
    }

    function emailBlur({ target }) {
        validaEmail(target.value);
    }

    return (<>
        <form>
            <label htmlFor="nome">Nome</label>
            <input value={nome} type="text" id="nome" onChange={({ target }) => setNome(target.value)} onBlur={nameBlur} />

            <label htmlFor="senha">Senha</label>
            <input value={senha} type="text" id="senha" onChange={({ target }) => setSenha(target.value)} onBlur={senhaBlur} />

            <label htmlFor="email">Email</label>
            <input value={email} type="text" id="email" onChange={({ target }) => setEmail(target.value)} onBlur={emailBlur} />

            <label htmlFor="cep">CEP</label>
            <input value={cep} type="text" id="cep" onChange={({ target }) => setCep(target.value)} onBlur={cepBlur} />
            

            <button>enviar</button>
            {err && <p>{err}</p>}
        </form>

    </>
    )
}
export default Login;