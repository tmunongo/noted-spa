type Props = {}

const RegistrationForm = (props: Props) => {
  return (
    <div>
      <form className="card rounded border-gray-300 border-2 p-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">First Name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
