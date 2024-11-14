import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Meeting = () => {
  const [agendas, setAgendas] = useState([
    {
      title: "안건 1: 제주항공 콜라보 마케팅 전략",
      content: "제주항공은 최근 여러 브랜드와의 콜라보를 통해 새로운 고객층을 타겟으로 한 마케팅 전략을 펼치고 있습니다. 이번 전략에서는 여행 관련 제품과 브랜드를 함께 결합하여 상호 이득을 창출하는 것을 목표로 하고 있습니다.",
    },
    {
      title: "안건 1-1: 제주항공 제이샵 매출분석",
      content: "제주항공 제이샵은 제주항공이 운영하는 온라인 쇼핑몰로, 항공 여행과 관련된 다양한 상품을 판매하고 있습니다. 최근 몇 년간 매출 성장률이 높았으며, 특히 항공권 예약과 연계된 상품이 큰 인기를 끌고 있습니다.",
    },
  ]);

  const handleAddAgenda = () => {
    const newAgenda = {
      title: "새로운 안건",
      content: "새로운 안건의 내용이 여기에 들어갑니다.",
    };
    setAgendas([...agendas, newAgenda]);
  };

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary p-4 text-white w-25">Meeting progress
      </div>

      <div className="w-[40%] flex flex-col justify-center items-center p-4 bg-gray-50">
        <div className="grid grid-cols-1 gap-6 w-full max-w-screen-xl">
          <h1 className="p-4 text-xl font-bold mb-4">Agenda</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg h-full max-w-[100%]">
          <h3 className="text-xl font-semibold">
            <span className="bg-blue text-white rounded-lg p-1"> 안건 1</span> 제주항공 콜라보 마케팅 전략
          </h3>
          <p className="text-gray-600 mt-4">
            제주항공은 최근 여러 브랜드와의 콜라보를 통해 새로운 고객층을 타겟으로 한 마케팅 전략을 펼치고 있습니다. 
            이번 전략에서는 <strong>여행 관련 제품</strong>과 <strong>브랜드</strong>를 함께 결합하여 상호 이득을 창출하는 것을 목표로 하고 있습니다.
          </p>
          <p className="mt-4 text-gray-600">
            이 전략을 통해 제주항공은 <strong>브랜드 인지도</strong>와 <strong>고객 충성도</strong>를 높이고, 다양한 브랜드와의 협력을 통해 상호 이득을 창출하고 있습니다.
          </p>
        <br></br><br></br>
          <h3 className="text-xl font-semibold"><span className="bg-blue text-white rounded-lg p-1"> 안건 1-1</span> 제주항공 제이샵 매출분석</h3>
          <p className="text-gray-600 mt-4">
            제주항공 제이샵은 제주항공이 운영하는 온라인 쇼핑몰로, 항공 여행과 관련된 다양한 상품을 판매하고 있습니다. 
            </p>
            <p className="text-gray-600 mt-4">
            최근 몇 년간 매출 성장률이 높았으며, 특히 <strong>항공권 예약과 연계된 상품</strong>이 큰 인기를 끌고 있습니다. 
            제이샵의 매출 성장은 <strong>제주항공의 핵심 수익원</strong> 중 하나로 자리 잡고 있으며, 향후 매출 확대를 위한 다양한 전략이 필요합니다.
          </p>
        </div>
        </div>
      </div>
      

      <div className="grid grid-cols-1 w-[40%] place-items-center mx-auto">
  {/* 개별 자료 열람 (이미지 카드들) */}
  <div className="w-[100%] p-4 bg-gray-100">
  <h2 className="text-xl font-semibold mb-4">개별 자료 열람</h2>

  <div className="overflow-x-auto scrollbar-hidden p-6 shadow-lg rounded-lg">
    {/* 이미지들을 가로로 스크롤 할 수 있는 컨테이너 */}
    <div className="flex space-x-4">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="w-[200px] h-[200px] bg-white flex-shrink-0">
          {/* 카드 안에 이미지를 표시 */}
          <img
            src={`/images/${index}.png`} // public/images/1.png, 2.png, 3.png, 4.png
            alt={`자료 ${index}`}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
</div>

  {/* AI 리서치 (ChatGPT UI 스타일) */}
  <div className="w-[100%] p-4 bg-gray-200 mt-2"> {/* 여기에 mt-2로 간격을 줄임 */}
    <h2 className="text-xl font-semibold mb-4">AI 리서치</h2>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg"
          placeholder="여기에 질문을 입력하세요..."
          rows="4"
        ></textarea>
      </div>
      <button className="mt-2 px-4 py-2 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
        AI 리서치 시작
      </button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Meeting;
