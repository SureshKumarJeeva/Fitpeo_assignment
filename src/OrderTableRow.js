import './App.css';

export default function OrderTableRow({cust_img, cust_name, order_no, amount, orderstatus }) {
    return (
        <tr>
            <td className='order-profile-icon'>
                <img src={cust_img} className='searchbar-icon-profile order-list-customer' />
            </td>
            <td style={{textAlign: 'left'}}>
                <label>{cust_name}</label>
            </td>
            <td>
                <label>{order_no}</label>
            </td>
            <td>
                <label>${amount}</label>
            </td>
            <td>
                {
                orderstatus.toLowerCase() != "delivered" ? 
                    <label className="not-delivered">{orderstatus}</label> 
                    : 
                    <label className="delivered">{orderstatus}</label>
                }
            </td>
        </tr>
    );
}