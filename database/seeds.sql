USE sandwiches_db;

INSERT INTO sandwich (name)
VALUES ("Western Burger"), ("Hawaiian Burger"), ("Californian Sandwich"), ("Southwest Sandwich"), ("Elvis Sandwich"),
    ("Midwesterner Sandwich"), ("Thanksgiving Sandwich"), ("Hippie Handheld"), ("Classic Burger"), ("The Dusty Sandwich");

USE sandwiches_db;
INSERT INTO meat (meat_type, sandwich_id)
VALUES ("Hamburger", 1), ("Pulled Pork", 1), ("Hamburger", 2), ("Ham", 2), ("Pulled Chicken", 3), ("Bacon", 3), 
    ("Pulled Pork", 4), ("Hamburger", 5), ("Spicy Friend Chicken", 6), ("Salami", 6), ("Turkey", 7), ("Veggie Burger", 8), 
    ("Hamburger", 9), ("Spicy Fried Chicken", 10);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("BBQ Sauce", 1), ("Onion Rings", 1), ("Cheddar Cheese", 1);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Pineapple", 2), ("Swiss Cheese", 2);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Avocado", 3), ("Garlic Aioli", 3), ("Tomato", 3), ("Cucumber", 3), ("Spinach", 3);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("BBQ Sauce", 4), ("Pickles", 4), ("Carmelized Onions", 4), ("Pepperjack Cheese", 4), ("Hot Peppers", 4), 
    ("Corn", 4), ("Black Beans", 4);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Peanut Butter", 5), ("Banana", 5), ("Blackberries", 5), ("Glazed Donut", 5);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Chili", 6), ("French Fries", 6), ("Pickles", 6), ("Mayo", 6);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Gravy", 7), ("Cranberry Sauce", 7), ("Mashed Potatoes", 7);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Dandelion", 8), ("Portabello Mushrooms", 8), ("Avocado", 8), ("Hummus", 8), ("Brie", 8), ("Spinach", 8); 

INSERT INTO toppings (topping, sandwich_id)
VALUES ("American Cheese", 9), ("Lettuce", 9), ("Tomato", 9), ("Onion", 9), ("Ketchup", 9), ("Mustard", 9);

INSERT INTO toppings (topping, sandwich_id)
VALUES ("Ghost Peppers", 10), ("Spicy Ranch", 10), ("Avocado", 10), ("Pepperjack Cheese", 10), ("Glazed Donut", 10), ("Corn", 10);