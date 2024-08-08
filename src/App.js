import logo from './logo.svg';
import './App.css';
import Counter_card from './Total_count.js';
import { Profit_card } from './Total_count.js';
import SideBar from './SideBar.js';
import SearchBar from './SearchBar.js';
import Options from './Options.js';
import orders_icon from './assets/add-to-basket.png';
import orders_delivered_icon from './assets/icons8-basket-64.png';
import orders_cencelled_icon from './assets/icons8-basket-64-red.png';
import revenue from './assets/icons8-revenue-64.png';
import cust1 from './assets/profile.png';
import cust2 from './assets/LinkedIn_profile_photo_sample_1-300x300.jpg';
import cust3 from './assets/LinkedIn_profile_photo_sample_smiling_2-300x300.jpg';
import cust4 from './assets/LinkedIn_profile_photo_sample_3-300x300.jpg';
import cust5 from './assets/LinkedIn_profile_photo_sample_smiling-300x300.jpg';
import BarChart from './BarChart.js';
import OrderTableRow from './OrderTableRow.js';
import Feedback from './Feedback.js';

const counter_style = {
  card_style: {
    width: '130px'
  }
};

const profit_style = {
  card_style: {
    width: '100%', 
    height:'100%'
  }
};

const comment1 = "In ac consequat tellus. Praesent vestibulum risus eget vehicula mattis. Nam elementum dapibus elit, in blandit tellus viverra in. Pellentesque ullamcorper, nisl ac ornare finibus, quam libero vulputate elit, eget malesuada neque ex quis nunc. Curabitur in elementum lorem. In at dui ut nisi aliquam aliquet ut eget eros. Nullam sodales risus sit amet cursus efficitur.";
const comment2 = "Maecenas purus velit, tincidunt et porttitor eget, molestie ac sem. Integer vel mauris pulvinar, fringilla erat ut, malesuada diam. Quisque fermentum urna eget orci sollicitudin consectetur. Nunc ut rhoncus sem. Maecenas ornare justo sed ligula aliquet, in facilisis erat bibendum. Vivamus scelerisque convallis neque, id vehicula justo molestie sit amet.";
const comment3 = "Nam nec semper dolor, in ultricies leo. Nulla scelerisque mattis velit eget luctus. Etiam non suscipit dolor, sit amet cursus lacus. Nullam eleifend odio non velit fermentum tincidunt. Mauris dignissim mi turpis, eu pharetra ipsum gravida sit amet. Maecenas eleifend quis mauris vel viverra. Aliquam quis augue sed dui elementum laoreet eu et nunc.";
const comment4 = "Suspendisse mollis auctor eros, sit amet pharetra nisl laoreet ut. Donec vitae quam varius, placerat lectus eget, cursus nisi. Curabitur mattis lacus sed tellus consectetur, quis sagittis neque interdum. Integer iaculis accumsan blandit.";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className='content'>
        <SideBar />
        <div className="dashboard">
        <div>
          <label className='lbl_dashboard'>Dashboard</label><br></br><br></br>
          <div className='counters'>
            <Counter_card counter={counter_style}
              logo={orders_icon}
              logobackground="rgba(255, 125, 0, 0.5)"
              counterName="Orders"
              count="125"
              growth="3" />
            <Counter_card counter={counter_style}
              logo={orders_delivered_icon}
              logobackground="rgba(194, 249, 112, 0.5)"
              counterName="Delivered"
              count="120"
              decrease="3" />
            <Counter_card counter={counter_style}
              logo={orders_cencelled_icon}
              logobackground="rgba(236, 100, 75, 0.5)"
              counterName="Cancelled"
              count="5"
              decrease="3" />
            <Counter_card counter={counter_style}
              logo={revenue}
              logobackground="rgba(227, 61, 148, 0.5)"
              counterName="Revenue"
              count="$12K"
              decrease="3" />
          </div>
        </div>
        <div className='content_third'>
            <Profit_card cardStyle={profit_style}
              profitValue="$ 6578.23"
              percentage='75'
              growth="3"
            />
        </div>
        <div>
          <BarChart cardStyle={profit_style}/>
        </div>
        <div>
          <Options cardStyle={profit_style}/>
        </div>
        <div className="card wrapper-order-list">
          <div className='order-table'>
          <label className='card-title'>Recent Orders</label>
          <table cellspacing={'0'} width={"100%"}>
            <tr>
              <th colSpan={"2"} style={{textAlign: 'left'}}>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          <OrderTableRow 
              cust_img={cust1}
              cust_name="Guy Hawkins"
              order_no="1235341215"
              amount="1200"
              orderstatus="Delivered"
              />
            <OrderTableRow 
              cust_img={cust2}
              cust_name="Wade Warren"
              order_no="1285271215"
              amount="200"
              orderstatus="Pending"
              />
            <OrderTableRow 
              cust_img={cust3}
              cust_name="Kristian Watson"
              order_no="9378341215"
              amount="300"
              orderstatus="Cancelled"
              />
            <OrderTableRow 
              cust_img={cust4}
              cust_name="Kaddy Fisher"
              order_no="1235343551"
              amount="2300"
              orderstatus="Delivered"
              />           
            <OrderTableRow 
              cust_img={cust5}
              cust_name="Jane Cooper"
              order_no="1235343551"
              amount="2300"
              orderstatus="Delivered"
              />                   
          </table>
          </div>
        </div>
        <div className='card wrapper-order-list'>
          <div className='feedback'>
            <label className='card-title'>Customer's Feedback</label>
            <Feedback cust_img={cust4} cust_name="Kaddy Fisher" star_count="3" comment={comment4}/>
            <Feedback cust_img={cust5} cust_name="Jane Cooper" star_count="4" comment={comment2}/>
            <Feedback cust_img={cust3} cust_name="Kristian Watson" star_count="5" comment={comment3}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
