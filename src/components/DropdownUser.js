import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import logout from "../components/images/logout.png";
import Profile from "../components/images/profile.png";
import User from "../components/images/user.png";


const Logout = () => {
  localStorage.removeItem("VALUE_LOGIN");
  window.location.reload();
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Nav.Link href="/Profile" style={{ height: "2px" }}>
        <img
          src={User}
          style={{ width: "20px", height: "20px", marginRight: "5px", cursor:"pointer" }}
        />
        Profile
      </Nav.Link>
    </Popover.Body>

    <Popover.Body>
      <hr></hr>
      <Nav.Link href="/">
        <img
          src={Logout}
          style={{
            width: "19px",
            height: "19px",
            marginRight: "3px",
            marginLeft: "3px",
          }}
        />
        Logout
      </Nav.Link>
    </Popover.Body>
  </Popover>
);

const DropdownUser = () => (
  <OverlayTrigger
    trigger="click"
    placement="bottom"
    overlay={
      <Popover id="popover-basic">
        <Popover.Body>
          <Nav.Link href="/Profile" style={{ height: "2px"}}>
            <img
              src={User}
              style={{ width: "20px", height: "20px", marginRight: "5px", cursor: "pointer" }}
            />
            Profile
          </Nav.Link>
        </Popover.Body>

        <Popover.Body>
          <hr></hr>
          <div onClick={Logout} style={{cursor:"pointer"}}>
            <img
              src={logout}
              style={{
                width: "19px",
                height: "19px",
                marginRight: "3px",
                marginLeft: "3px",
                
                
              }}
            />
            Logout
          </div>
        </Popover.Body>
      </Popover>
    }
  >
    <img style={{ width: "55px", height: "55px",  cursor:"pointer"}} src={Profile} alt="logo" />
  </OverlayTrigger>
);

export default DropdownUser;
