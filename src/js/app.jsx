import React from 'react';
import IncomeEntries from "./components/IncomeEntries";
import ExpenseEntries from "./components/ExpenseEntries";
import Summary from "./components/Summary";

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center display-3' >
          <div className="budget">Budget Tracker</div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <IncomeEntries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <ExpenseEntries />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <Summary />
          </div>
        </div>
      </div>
    );
  }
}
