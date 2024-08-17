import { Header } from "../Header/Header";
import { Label } from "../Label";

export const Login = ({ children }: any) => {
    return (
        <main>
            <section className="section_main">
                <div className="section__header">
                    <Header />
                </div>

                <div className="section__info__logar">
                    <h1 className="section__title">
                        Acesse a plataforma
                    </h1>

                    <p>
                        Faça login ou registre-se para começar a construir seus projetos
                        ainda hoje.
                    </p>
                </div>

                <div className="section__formulario">
                    <form>
                        <Label text="Email" htmlFor="email" />
                        <input
                            id="email" 
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                        
                        <Label text="Senha" htmlFor="username" />
                        <input 
                            id="senha" 
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        
                        <button>Entrar</button>
                    </form>
                </div>
            </section>
                
            <section>
                <div className="section__img"></div>
            </section>
        </main>
    );
}