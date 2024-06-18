import Header from '../header/Header';
import Works from '../works/Works';
import AddWork from '../addWork/AddWork';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../user/login/Login';
import Register from '../user/register/Register';
import Reset from '../user/reset/Reset';
import AddClient from '../client/addClient/AddClient';
import ClientTable from '../client/clientTable/ClientTable';




function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Works />} />
                    <Route path="/add-work" element={<AddWork />} />
                    <Route path="/update/:id" element={<AddWork />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="/addclient" element={<AddClient/>} />
                    <Route path="/clienttable" element={<ClientTable />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
