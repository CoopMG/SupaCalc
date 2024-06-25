import './Header.css'
import { KeyboardMenuComponent } from "../KeyboardMenuComponent/KeyboardMenuComponent"
import { MenuComponent } from "../MenuComponent/MenuComponent"
import { LogoComponent } from "../LogoComponent/LogoComponent"

export const HeaderComponent = () => {
    return(
    <div className = "header">
        <MenuComponent className = 'sidebar-menu'/>
        <LogoComponent className = "logo"/>
        <KeyboardMenuComponent className = 'keyboard-menu'/>
    </div>
    )
}