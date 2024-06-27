import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import { TiArrowSortedDown } from "react-icons/ti";
import '../Currency.css'

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const CURRENCY_OPTIONS = [
        { value: '$', label: '$ Dollar' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Rupee' },
    ];
    
    const [selectedCurrency, setSelectedCurrency] = useState('£');

    const changeCurrency = (event) => {
        setSelectedCurrency(event.target.value);
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    const getSelectedCurrencyLabel = () => {
        const selectedOption = CURRENCY_OPTIONS.find(option => option.value === selectedCurrency);
        return selectedOption ? selectedOption.label : '';
      };

    return (
        <div className='alert alert-secondary' >
            <label className="dropdown-label">
            Currency ({getSelectedCurrencyLabel()})
            <select
                value={selectedCurrency}
                onChange={changeCurrency}
                className="dropdown-select"
            >
                {CURRENCY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
            <TiArrowSortedDown style={{ color: 'white'}}></TiArrowSortedDown>
            </label>
        </div>
    );
}

export default Currency;