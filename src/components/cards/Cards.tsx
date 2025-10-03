import NetSalesGraph from '../../assets/graphs/net-sales-graph.svg?react';
import OrdersGraph from '../../assets/graphs/orders-graph.svg?react';
import CustomersGraph from '../../assets/graphs/customers-graph.svg?react';
import GrowthGraph from '../../assets/graphs/growth-graph.svg?react';
import styles from './Cards.module.scss';
import SectionHeading from "../../utilities/utilities.js";

function CardsLayout() {
    const listItems = cards.map(card => 
        <li 
        key={card.id} 
        className={styles.card}
        style={{ background: card.bgColor }}
        >
            <div>
                <h2>{card.title}</h2>
                <p><b>{card.numbers}</b></p>
                <p>{card.performance}</p>
            </div>
            {card.graph}
            </li>
    );

    return (
        <section>
            <SectionHeading 
                title='Shoppers Overview'
            />
            <ul className='cards'>
                {listItems}
            </ul>
        </section>
    )
}

const cards = [{
    id: 0, 
    title: 'Net Sales',
    graph: <NetSalesGraph />,
    numbers: "$27,012",
    performance: '+ 2% than last week',
    bgColor: 'linear-gradient(to right, #EE658E, #FFA6B5)'
}, {
    id: 1, 
    title: 'Orders',
    graph: <OrdersGraph />,
    numbers: "5,661",
    performance: '+ 3,21% than last month',
    bgColor: 'linear-gradient(to right, #D4B3FF, #A075EB)'
}, {
    id: 2, 
    title: 'Customers',
    graph: <CustomersGraph />,
    numbers: "15,138",
    performance: '+ 12% than last month',
    bgColor: 'linear-gradient(to right, #A2F8B1, #2ABC9C)'
}, {
    id: 3, 
    title: 'Growth',
    graph: <GrowthGraph />,
    numbers: "19.56%",
    performance: '- 4,87% than last week',
    bgColor: 'linear-gradient(to right, #E7B84C, #FCE086)'
}];

export default CardsLayout;