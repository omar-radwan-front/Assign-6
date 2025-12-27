//1) Create Database and Use it
// CREATE DATABASE retail_store_db;
// USE retail_store_db;

// -- 1) Create Tables
// CREATE TABLE Suppliers (
//     SupplierID INT AUTO_INCREMENT PRIMARY KEY,
//     SupplierName VARCHAR(100),
//     ContactNumber VARCHAR(20)
// );

// CREATE TABLE Products (
//     ProductID INT AUTO_INCREMENT PRIMARY KEY,
//     ProductName VARCHAR(100),
//     Price DECIMAL(10,2),
//     StockQuantity INT,
//     SupplierID INT,
//     FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
// );

// CREATE TABLE Sales (
//     SaleID INT AUTO_INCREMENT PRIMARY KEY,
//     ProductID INT,
//     QuantitySold INT,
//     SaleDate DATE,
//     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// );

//2) Add Category column
// ALTER TABLE Products
// ADD Category VARCHAR(50);

//3) Remove Category column
// ALTER TABLE Products
// DROP COLUMN Category;

// -- 4) Change ContactNumber to VARCHAR(15)
// ALTER TABLE Suppliers
// MODIFY ContactNumber VARCHAR(15);

// -- 5) Add NOT NULL to ProductName
// ALTER TABLE Products
// MODIFY ProductName VARCHAR(100) NOT NULL;

// -- 6a) Insert Supplier
// INSERT INTO Suppliers (SupplierName, ContactNumber)
// VALUES ('FreshFoods', '01001234567');

// 6b) Insert Products
// INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID)
// VALUES
// ('Milk', 15.00, 50, 1),
// ('Bread', 10.00, 30, 1),
// ('Eggs', 20.00, 40, 1);

// -- 6c) Insert Sale
// INSERT INTO Sales (ProductID, QuantitySold, SaleDate)
// VALUES (1, 2, '2025-05-20');

// -- 7) Update Bread price
// UPDATE Products
// SET Price = 25.00
// WHERE ProductName = 'Bread';

// -- 8) Delete Eggs product
// DELETE FROM Products
// WHERE ProductName = 'Eggs';

// -- 9) Total quantity sold for each product
// SELECT p.ProductName, SUM(s.QuantitySold) AS TotalSold
// FROM Products p
// LEFT JOIN Sales s ON p.ProductID = s.ProductID
// GROUP BY p.ProductName;

// -- 10) Product with highest stock
// SELECT *
// FROM Products
// ORDER BY StockQuantity DESC
// LIMIT 1;

// -- 11) Suppliers starting with 'F'
// SELECT *
// FROM Suppliers
// WHERE SupplierName LIKE 'F%';

// //12) Products never sold
// SELECT p.*
// FROM Products p
// LEFT JOIN Sales s ON p.ProductID = s.ProductID
// WHERE s.SaleID IS NULL;

// //13) All sales with product name and date
// SELECT p.ProductName, s.QuantitySold, s.SaleDate
// FROM Sales s
// JOIN Products p ON s.ProductID = p.ProductID;

// // 14) Create user and grant SELECT, INSERT, UPDATE
// CREATE USER 'store_manager'@'localhost' IDENTIFIED BY 'password123';

// GRANT SELECT, INSERT, UPDATE
// ON retail_store_db.*
// TO 'store_manager'@'localhost';

// //15) Revoke UPDATE permission
// REVOKE UPDATE
// ON retail_store_db.*
// FROM 'store_manager'@'localhost';

// //16) Grant DELETE on Sales table only
// GRANT DELETE
// ON retail_store_db.Sales
// TO 'store_manager'@'localhost';