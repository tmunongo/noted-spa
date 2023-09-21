import LoginForm from "../../components/LoginForm"

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <h1 className="text-xl text-center">Log In</h1>
      <LoginForm />
    </div>
  )
}

export default Login
