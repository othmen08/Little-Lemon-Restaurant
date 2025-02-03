import Form from "../components/Form";
import Hero from "../components/Hero";
import "../pages/Login.css"
function Login() {
  return (
    <>
        <section>
            <Hero />
        </section>
        <section className="login">
      <Form/>
      </section>
      </>
    
  );
}

export default Login;
