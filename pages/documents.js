import React from 'react'
import Sidebar from '../components/Sidebar'

const documents = () => {
  return (

    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary p-4 text-white w-25">View Documents</div>
    


      
    <div className="grid grid-cols-4 grid-rows-2 gap-1 p-4 justify-items-center items-center h-screen">
      {/* 첫 번째 이미지와 수정 버튼 */}
      <div className="w-full max-w-[288px] flex flex-col items-center">
        <img src="/images/1.png" alt="Image 1" className="w-full h-auto rounded-lg" />
        <div className="grid grid-cols-2 grid-rows-1 gap-4 justify-items-center items-center">
        <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          열람
        </button>
        <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          수정
        </button>
        </div>
      </div>

      {/* 두 번째 이미지와 열람 버튼 */}
      <div className="w-full max-w-[288px] flex flex-col items-center">
        <img src="/images/2.png" alt="Image 2" className="w-full h-auto rounded-lg" />
        <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          열람
        </button>
      </div>

      {/* 세 번째 이미지와 열람 버튼 */}
      <div className="w-full max-w-[288px] flex flex-col items-center">
        <img src="/images/3.png" alt="Image 3" className="w-full h-auto rounded-lg" />
        <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          열람
        </button>
      </div>

      {/* 네 번째 이미지와 열람 버튼 */}
      <div className="w-full max-w-[288px] flex flex-col items-center">
        <img src="/images/4.png" alt="Image 4" className="w-full h-auto rounded-lg" />
        <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          열람
        </button>
      </div>
    </div>
    </div>
  )
}

export default documents