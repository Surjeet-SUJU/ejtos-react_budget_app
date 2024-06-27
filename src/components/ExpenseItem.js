import React, {useContext} from 'react';
import { TiArrowUpOutline, TiArrowDownOutline, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../Expense.css';

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><TiArrowUpOutline className='icon a' size='1.5rem' onClick={event => increaseAllocation(props.name)} style={{ color: 'green' }} ></TiArrowUpOutline></td>
            <td><TiArrowDownOutline className='icon b' size='1.5rem' onClick={event => decreaseAllocation(props.name)} style={{ color: 'red' }} ></TiArrowDownOutline></td>
            <td><TiMinus className='icon b' size='1.5em' onClick={handleDeleteExpense} style={{ color: 'red' }}></TiMinus></td>
        </tr>
    );
};

export default ExpenseItem;