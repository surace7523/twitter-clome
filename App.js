

import Sidebar from './Sidebar';
import './App.css';
import SidebarOption from './SidebarOption';
import Feed from "./Feed";
import Widgets from "./Widgets"





function App() {
  return (
    <div className="app">
         


          {/*sidebar the left side*/}
          <Sidebar/>

          
          {/*feed is the middle section */}
          <Feed/>




          {/*widgets  right side of the app*/}

          <Widgets/>
    </div>
  );
}

export default App;
