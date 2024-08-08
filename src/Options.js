import './App.css';
import goal_icon from './assets/icons8-target-50.png';
import popular_icon from './assets/icons8-burger-80.png';
import option_menu_icon from './assets/icons8-serving-dish-64.png';
import moreoptions_icon from './assets/icons8-arrow-right-24.png';

export default function Options({cardStyle}){
    return (
        <div className="card" style={cardStyle.card_style}>
            <ul className='option_rows'>
                <li className='option_items'>
                    <img src={goal_icon} className='option_goal_logo' />
                    <label>Goals</label>
                    <div className='float_right'>
                        <img src={moreoptions_icon} className='option_nav' />
                    </div>
                </li>
                <li className='option_items'>
                    <img src={popular_icon} className='option_goal_logo option_popular_logo' />
                    <label>Popular Dishes</label>
                    <div className='float_right'>
                        <img src={moreoptions_icon} className='option_nav' />
                    </div>
                </li>
                <li className='option_items'>
                    <img src={option_menu_icon} className='option_goal_logo option_menu_logo' />
                    <label>Menus</label>
                    <div className='float_right'>
                        <img src={moreoptions_icon} className='option_nav' />
                    </div>
                </li>
            </ul>
        </div>
    );
}