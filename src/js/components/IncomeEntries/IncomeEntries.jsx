import React from "react";
import { connect } from "react-redux";

import {
  updateIncomeDescription,
  updateIncomeAmount,
  addIncome
} from "./incomeActions"

export default class IncomeEntries extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncomeDescription = this.handleIncomeDescription.bind(this);
    this.handleIncomeAmount = this.handleIncomeAmount.bind(this);
    this.handleAddIncome = this.handleAddIncome.bind(this);
  }

  handleIncomeDescription(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeDescription(value));
  }

  handleIncomeAmount(event) {
    const { dispatch } = this.props;
    var { value } = event.target;
    value = parseFloat(value);
    dispatch(updateIncomeAmount(value));
  }

  handleAddIncome(event) {
    event.preventDefault();
    const { dispatch, description, amount } = this.props;
    dispatch(addIncome(description, amount));
  }

  render() {
    const { description, amount, lineItems } = this.props;   
    return (
      <div className="card border-success mb-3">
        <div className="card-header text-white bg-success" >Income Entries</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="income-description">Description</label>
              <input
                type="text"
                className="form-control"
                id="income-description"
                onChange={this.handleIncomeDescription}
              />
            </div>
            <div className="form-group">
              <label htmlFor="income-amount"> Amount </label>
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input
                  type="number"
                  min="1"
                  // step="0.01"
                  pattern = "^[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$"
                  className="form-control"
                  id="income-amount"
                  onChange={this.handleIncomeAmount}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success col-12 mb-5"
              onClick={this.handleAddIncome}
            >
              +Add Income
              </button>
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={{ width: 120 }}> Amount</th>
                </tr>
              </thead>
              <tbody>          
                {
                  lineItems.map((item, i) => {
                    var desc = item.description != undefined ? item.description : 0;  
                    var amt = item.amount != undefined ? item.amount : 0;                                               
                    return (                  
                    <tr key = {i}>
                      <td >{desc}</td>
                      <td >{amt.toFixed(2)}</td>                      
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}