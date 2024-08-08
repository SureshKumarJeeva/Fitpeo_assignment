import './App.css';
import YellowStarImg from './assets/yellow_star.png';
import WhiteStarImg from './assets/white-star-icon-13226.png';

function YellowStar(){
    return(
        <img src={YellowStarImg} className='star-icon' style={{width:"20", height:"20"}}/>
    );
}

function WhiteStar(){
    return(
        <img src={WhiteStarImg} className='star-icon' style={{width:"20", height:"20"}}/>
    );
}


const star = function (yellow_star_count = 5){
    if(yellow_star_count > 5)
        yellow_star_count = 5;
    const stars = [];
    for(var i = 1; i <= yellow_star_count; i++){
        stars.push(YellowStar());
    }
    for(var i = 1; i <= (5 - yellow_star_count); i++){
        stars.push(WhiteStar());
    }
    return(stars);
}

export default function Feedback({cust_img, cust_name, star_count, comment}){
    return(
        <div>
            <ul>
                <li style={{display:"flex", alignItems:"center"}}>
                    <img src={cust_img} className='searchbar-icon-profile order-list-customer' />
                    <label>{cust_name}</label>
                </li>
                <li>
                    {star(star_count)}
                </li>
                <li className="feedback-end">
                    <label className="feedback-comment">{comment}</label>
                </li>
            </ul>
        </div>
    );
}