export const predefinedDataSets = {
  "SELECT * FROM Categories": [
    { categoryID: 1, categoryName: "Beverages", description: "Soft drinks, coffees, teas, beers, and ales" },
    { categoryID: 2, categoryName: "Condiments", description: "Sweet and savory sauces, relishes, spreads, and seasonings" },
    { categoryID: 3, categoryName: "Confections", description: "Desserts, candies, and sweet breads" },
    { categoryID: 4, categoryName: "Dairy Products", description: "Cheeses" },
    { categoryID: 5, categoryName: "Grains/Cereals", description: "Breads, crackers, pasta, and cereal" },
    { categoryID: 6, categoryName: "Meat/Poultry", description: "Prepared meats" },
    { categoryID: 7, categoryName: "Produce", description: "Dried fruit and bean curd" },
    { categoryID: 8, categoryName: "Seafood", description: "Seaweed and fish" },
    { categoryID: 9, categoryName: "Snacks", description: "Chips, pretzels, popcorn, and nuts" },
    { categoryID: 10, categoryName: "Frozen Foods", description: "Frozen vegetables, fruits, and meals" },
    { categoryID: 11, categoryName: "Bakery", description: "Freshly baked bread, pastries, and cakes" },
    { categoryID: 12, categoryName: "Baking Supplies", description: "Flour, sugar, baking powder, and chocolate chips" },
  ],

  "SELECT categoryName, description FROM Categories": [
    { categoryName: "Beverages", description: "Soft drinks, coffees, teas, beers, and ales" },
    { categoryName: "Condiments", description: "Sweet and savory sauces, relishes, spreads, and seasonings" },
    { categoryName: "Confections", description: "Desserts, candies, and sweet breads" },
    { categoryName: "Dairy Products", description: "Cheeses" },
    { categoryName: "Bakery", description: "Freshly baked bread, pastries, and cakes" },
    { categoryName: "Baking Supplies", description: "Flour, sugar, baking powder, and chocolate chips" },
  ],

  "SELECT categoryID, categoryName FROM Categories WHERE categoryID < 6": [
    { categoryID: 1, categoryName: "Beverages" },
    { categoryID: 2, categoryName: "Condiments" },
    { categoryID: 3, categoryName: "Confections" },
    { categoryID: 4, categoryName: "Dairy Products" },
    { categoryID: 5, categoryName: "Grains/Cereals" },
  ],

  "SELECT categoryID, categoryName, description FROM Categories WHERE categoryID BETWEEN 3 AND 8": [
    { categoryID: 3, categoryName: "Confections", description: "Desserts, candies, and sweet breads" },
    { categoryID: 4, categoryName: "Dairy Products", description: "Cheeses" },
    { categoryID: 5, categoryName: "Grains/Cereals", description: "Breads, crackers, pasta, and cereal" },
    { categoryID: 6, categoryName: "Meat/Poultry", description: "Prepared meats" },
    { categoryID: 7, categoryName: "Produce", description: "Dried fruit and bean curd" },
    { categoryID: 8, categoryName: "Seafood", description: "Seaweed and fish" },
  ],

  "SELECT categoryID, categoryName FROM Categories WHERE categoryName LIKE '%B%'": [
    { categoryID: 1, categoryName: "Beverages" },
    { categoryID: 11, categoryName: "Bakery" },
    { categoryID: 12, categoryName: "Baking Supplies" },
  ],

  "SELECT categoryID, categoryName FROM Categories ORDER BY categoryID DESC LIMIT 5": [
    { categoryID: 12, categoryName: "Baking Supplies" },
    { categoryID: 11, categoryName: "Bakery" },
    { categoryID: 10, categoryName: "Frozen Foods" },
    { categoryID: 9, categoryName: "Snacks" },
    { categoryID: 8, categoryName: "Seafood" },
  ],

  "SELECT categoryID, categoryName, description FROM Categories WHERE categoryID IN (2, 5, 7, 10)": [
    { categoryID: 2, categoryName: "Condiments", description: "Sweet and savory sauces, relishes, spreads, and seasonings" },
    { categoryID: 5, categoryName: "Grains/Cereals", description: "Breads, crackers, pasta, and cereal" },
    { categoryID: 7, categoryName: "Produce", description: "Dried fruit and bean curd" },
    { categoryID: 10, categoryName: "Frozen Foods", description: "Frozen vegetables, fruits, and meals" },
  ],

  "SELECT categoryName, description FROM Categories WHERE categoryName IN ('Beverages', 'Snacks', 'Bakery', 'Seafood')": [
    { categoryName: "Beverages", description: "Soft drinks, coffees, teas, beers, and ales" },
    { categoryName: "Snacks", description: "Chips, pretzels, popcorn, and nuts" },
    { categoryName: "Bakery", description: "Freshly baked bread, pastries, and cakes" },
    { categoryName: "Seafood", description: "Seaweed and fish" },
  ],
};

export const customQueryData = Array.from({ length: 500 }, (_, i) => ({
  studentID: i + 1,
  studentName: `Student ${i + 1}`,
  grade: (9 + (i % 4)).toString(), 
  age: 14 + (i % 4), 
  city: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune"][i % 7]
}));



export const predefinedQueries = Object.keys(predefinedDataSets);
