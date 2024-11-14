import React from 'react'
import { useState } from "react";
import Sidebar from '../components/Sidebar'
import SidebarCalendar from "../components/SidebarCalendar";
import EmailInput from "../components/EmailInput";

const crtmeet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agenda, setAgenda] = useState(["안건 1: 제주항공 콜라보 마케팅 전략", "안건 2"]);

  const handleAddAgenda = () => {
    const newAgenda = prompt("새 안건을 입력하세요");
    if (newAgenda) {
      setAgenda([newAgenda, ...agenda]);
      setIsModalOpen(false); // 버튼을 클릭하면 모달 닫기
    }
  };
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
    <div className="bg-primary p-4 text-white w-25">Create Meeting</div>

      



    <div className="w-[60%] flex flex-col justify-center items-center p-4 bg-gray-50">

      <div className="grid grid-cols-1 gap-6 w-full max-w-screen-xl">



      <div className="mb-4 flex space-x-4 items-center">

        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
          안건 추가
        </button>

        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
          안건 편집
        </button>
      </div>


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
        </div>


        <div className="bg-white p-6 rounded-lg shadow-lg h-full max-w-[100%]">
          <h3 className="text-xl font-semibold"><span className="bg-blue text-white rounded-lg p-1"> 안건 1-1</span> 제주항공 제이샵 매출분석</h3>
          <p className="text-gray-600 mt-4">
            제주항공 제이샵은 제주항공이 운영하는 온라인 쇼핑몰로, 항공 여행과 관련된 다양한 상품을 판매하고 있습니다. 
            최근 몇 년간 매출 성장률이 높았으며, 특히 <strong>항공권 예약과 연계된 상품</strong>이 큰 인기를 끌고 있습니다. 
            제이샵의 매출 성장은 <strong>제주항공의 핵심 수익원</strong> 중 하나로 자리 잡고 있으며, 향후 매출 확대를 위한 다양한 전략이 필요합니다.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray p-4 w-[25vw] flex">
    <div className="p-4 flex flex-col gap-4">
    <h1 className="text-xl font-bold mb-4">Schedule</h1>
          {/* 달력 컴포넌트 */}
          <SidebarCalendar />
    <h1 className="text-xl font-bold mb-4">Invitation</h1>
          {/* 이메일 입력 컴포넌트 */}
          <EmailInput />
        </div>
      </div>
    </div>
      
  );
}

export default crtmeet