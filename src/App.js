import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Title from './Components/Title';
import SearchBar from './Components/SearchBar';
import Table from './Components/EmployeeTable';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <NavBar />
    <Title />
    <SearchBar />
    <Table />
    <Footer />
    </>
  );
}

export default App;