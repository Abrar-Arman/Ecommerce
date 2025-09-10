import logo from "../../assets/my-logo.svg";
function NavbarLogo() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-26 sm:w-32 lg:w-40" />
    </div>
  );
}

export default NavbarLogo;
