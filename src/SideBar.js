import "./App.css";
import home_icon from './assets/icons8-home-24.png';
import stat_icon from './assets/icons8-bar-graph-64.png';
import clippad_icon from './assets/icons8-clipboard-64.png';
import wallet_icon from './assets/icons8-wallet-64.png';
import shopping_icon from './assets/icons8-shopping-bag-50.png';

export default function SideBar() {
    return (
        <div className="sidebar">
            <img src={home_icon} className="menu-icon" />
            <img src={stat_icon} className="menu-icon" />
            <img src={clippad_icon} className="menu-icon" />
            <img src={wallet_icon} className="menu-icon" />
            <img src={shopping_icon} className="menu-icon" />
        </div>
    );
}