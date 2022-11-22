import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Studentlist from './Studentlist';
import Attendancelist from './Attendancelist';
import Addattendance from './Addattendance';

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>

        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">

              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/studentlist" element={<Studentlist />} />
                <Route path="/student/:id" element={<Attendancelist />} />
                <Route path="/add-attendance/:id" element={<Addattendance />} />


              </Routes>
            </div>
          </div>

        </div>

      </BrowserRouter>
    </div>



  );
}

export default App;
