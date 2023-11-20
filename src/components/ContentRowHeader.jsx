import React from "react";
import { Card, Button , Flex , Typography} from "antd";
import { SmileOutlined, HeartOutlined, StarOutlined, LikeOutlined , UserAddOutlined , SettingOutlined , CarryOutOutlined , ExclamationCircleOutlined, ThunderboltOutlined} from "@ant-design/icons";

import { Link } from "react-router-dom";

import consumerIcon from '../img/consumer.png'

const ContentRowHeader = () => {
  return (
    <>
            <div className="flex justify-between mb-2">
      <Card className="w-2/5 mr-1" style={{ background:"rgb(233, 244, 247) "}}>

        <Flex justify="space-between">
            <div className="flex items-center justify-between flex-col">
              <span className="text-xl mb-5 font-bold font-serif">Hello Shakir !<br/>
              <p className="text-xs font-thin">You have 12 consumers this week</p>
              </span>
              <div className="w-100 flex justify-between">
                  <Button type="primary" style={{background:"#000" , marginRight:"20px"}}>
                  <UserAddOutlined />
                  Add </Button>

              <Link to="./page2">
                  <Button type="default" className="bg-white"><SettingOutlined /> Manage Consumers</Button>
            </Link>

              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={consumerIcon}/>
            </div>
        </Flex>

      </Card>

      {/* Other 3 Cards - all are same but with tweeked data*/}
      <Card className="w-1/5 mr-1">
        <div className="flex items-center justify-center">
            <p className="font-bold"><CarryOutOutlined style={{ fontSize: "32px" , color:"orange" }} /> You have <span className="text-lg text-gray-500">276</span> KYC Approval Pending</p>
        </div>
        <Button className="mt-4 p-3 flex items-center justify-center" style={{ width: "60%", background: "#000" }} type="primary" block>
          View List
        </Button>
      </Card>

      <Card className="w-1/5 mr-1">
        <div className="flex items-center justify-center">
            <p className="font-bold"><ExclamationCircleOutlined style={{ fontSize: "32px" , color:"red" }} /> You have <span className="text-lg text-gray-500">276</span> KYC Approval Pending</p>
        </div>
        <Button className="mt-4 p-3 flex items-center justify-center" style={{ width: "60%", background: "#000" }} type="primary" block>
          View List
        </Button>
      </Card>

      <Card className="w-1/5">
        <div className="flex items-center justify-center">
            <p className="font-bold"><ThunderboltOutlined style={{ fontSize: "32px" , color:"cyan" }} /> You have <span className="text-lg text-gray-500">276</span> KYC Approval Pending</p>
        </div>
        <Button className="mt-4 p-3 flex items-center justify-center" style={{ width: "60%", background: "#000" }} type="primary" block>
          View List
        </Button>
      </Card>
    </div>
    </>
  )
}

export default ContentRowHeader