"use client";
import React from "react";
import { Chart } from "react-google-charts";

const roleData = [
  { role: "Requester", days: 3, color: "#C0C0C0" },
  { role: "Reviewer", days: 2, color: "#90EE90" },
  { role: "Requester", days: 2, color: "#C0C0C0" },
  { role: "Reviewer", days: 3, color: "#90EE90" },
];

export const data = [
  [
    { type: "string", id: "Room" },
    { type: "string", id: "Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  [
    "Magnolia Room",
    "Beginning JavaScript",
    new Date(0, 0, 0, 12, 0, 0),
    new Date(0, 0, 0, 13, 33, 0),
  ],
  [
    "Magnolia Room",
    "Intermediate JavaScript",
    new Date(0, 0, 0, 14, 0, 0),
    new Date(0, 0, 0, 15, 30, 0),
  ],
  [
    "Magnolia Room",
    "Advanced JavaScript",
    new Date(0, 0, 0, 16, 0, 0),
    new Date(0, 0, 0, 17, 30, 0),
  ],
  [
    "Willow Room",
    "Beginning Google Charts",
    new Date(0, 0, 0, 12, 30, 0),
    new Date(0, 0, 0, 14, 0, 0),
  ],
  [
    "Willow Room",
    "Intermediate Google Charts",
    new Date(0, 0, 0, 14, 30, 0),
    new Date(0, 0, 0, 16, 0, 0),
  ],
  [
    "Willow Room",
    "Advanced Google Charts",
    new Date(0, 0, 0, 16, 30, 0),
    new Date(0, 0, 0, 18, 0, 0),
  ],
];

const page = ({ totalDays }: any) => {
  const calculateTimeline = () => {
    const timeline = [
      ["Task", "Role", { type: "string", role: "tooltip" }, "Start", "End"],
      [
        "Request",
        "Requester",
        "Request for 3 days",
        new Date(),
        new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
      ],
      [
        "Review",
        "Reviewer",
        "Review for 2 days",
        new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
        new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
      ],
      [
        "Reupload",
        "Requester",
        "Reupload for 2 days",
        new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      ],
      [
        "Re-review",
        "Reviewer",
        "Review again for 3 days",
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
      ],
      [
        "Approve",
        "Approval",
        "Approval",
        new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
        new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
      ],
    ];

    return timeline;
  };

  return (
    <div className="h-[100vh] w-full">
      test
      <div>
        <h2>Color By Row Label</h2>
        <Chart
          chartType="Timeline"
          data={data}
          width="100%"
          height="400px"
          options={{
            timeline: {
              colorByRowLabel: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default page;
