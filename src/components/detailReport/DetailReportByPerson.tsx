import React from "react";

const DetailReportByPerson = ({ isShow }: { isShow: boolean }) => {
  return (
    <div
      className={`bg-white h-[100vh] w-1/2 absolute right-0 top-0 transition-all py-6 px-4 ${
        isShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <h1 className=" font-bold text-xl mb-2">SLA Detail</h1>

        <div className=" px-3 py-1 border rounded-lg">Range Picker</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h1 className="font-semibold text-sm">Avg Claim Time</h1>
          <p className="">3h 14m</p>
        </div>
        <div>
          <h1 className="font-semibold text-sm">Avg Claim Time</h1>
          <p className="">3h 14m</p>
        </div>
      </div>

      <div className="w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className=" bg-gray-100 font-normal border-y-2 text-sm">
              <th className="py-2 text-left">Vendor/debitur</th>
              <th className="py-2 text-right">Claim Time</th>
              <th className="py-2 text-right">Review Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
            <tr className=" border-b-2">
              <td>
                <div>
                  <p>Asoka Jaya</p>
                  <div>
                    <p>981/2AB/21039 - Extend</p>
                  </div>
                </div>
              </td>
              <td className="text-right">-</td>
              <td className="text-right">3h 14m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailReportByPerson;
