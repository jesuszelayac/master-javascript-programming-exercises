let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    const laceData = [];

    // Iterate through each designer in the inventory
    for (const designer of inventory) {
      // Iterate through each shoe in the designer's collection
      for (const shoe of designer.shoes) {
        const shoeName = shoe.name.toLowerCase(); // Convert to lowercase for case-insensitive search

        // Check if the shoe name contains "lace" or "laced" (regular expression)
        if (shoeName.match(/lace|laced/)) {
          const nameWords = shoeName.split(" "); // Split shoe name into words
          const targetWordIndex = nameWords.findIndex(word => word === "lace" || word === "laced");

          // Add data for the laced shoe
          laceData.push({
            nameWords,
            targetWordIndex,
          });
        }
      }
    }

    return laceData;
}

console.log(getLaceNameDataForShoes(currentInventory));
