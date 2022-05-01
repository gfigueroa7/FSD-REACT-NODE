import './../../assets/login.css';

import Header from "../general/Header";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

function Login() {
    return (
        <>
            <Header mainName="community" subName="login" btnName="" />

            <section className="section__auth">
                <section className="section__login">
                    <h2 className="h2__heading">acceder</h2>
                    <LoginForm />
                </section>

                <section className="section__register">
                    <h2 className="h2__heading">registrarte</h2>
                    <RegisterForm page="login" />
                </section>
            </section>
        </>
    );
}

export default Login;