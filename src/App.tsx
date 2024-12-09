import { Fragment, useState } from "react";
import "./App.css";
//with path just write the name Navbar with out .tsx
import Navbar from "./components/Navbar";
import RegisterFrom from "./components/RegisterForm";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./components/Interfaces";

function App() {
  const companyName = "CODEAWY";
  const aboutTxt = "About Us";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    address: "",
    password: "",
    phone: "",
  });

  return (
    <Fragment>
      <Navbar
        logo={companyName}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn ? (
        <UserDetails user={userData} />
      ) : (
        <RegisterFrom
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </Fragment>
  );
}

export default App;
//App is called the root component
