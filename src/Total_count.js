import './App.css';
import sort_up from './assets/icons8-sort-up-64.png';
import sort_down from './assets/icons8-sort-down-64.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Counter_card({ counter, logo, logobackground, counterName, count, growth = null, decrease = null }) {
    return (
        <div className="card" style={counter.card_style}>
            <ul>
                <li><img src={logo} className='card_logo' style={{ background: logobackground }} /></li>
                <li><label>Total {counterName}</label></li>
                <li className='metric'>
                    <label className="counter">{count}</label>
                    {growth == undefined ? <label className="decrease"><img src={sort_down} />{decrease}%</label> : <label className="growth"><img src={sort_up} />{growth}%</label>}
                </li>
            </ul>
        </div>
    );
}

const goalText = "Goal completed";
const percentSym = "%";
export function Profit_card({ cardStyle, profitValue, percentage, growth = null, decrease = null }) {
    return (
        <div className="card" style={cardStyle.card_style}>
            <div className='profit-card'>
                <ul className='profit-text'>
                    <li><label>Net profit</label></li>
                    <li><label className='profit-value'>{profitValue}</label></li>
                    <li className='metric'>{growth == undefined ? <label className="decrease"><img src={sort_down} />{decrease}%</label> : <label className="growth"><img src={sort_up} />{growth}%</label>}</li>
                </ul>
                <ul>
                    <CircularProgressbar className='profit-percent' value={percentage} styles={buildStyles({
                        pathColor: 'rgba(45, 85, 255, 0.6)',
                        trailColor: "#89c4f4"
                    })}
                        text={percentage + percentSym}
                    >
                    </CircularProgressbar>
                    <label className="legend">*The values here has been rounded off.</label>
                </ul>
            </div>
        </div>
    );
}