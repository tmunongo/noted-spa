type Props = {}

const LoginForm = (props: Props) => {
  return (
    <div>
      <form className="card rounded border-gray-300 border-2 p-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Username?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password?</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="my-6">
          <button className="btn btn-neutral">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
