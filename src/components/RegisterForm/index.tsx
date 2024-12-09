import { ChangeEvent } from "react";
import "./index.scss";
import { IUserData } from "../Interfaces";
import { formInputData } from "../data";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const RegisterFrom = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  const onChangeHendler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const RenderForm = formInputData.map((input) => (
    <>
      <label htmlFor={input.label}>{input.label}: </label>
      <input
        type={input.type}
        name={input.name}
        value={userData[input.name]}
        onChange={onChangeHendler}
      />
    </>
  ));

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {RenderForm}
      <br />
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </form>
  );
};

export default RegisterFrom;
