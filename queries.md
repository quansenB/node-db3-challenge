# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT Categories.CategoryName, Products.ProductName 
FROM Products JOIN Categories ON Products.CategoryID = Categories.CategoryID;
//Shows 77?!

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT Shippers.ShipperName, Orders.OrderID 
FROM Shippers JOIN Orders ON Shippers.ShipperID = Orders.ShipperID 
WHERE Orders.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT Products.ProductName, OrderDetails.Quantity 
FROM Products JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID 
WHERE OrderDetails.OrderID  = "10251" 
ORDER BY Products.ProductName ASC;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT Customers.CustomerName, Orders.OrderID, Employees.LastName
FROM Customers JOIN Orders ON Customers.CustomerID = Orders.CustomerID JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 