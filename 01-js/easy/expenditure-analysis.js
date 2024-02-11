/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let result = []
  transactions.forEach(transaction => {
    // let found = false;
    // result.forEach(element => {
    //   if (element.category === transaction.category) {
    //     element.totalSpent += transaction.price;
    //     found = true;
    //   } 
    // });

    // if (!found) {
    //   result.push({category: transaction.category, totalSpent: transaction.price});
    // }

    let categoryObject = result.find(element => element.category === transaction.category);

    if (categoryObject) {
      categoryObject.totalSpent += transaction.price;
    } else {
      result.push({ category: transaction.category, totalSpent: transaction.price });
    }
    
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
