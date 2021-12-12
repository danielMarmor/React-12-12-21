const Header = ({user})=> {
    return (
     <h1>
         Hellow &nbsp;
         {user == null ? "Guest" : user.firstName}
     </h1>
    );
  }
  
export default Header;