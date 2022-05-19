import React from 'react';
import ChildExpences from './ChildExpences';
const expenses = [
    {
      id: 'e1',
      title: 'Flowers',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
export default function ParentExpences(){
    return(
        <div>
            <ChildExpences 
            title={expenses[0].title}
            date={expenses[0].date}
            month={expenses[0].id}/>
        </div>
    )
}