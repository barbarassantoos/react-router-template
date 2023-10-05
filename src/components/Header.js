import { goToHome,goToProfile } from "../Routes/Coordinator";
import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate()
  return (
    <StyledHeader>
      <StyledButton onClick={()=>{goToHome(navigate)}} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=>{goToProfile(navigate,"Barbara")}}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
