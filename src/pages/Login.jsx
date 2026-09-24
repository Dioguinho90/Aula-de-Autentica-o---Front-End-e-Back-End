import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, LockKeyhole } from "lucide-react";
import { login } from "../services/api";

export default function Login({ setIsAuth, SetUsuarioLogado}) {
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState("");
    const navigate  = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setErro("");

        try {
            const response = await login(usuario, senha);
            localStorage.setItem("token", response.token);
            localStorage.setItem("usuario", JSON.stringify(response.usuario));
            SetUsuarioLogado(response.usuario);
            setIsAuth(true);
            navigate("/sucesso");
        } catch (erro){
            setErro(erro.message);
        }
    }

    return(
        <main className="page-shell">
            <section className="auth-card">
                <div className="brand-icon"><LogIn size={28} /></div>
                <p className="eyebrow">ÁREA RESTRITA</p>
                <h1>Login</h1>
                <p className="suntitle">Entre para acessar a rota protegida.</p>

                <form onSubmit={handleLogin}>
                    <label>
                        Usuário
                        <div className="input-wrap"></div>
                    </label>
                </form>
            </section>
        </main>
    )
}