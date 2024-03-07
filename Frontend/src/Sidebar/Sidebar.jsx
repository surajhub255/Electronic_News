import React from "react";
import { Menu } from "antd";
import "./Sidebar.css";
import {
  BusinessOutlined,
  CategoryOutlined,
  GolfCourseOutlined,
  HomeOutlined,
  ScienceOutlined,
  SportsOutlined,
  TableChartOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="side">
    {/* <div className="side-bar">
      <Menu
        items={[
          { label: "Category", icon: <CategoryOutlined /> },
          { label: "Technology", icon: <TableChartOutlined /> },
          { label: "Science", icon: <ScienceOutlined /> },
          { label: "Buisness", icon: <BusinessOutlined /> },
          { label: "Sports", icon: <SportsOutlined /> },
          { label: "Geo Politics", icon: <GolfCourseOutlined /> },
        ]}
      />
    </div> */}
    </div>
  );
};

export default Sidebar;
