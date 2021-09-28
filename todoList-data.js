const faker = require('faker');

const fs = require('fs');
//Set locale to use Vietnamese
faker.locale = 'vi';
// Random data

const randomCategoryList = (n) => {
  if (n <= 0) return;
  const todoList = [];
  let stt = 0;
  // Loop and push category
  Array.from(new Array(n)).forEach(() => {
    const todo = {
      id: stt++,
      title: faker.commerce.productName(),
    };
    todoList.push(todo);
  });
  return todoList;
};

// IFFE
(() => {
  // Random data
  const todoList = randomCategoryList(100);

  const db = {
    data: todoList,
  };
  // Write DB object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Yes');
  });
})();
