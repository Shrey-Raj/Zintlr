import React from "react";
import { Row, Col, Card, Flex, Space, Button, Select, theme } from "antd";
import {
  TeamOutlined,
  InfoCircleFilled,
  EuroCircleFilled,
  CaretRightFilled,
  WalletFilled,
  FolderOpenTwoTone,
  FolderOpenFilled,
} from "@ant-design/icons";

import ColumnChart from './ColumnChart' ;
import LineChart from './LineChart' ;


//data for the graph 
var series = [
  {
    name: "Revenue",
    data: [30,112,45,56,33,53],
  },
  {
    name: "Transaction Amount",
    data: [35, 41, 36, 26, 45,42],
  },
] ; 

const ConsumerOverview = () => {
  return (
    <div className=" overview-parent flex">
      <div 
      // style={{ border: "2px solid cyan" }} 
      className="overview-left w-2/3">
        <Flex
          justify=""
          // style={{ border: "2px solid red" }}
          className=""
        >
          <Col
            className="items-center w-1/3 rounded bg-blue-100"
            // style={{ background: "#e7dff4 " }}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              style={{ height: "100%" }}
            >
              <Row
                align="middle"
                className="flex justify-between items-center "
              >
                <Col>
                  <TeamOutlined
                    style={{
                      fontSize: "50px",
                      marginRight: "10px",
                      color: "Blue",
                    }}
                  />
                </Col>
                <Col>
                  <div>
                    <p className="text-lg font-serif">Total Consumers</p>
                    <h1 className="font-semibold text-2xl font-mono">1,342</h1>
                  </div>
                </Col>
              </Row>
            </Flex>
          </Col>

          <Card className="w-2/3 rounded-none">
            <Row className="justify-between">
              <Col span={10} className="">
                <Row
                  gutter={8}
                  align="middle"
                  className="mt-2 flex  justify-between font-serif"
                >
                  <Space className="flex">
                    <p className="text-xs">Direct Consumers</p>
                    <InfoCircleFilled
                      style={{ fontSize: "16px", color: "#C5B4E3" }}
                    />
                  </Space>
                  <Col className="font-semibold text-sm">
                    <div>
                      <h2>567</h2>
                    </div>
                  </Col>
                </Row>

                <Row
                  gutter={8}
                  align="middle"
                  className="mt-2 flex  justify-between font-serif"
                >
                  <Space className="flex">
                    <p className="text-xs">Through Associates</p>
                    <InfoCircleFilled
                      style={{ fontSize: "16px", color: "#C5B4E3" }}
                    />
                  </Space>
                  <Col className="font-semibold text-sm">
                    <div>
                      <h2>567</h2>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col span={12}>
                <Row
                  gutter={8}
                  align="middle"
                  className="mt-2 flex  justify-between font-serif"
                >
                  <Space className="flex">
                    <p className="text-xs">Through Field Executives</p>
                    <InfoCircleFilled
                      style={{ fontSize: "16px", color: "#C5B4E3" }}
                    />
                  </Space>
                  <Col className="font-semibold text-sm">
                    <div>
                      <h2>567</h2>
                    </div>
                  </Col>
                </Row>

                <Row
                  gutter={8}
                  align="middle"
                  className="mt-2 flex  justify-between font-serif"
                >
                  <Space className="flex">
                    <p className="text-xs">Through Sales Executives</p>
                    <InfoCircleFilled
                      style={{ fontSize: "16px", color: "#C5B4E3" }}
                    />
                  </Space>
                  <Col className="font-semibold text-sm">
                    <div>
                      <h2>567</h2>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Flex>

        <div
          // className="border-2 "
          // style={{
          //   border: "2px solid green",
          // }}
        >
          <Flex>
            <Col span={12} className="flex mt-1 rounded-md bg-white">
              <Flex
                vertical
                className="w-1/3 p-3"
                justify="space-between"
                align="center"
              >
                <h1 className="font-serif text-xs">Total Earnings</h1>
                <h1 className="mb-2 font-semibold font-mono text-sm">
                  {" "}
                  ₹1,321,305
                </h1>
                <Space wrap>
              <Select
                defaultValue="Past Week"
                style={{
                  width: "auto",
                  // border:"1px solid black",
                  borderRadius:"6px"
                }}
                options={[
                  {
                    value: "7",
                    label: <div className="text-xs">Past Week</div>,
                  },
                  {
                    value: "item1",
                    label: <p className="text-xs">Item 1</p>,
                  },
                  {
                    value: "item2",
                    label: <p className="text-xs">Item 2</p>,
                  },
                ]}
              />
            </Space>
              </Flex>

               
               <div className="w-2/3">
                <LineChart/>
               </div>
               
                </Col>
       
            <Col
              span={12}
              className="p-3 mt-1 flex justify-around rounded-md bg-green-100"
            >
              <Space wrap className="flex justify-between w-1/2">
                <WalletFilled
                  style={{ fontSize: "30px", color: "rgb(96, 240, 148)" }}
                />
                <div>
                  <p className="text-sm font-serif">Overall Float Wallet</p>
                  <p className="text-sm text-blue-600 font-semibold">
                    Wallet History
                    <CaretRightFilled />
                  </p>
                </div>
              </Space>

              <Space className="w-1/2 flex justify-center items-center font-semibold font-mono text-lg">
                ₹1,02,443
              </Space>
            </Col>
          </Flex>

          <Flex>
            <Col
              span={12}
              className="p-3 mt-1  flex justify-around rounded-md bg-purple-100"
            >
              <Space wrap className="flex justify-between w-1/2">
                <EuroCircleFilled
                  style={{ fontSize: "30px", color: "#975df5 " }}
                />
                <div>
                  <p className="text-sm font-serif">Overall Cash Wallet</p>
                  <p className="text-sm text-blue-600 font-semibold">
                    Wallet History
                    <CaretRightFilled />
                  </p>
                </div>
              </Space>

              <Space className="w-1/2 flex justify-center items-center font-semibold font-mono text-lg">
                ₹1,32,133
              </Space>
            </Col>

            <Col
              span={12}
              className="p-3 mt-1  flex justify-around rounded-md bg-orange-100"
            >
              <Space wrap className="flex justify-between w-1/2">
                <FolderOpenFilled
                  style={{ fontSize: "30px", color: "rgb(238, 135, 33)" }}
                />
                <div>
                  <p className="text-sm font-serif">Overall Cash Wallet</p>
                  <p className="text-sm text-blue-600 font-semibold">
                    Wallet History
                    <CaretRightFilled />
                  </p>
                </div>
              </Space>

              <Flex vertical justify="space-around">
                <Button
                  type="default"
                  className="p-2 text-xs rounded-xl border-none bg-red-100 text-yellow-800 font-semibold"
                >
                  Gold
                </Button>
                <Button
                  type="default"
                  className="p-2 text-xs rounded-xl border-none bg-slate-100 text-gray-600 font-semibold"
                >
                  Silver
                </Button>
              </Flex>

              <div className="flex flex-col">
                <p className="text-xs text-right font-semibold">4,232 gm</p>
                <Button
                  // type="default"
                  className="text-xs p-0 rounded-full bg-white text-blue-800 font-semibold border-none pr-3 pl-3 mb-2"
                >
                  ₹9332.5
                </Button>

                <p className="text-xs text-right font-semibold">4,232 gm</p>
                <Button
                  // type="default"
                  className="text-xs p-0 rounded-full bg-white text-blue-800 font-semibold border-none pr-3 pl-3"
                >
                  ₹9323.5
                </Button>
              </div>
            </Col>
          </Flex>
        </div>
      </div>

      <div className="bg-white overview-right w-1/3">

      <Flex justify="space-between" className="p-5">
        <p className="font-semibold font-serif">Highest Revenue Earned</p>
        <Space wrap>
              <Select
                defaultValue="Top 5"
                style={{
                  width: "auto",
                  // border:"1px solid black",
                  borderRadius:"6px"
                }}
                options={[
                  {
                    value: "all",
                    label: <p className="text-xs">All 5</p>,
                  },
                  {
                    value: "item1",
                    label: <p className="text-xs">Item 1</p>,
                  },
                  {
                    value: "item2",
                    label: <p className="text-xs">Item 2</p>,
                  },
                ]}
              />
            </Space>

      </Flex>                    

        <Space className="flex justify-center">
          <Button className="border-black font-semibold bg-slate-100">Past Week</Button>
          <Button className="border-black font-semibold bg-black text-white">Past Year</Button>
          <Button className="border-black font-semibold bg-slate-100">All Time</Button>
        </Space>

        <ColumnChart height="250" series={series}  
         barColors={["#39A7FF","#87C4FF"]}/>

      </div>
    </div>
  );
};

export default ConsumerOverview;

