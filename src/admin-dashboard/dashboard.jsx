import HeaderComponent from "../admin-header/header";
import "./style.css";
import SiderComponent from "../admin-sidebar/sidebar";
export default function DashboardComponent() {
  return (
    <>
      <div id="top">
        <HeaderComponent />
      </div>
      <div>
        <SiderComponent/>
      </div>
    </>
  );
}
