import './LogoComponent.css'
import logo from '../../assets/SupaCalcLogo.png';

export const LogoComponent = () => {
    return(
    <box classname = "LogoContainer">
        <img classname = "logo" alt = "SupaCalc Logo" src = {logo}/>
    </box>
    )
}
