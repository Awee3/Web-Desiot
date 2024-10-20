import Logo from './assets/elevator-logo.svg'

function App() {
  return (
    <>
    <main className="bg-[#161618] h-screen overflow-clip p-6">
      <div className="w-full h-fit bg-[#363639] text-center rounded-[10px] place-items-center flex justify-center">
        <img src={Logo} className="w-[35px] h-[35px]" alt="" />
        <h1 className="font-bold text-white p-3 text-base">Elevator's Dashboard</h1>
      </div>
      <div className="grid w-full min-h-[682px] mt-4">
        <div className="flex justify-between w-full">
          <div className="w-[530px] h-[380px] rounded-[20px] bg-[#363639] text-center">
            <p className='text-white mt-2 font-extralight'>Real Time Weight</p>
          </div>

          <div className="w-[530px] h-[380px] rounded-[20px] bg-[#363639] text-center">
            <p className='text-white mt-2 font-extralight'>Status of Elevator</p>
          </div>

          <div className="w-[530px] h-[380px] rounded-[20px] bg-[#363639] text-center">
            <p className='text-white mt-2 font-extralight'>Recommended Maintenance</p>
          </div>
        </div>

        <div className="w-full h-[360px] rounded-[20px] bg-[#363639] mt-6 text-center">
          <p className='text-white mt-2 font-extralight'>Graph</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
