export default function TodoFilter() {
  return (
    <>
      {/* TODOFILTER */}
      <li className='flex justify-between items-center text-xs text-gray-300 px-3 py-2'>
        <h6>5 Items Left</h6>
        <div className='hidden md:flex items-center gap-3'>
          <h6>All</h6>
          <h6>Active</h6>
          <h6>Completed</h6>
        </div>
        <h6>Clear Completed</h6>
      </li>

      <div className='flex items-center gap-3 md:hidden bg-white mt-3 rounded-sm justify-center p-1 text-gray-300 text-xs'>
        <h6>All</h6>
        <h6>Active</h6>
        <h6>Completed</h6>
      </div>
    </>
  );
}
