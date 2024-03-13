let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
  let result = [];

  inventory.forEach(designer => {
      let sum = 0;
      designer.shoes.forEach(shoe => {
          sum += shoe.price;
      });
      let averagePrice = sum / designer.shoes.length;
      result.push({
          name: designer.name,
          averagePrice: averagePrice
      });
  });

  return result;
}

console.log(renderAverageCostPerDesigner(currentInventory));
