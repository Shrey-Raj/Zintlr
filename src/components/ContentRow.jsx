import React from "react";
import { Card, Button, Flex, Typography } from "antd";
import {
  SmileOutlined,
  HeartOutlined,
  StarOutlined,
  LikeOutlined,
  UserAddOutlined,
  SettingOutlined,
  CarryOutOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import consumerIcon from "../img/consumer.png";
import ConsumerOverview from "./ConsumerOverview";
import ContentRowHeader from "./ContentRowHeader";

const CustomCard = () => {
  return (
    <>
      <ContentRowHeader />
      <ConsumerOverview />
    </>
  );
};

export default CustomCard;
