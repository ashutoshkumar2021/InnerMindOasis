import { NavLink, useLocation } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
} from "react-icons/fa";
import { useUserAuth } from "../contexts/UserAuthContext";

const Sidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const { logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
  };

  const location = useLocation(); // get the current location

  const getMenuItemStyle = (path) => {
    // check if the current location matches the path
    return location.pathname === path
      ? { backgroundColor: "white", color: "black", borderRadius: "10px", margin: "5px" }
      : {};
  };

  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: "1px",
                }}
              >
                InnerMind Oasis
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle"> 
          <MenuItem icon={<FaGem />} style={getMenuItemStyle("/")}>
            Home 
            <NavLink to="/" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />} style={getMenuItemStyle("/dashboard/write-new")}>
            Write
            <NavLink to="/dashboard/write-new" />
          </MenuItem>
          <MenuItem icon={<FaGem />} style={getMenuItemStyle("/dashboard/private-journals")}>
            Private Journals 
            <NavLink to="/dashboard/private-journals" />
          </MenuItem>
          <MenuItem icon={<FaGem />} style={getMenuItemStyle("/dashboard/public-journals")}>
            Public Journals 
            <NavLink to="/dashboard/public-journals" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />} style={getMenuItemStyle("/dashboard/insights")}>
            Insights
            <NavLink to="/dashboard/insights" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />} style={getMenuItemStyle("/dashboard/uplift")}>
            Uplift
            <NavLink to="/dashboard/uplift" />
          </MenuItem>
          <MenuItem icon={<FaGem />} suffix={<span className="badge red">S.O.S.</span>} style={getMenuItemStyle("/dashboard/resources")}>
            Emergency
            <NavLink to="/dashboard/resources" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "16px" }}>
          <div
            className="sidebar-btn"
            onClick={handleLogout}
            style={{ cursor: "pointer" , backgroundColor:'red', color:'white', fontStyle:'bold'}}
          >
            <FaUser /><span>Logout</span>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
