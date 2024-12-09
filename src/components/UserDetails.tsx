import { IUserData } from "./Interfaces";

interface IProps {
  user: IUserData;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h3>username: {user.username}</h3>
      <h3>email: {user.email}</h3>
      <h3>address: {user.address}</h3>
      <h3>phone: {user.phone}</h3>
      <h3>password: {user.password}</h3>
    </div>
  );
};

export default UserDetails;
