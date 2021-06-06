import "./Main.css";

import Hsemonth from '../Dashboard/Hsemonth/Hsemonth';
import IncedentReport from  '../Process/IncedentReport/IncedentReport'



const Main = ({ sidebarOpen, openSidebar }) => {
  return (
    <div className="main">
          {/* <Hsemonth /> */}
          <IncedentReport/>
          
    </div>
  );
};

export default Main;
