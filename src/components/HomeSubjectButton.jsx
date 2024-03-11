const HomeSubjectButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 m-3 rounded"
    >
      {children}
    </button>
  )
}
export default HomeSubjectButton