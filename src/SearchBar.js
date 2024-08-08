import './App.css';
import mail_icon from './assets/icons8-mail-50.png';
import settings_icon from './assets/icons8-settings-48.png';
import notification_icon from './assets/icons8-notification-50.png';
import profile_icon from './assets/profile.png';
import site_logo from './assets/site-logo.png';

export default function SearchBar(){
    return(
        <div className='searchbar'>
            <img src={site_logo} className='site-logo' />
            <input className="search-input" type='text' name='search_input' placeholder='Search'/>
            <img src={profile_icon} className="searchbar-icons searchbar-icon-profile" style={{background: 'rgba(255, 255, 255, 0.5)'}}/>
            <img src={notification_icon} className="searchbar-icons" style={{background: 'rgba(255, 255, 255, 0.5)'}}/>
            <img src={settings_icon} className="searchbar-icons" style={{background: 'rgba(255, 255, 255, 0.5)'}}/>
            <img src={mail_icon} className="searchbar-icons" style={{background: 'rgba(255, 255, 255, 0.5)'}}/>
        </div>
    );
}