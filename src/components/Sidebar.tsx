type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className="w-1/5 bg-dark text-light m-2 p-4 shadow-lg">
      <div>
        <p>User Info</p>
      </div>
      <ul className="m-4 p-4 bg-dark">
        <li>Hello</li>
      </ul>
    </aside>
  )
}

export default Sidebar
