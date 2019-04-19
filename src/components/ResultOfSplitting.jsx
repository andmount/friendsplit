import React from 'react';

function ResultOfSplitting(props) {
  const transactions = friendsToTransactions(props.friends);
  const listOfTransactions = transactions.map((transaction, index) =>
    <li key={index}>{transaction}</li>  
  );
  return (
    <div className="resultofsplitting">
      <h2>Result of Splitting</h2>
      <ul className="transactions">{listOfTransactions}</ul>
    </div>
  );
}

function friendsToTransactions(friends) {
  const sum = friends.reduce(((sum, friend) => sum + friend.payt), 0);
  const average = sum / friends.length;
  const debtorsAndCreditors = friends.map(friend => ({
    name: friend.name,
    payt: friend.payt - average
  }));
  const debtors = debtorsAndCreditors.filter(friend => friend.payt < 0);
  const creditors = debtorsAndCreditors.filter(friend => friend.payt > 0);
  const toCapitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const transactions = [];

  for (let i = 0; i < creditors.length; i++) {
    for (let j = 0; j < debtors.length; j++) {
      let transaction;
      if (creditors[i].payt === 0) {
        break;
      }

      if (debtors[j].payt === 0) {
        continue;
      }

      if (Math.abs(debtors[j].payt) < creditors[i].payt) {
        transaction = `${toCapitalize(debtors[j].name)} gives ${Math.abs(debtors[j].payt)} to ${toCapitalize(creditors[i].name)}`
        creditors[i].payt = creditors[i].payt + debtors[i].payt
        debtors[j].payt = 0;
      } else {
        transaction = `${toCapitalize(debtors[j].name)} gives ${Math.abs(creditors[i].payt)} to ${toCapitalize(creditors[i].name)}`
        debtors[j].payt = debtors[j].payt + creditors[i].payt
        creditors[i].payt = 0;
      }

      transactions.push(transaction);
    }
  }
  return transactions;
}

export default ResultOfSplitting;

