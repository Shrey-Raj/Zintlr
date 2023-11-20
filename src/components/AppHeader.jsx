import React from "react";
import {
  Input,
  Row,
  Col,
  Menu,
  Avatar,
  Statistic,
  Tooltip,
  Space,
  Select,
  Typography,Progress
} from "antd";
import {
  MoneyCollectOutlined,
  FileTextOutlined,
  FolderOutlined,
  BellOutlined,
  ArrowUpOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import flagIcon from "../img/india.png";
import avatarImg from '../img/avatarImg.png';

const Header = () => {

  return (
    <div>
      <Row justify="space-between">
        <Col className="">
          <Input
            placeholder="   Search . . . "
            style={{ width: "15rem", borderRadius: "30px" }}
            className="w-4/5 pt-4 pb-4 mt-2 "
            suffix={
              <SearchOutlined
              className="text-xl text-blue-600 p-1"
              />
            }
          />
        </Col>
        <Col>
          <Row gutter={16} align="middle">
            <Col>
              <div className="flex">
                <MoneyCollectOutlined className="text-2xl mr-3 text-orange-600"
                />
                <FileTextOutlined
                 className="text-2xl mr-3 text-orange-600"
                />
                <FolderOutlined
                 className="text-2xl mr-3 text-orange-600"
                />
                <BellOutlined className="text-2xl mr-3 text-orange-600" />
              </div>
            </Col>

            <div className="flex items-center border p-2 rounded">
              <Col>
                <div className="flex items-center">
                <Space wrap>
              <Select
                defaultValue="INDIA"
                style={{
                  width: "auto",
                  // border:"1px solid black",
                  borderRadius:"6px"
                }}
                options={[
                  {
                    value: "India",
                    label: <div className="text-xs">IN</div>,
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

                </div>
              </Col>
              <Col>
                <Tooltip title="View Statistics">
                  <Statistic
                    title="Stats"
                    value={1}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                    className="stats-card"
                  />
                </Tooltip>
              </Col>
            </div>
            <Col>
              <div className="flex items-center ml-4">
                <Avatar className="border-black" src={avatarImg} size={60} icon={<UserOutlined />} />
                <Space wrap className="border-none">
              <Select
                defaultValue=""
                style={{
                  width: 35,
                  border:"none",
                  borderRadius:"6px",
                  marginLeft:"10px"
                }}
                options={[
                  {
                    value: "User 1",
                    label: <div className="text-xs">1</div>,
                  },
                  {
                    value: "User 2",
                    label: <p className="text-xs">2</p>,
                  },
                ]}
              />
            </Space>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
