import './Rate.css';
import React from 'react';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '22.02.2022',
            'currencyRate': {
                USD: 1.1139,
                RUB: 71.0786,
                CAD: 1.4682,
                PHP: 56.286
            }
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {
                return data.json();
            })
            .then(data => {
                // console.log(data);
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = this.state.currencyRate[this.currency[i]];
                }
                console.log(result);
                this.setState({ currencyRate: result });
            });
    }

    render() {
        return (
            <div>
                <h3>Курс валют на {this.state.date} </h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map((keyName, i) =>
                    (
                        <div className='block flex-item' key={keyName}>
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                            <p>* Можно купить за 1 EUR</p>
                        </div>
                    )
                    )}
                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}

export default Rate;