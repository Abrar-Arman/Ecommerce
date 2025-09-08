import logo from "../../assets/my-logo.svg";
function NavbarLogo() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-24 md:w-auto" />
    </div>
  );
}

export default NavbarLogo;
