import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const handleClickLogin = async (values) => {
    try {
      const data = await login(values.email, values.password);
      console.log("Login feito com sucesso", data);
    } catch (error) {
      console.error("Erro no login", error);
    }
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
  });

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleClickLogin}
        validationSchema={validationsLogin}
      >
        <Form>
          <div>
            <Field name="email" placeholder="Email" />
            <ErrorMessage component="span" name="email" />
          </div>
          <div>
            <Field name="password" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
