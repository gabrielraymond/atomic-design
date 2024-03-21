"use client";
import DetailReport from "@/components/detailReport/DetailReport";
import DetailReportByPerson from "@/components/detailReport/DetailReportByPerson";
import React, { useState } from "react";

const Report = () => {
  const [isDetail, setIsDetail] = useState<boolean>(true);
  const [isDetailByPerson, setIsDetailByPerson] = useState<boolean>(false);

  const handleOpenDetail = () => {
    setIsDetail((prev) => !prev);
  };

  const handleOpenDetailByPerson = () => {
    setIsDetailByPerson((prev) => !prev);
  };
  return (
    <div className="h-[100vh] relative overflow-hidden bg-slate-500">
      <h1>Report</h1>

      <div>
        <div
          className="px-2 py-1 bg-amber-500 w-fit rounded-lg mb-2"
          onClick={handleOpenDetail}
        >
          By Request
        </div>
        <div
          className="px-2 py-1 bg-amber-500 w-fit rounded-lg"
          onClick={handleOpenDetailByPerson}
        >
          By Person
        </div>
      </div>

      <DetailReport isShow={isDetail} />
      <DetailReportByPerson isShow={isDetailByPerson} />
    </div>
  );
};

export default Report;
