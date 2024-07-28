import { Label } from "./Label";
import { Layout } from "./Layout";

export const Login = () => {
    return (
        <Layout>
            <h1>Nexus</h1>
            <div>
                <Label text="Email" htmlFor="email" />
                <input id="email" type="email" />
                <Label text="Senha" htmlFor="username" />
                <input id="senha" type="password" />
                <button>Entrar</button>
            </div>
        </Layout>
    );
}