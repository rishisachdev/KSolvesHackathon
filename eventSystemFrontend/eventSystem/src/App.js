import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Homepage/homepage';
import UpdateEventStatus from './Homepage/Admin/updateeventstatus';
import AllEventStatus from './Homepage/Get All Event Status/AllEventStatus';
import EventStatus from './Homepage/Get Specific Event Status/EventStatus';
import Status from './Homepage/Get Specific Event Status/Event Status/Status';
import CreateEvent from './Homepage/Admin/CreateEvent';
import DeleteEvent from './Homepage/Admin/DeleteEvent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/allevent" element={<AllEventStatus />} />
            <Route path="/eventstatus" element={<EventStatus />} />
            <Route path="/status/:id" element={<Status />} /> 
            <Route path="/homepage/Admin/updateeventstatus" element={<UpdateEventStatus />} /> 
            <Route path="/homepage/Admin/Create" element={<CreateEvent />} /> 
            <Route path="homepage/Admin/Delete" element={<DeleteEvent />} /> 
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
