import './App.css';
import Student from './components/Student'
import MentorTable from './components/MentorTable';
import { BookingTable } from './components/BookingTable';
function App() {
  return (
    <div className="App">
     
      <Student />
     
      <MentorTable />
        <BookingTable />
     
    </div>
  );
}

export default App;
