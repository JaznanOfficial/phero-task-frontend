import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <Navigation />
            <HomePage />
            <ToastContainer
            />
        </div>
    );
}

export default App;
