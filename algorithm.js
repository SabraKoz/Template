/*
You're working with a small bookstore's inventory system. The store has two arrays of data: one for books in stock and one for customer orders. Each book has a title, price, and quantity. Each order has a customer name and the book title they want.
Write a function that takes these two arrays and a book title as parameters. The function should:

1. Check if the book exists in inventory
2. If it exists, check if there's enough quantity to fulfill an order
3. If there's enough quantity, check if there are any pending orders for this book
4. If there are pending orders, fulfill those first
5. To fulfill an order, reduce the quantity in inventory by 1
5. Return an appropriate message for each scenario

Note: Define the algorithm with comments, and then implement each step with code.
*/


//console.log a message saying if the order has been placed or not

import { bookstore } from "./database.js"

const fulfillBookOrder = (booksInInventory, pendingOrders, titleOfBook) => {
    
    //check for title of book in inventory to see if it exists
    let exist = false
    for (const book of booksInInventory) {
        if (book.title === titleOfBook) {
            exist = true
        }
    }
    //if book title was not found, console.log to customer
    if (!exist) {
        console.log(`${titleOfBook} is not in inventory.`) 
    }
    
    //check if there are pending orders for that book using bookTitle in orders array
    for (const order of pendingOrders) {
        if (order.bookTitle === titleOfBook) {
            
            //when fulfilling an order, take quantity of book in inventory and reduce by 1
            for (const book of booksInInventory) {
                if (book.title === titleOfBook) {
                    //check quantity of book in inventory to see if there are enough (quantity > 0)
                    if (book.quantity > 0) {

                        book.quantity -= 1
                    } else {
                        return console.log(`We do not have ${titleOfBook} in inventory at this time.`)
                    }
                }
            }
        }
    } console.log(`${titleOfBook} has been ordered, thank you!`)
}
fulfillBookOrder(bookstore.inventory, bookstore.orders, "JavaScript Basics")
