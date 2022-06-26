import React from "react";
import Link from "next/link";
import { Space, Badge, Button, PageHeader } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const Hamburger = () => {
  const sections = ["CS", "MECH", "AIML", "DS", "ECE", "ELEC", "BT"];
  return (
    <div>
      <div className="text-white text-2xl">
        <Space className="flex">
          <Space size={"middle"}>
            <Space size={"small"} style={{ fontWeight: "bold" }}>
              <MenuOutlined />
            </Space>
          </Space>
          {sections.map((e) => {
            return (
              <Link href="/categories" state={e}>
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Hamburger;
