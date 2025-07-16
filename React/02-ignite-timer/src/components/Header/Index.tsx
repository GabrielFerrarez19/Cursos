import { HeadeContainer } from "./styles";

import IgniteLogo from "../../assets/Ignite-logo.svg";
import { Scroll , Timer} from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <HeadeContainer>
            <img src={IgniteLogo} alt=""/>
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeadeContainer>
    );
}