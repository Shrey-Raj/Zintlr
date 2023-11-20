import React, { useMemo, useState } from "react";
import { Button, Checkbox, Divider, Tabs, Space, Select , Flex} from "antd";
import Chart from "./HorizontalChart";
import ColumnChart from "./ColumnChart";


//data for the graph 
var series = [
  {
    name: "Trasaction Amount",
    data: [30,112,45,56,33,53],
  },
  {
    name: "Earnings",
    data: [35, 41, 36, 26, 45,42],
  },
] ; 

const operations = (
  <Space>
    <Button className="border-black bg-slate-100 font-semibold">
      Past Week
    </Button>
    <Button className="bg-black text-white font-semibold">Past Month</Button>
    <Button className="border-black bg-slate-100 font-semibold">
      All Time
    </Button>
  </Space>
);

const labels = ["Activity", "Stock", "Volume"];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: <span className="font-semibold font-serif">{labels[i]}</span>,
    key: id,
    // children: `Content of tab ${id}`,
  };
});
const App = () => {
  return (
    <>
      <div className="whole-section flex mt-4">
        <div className="bar-chart w-2/3">
          <p className="font-semibold text-md">Consumer Analysis</p>
          <Tabs tabBarExtraContent={operations} items={items} />
          <Space
            style={{
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Space wrap>
              <Select
                defaultValue="All Associates"
                style={{
                  width: "auto",
                  border: "1px solid black",
                  borderRadius: "6px",
                }}
                options={[
                  {
                    value: "all",
                    label: <p className="text-xs">All Associates</p>,
                  },
                  {
                    value: "associate1",
                    label: <p className="text-xs">Associate 1</p>,
                  },
                  {
                    value: "associate2",
                    label: <p className="text-xs">Associate 2</p>,
                  },
                ]}
              />
            </Space>

            <Space wrap>
              <Select
                defaultValue="Filter by Zone"
                style={{
                  width: "auto",
                  border: "1px solid black",
                  borderRadius: "6px",
                }}
                options={[
                  {
                    value: "all",
                    label: <p className="text-xs">All Zones</p>,
                  },
                  {
                    value: "zone 1",
                    label: <p className="text-xs">Zone 1</p>,
                  },
                  {
                    value: "zone 2",
                    label: <p className="text-xs">Zone 2</p>,
                  },
                ]}
              />
            </Space>
          </Space>
          <Chart />
        </div>

        {/* <Space className="orange-bar-chart mt-1 w-1/3">
        <div className="flex flex-col">
          <p className="font-semibold font-serif text-left p-4">5 Greatest Transactions</p>

          <Space className="flex justify-between">
            <Button className="border-black font-semibold bg-slate-100">
              Past Week
            </Button>
            <Button className="border-black font-semibold bg-black text-white">
              Past Year
            </Button>
            <Button className="border-black font-semibold bg-slate-100">
              All Time
            </Button>
          </Space>
</div>
          <ColumnChart height="350"/>
        </Space> */}

        <div className="bg-white overview-right w-1/3">

      <Flex justify="space-between" className="p-5">
        <p className="font-semibold font-serif">5 Greatest Transactions</p>
       

      </Flex>                    

        <Space className="flex justify-center">
          <Button className="border-black font-semibold bg-slate-100">Past Week</Button>
          <Button className="border-black font-semibold bg-black text-white">Past Year</Button>
          <Button className="border-black font-semibold bg-slate-100">All Time</Button>
        </Space>

        <ColumnChart height="250" series={series}  
         barColors={["#F86F03","#525FE1"]}/> 

      </div>
      </div>
    </>
  );
};
export default App;
