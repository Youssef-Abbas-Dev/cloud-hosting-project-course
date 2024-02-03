const pages = [1, 2, 3, 4, 5];

const Pagination = () => {
  return (
    <div className='flex items-center justify-center mt-2 mb-10'>
      <div className="border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition">
        Prev
      </div>
      {pages.map(page =>  (
        <div className="border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition" key={page}>
            {page}
        </div>
      ))}
      <div className="border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition">
        Next
      </div>
    </div>
  )
}

export default Pagination