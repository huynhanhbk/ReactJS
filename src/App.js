import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container col-5">
          <NavbarBrand href="/">MENU</NavbarBrand>
          <NavbarBrand href="/">MENU</NavbarBrand>
          <NavbarBrand href="/">MENU</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
