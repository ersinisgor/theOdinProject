# Library Project

## About

This is a library project that allows you to manage your book collection. You can add, edit, and remove books from your library. Each book can be marked as "read" or "unread." This project helps you organize and keep track of your reading list.

## Demo

You can see a live demo of the project 👉 [https://library-er.netlify.app/](https://library-er.netlify.app/)

![Demo GIF](https://github.com/ersinisgor/theOdinProject/blob/main/07-Library/img/gif/Library.gif)

## Features

This Library project encompasses several key features that demonstrate various aspects of front-end web development:

1. `User Input and Data Storage:` The project allows users to input book details, including the title, author, page count, and read status, through a user-friendly form. This data is stored and managed using JavaScript data structures.

2. `JavaScript Array Management:` User-provided book information is stored in a JavaScript array `(myLibrary)`. This array serves as the library's database, enabling the addition, removal, and modification of books.

3. `Dynamic Array Manipulation:` The project demonstrates the dynamic addition of book items to the array based on user input. Books are also removed from the array, ensuring that the library reflects the user's collection accurately.

4. `Conditional Logic with Checkboxes:` To track whether a book has been read or not, the project utilizes checkboxes. The status of these checkboxes is used to determine and display the book's read status.

5. `Page Count Tracking:` The project maintains a total page count by summing the page counts of all books in the library. This count is updated in real-time as books are added or removed.

6. `DOM Manipulation:` JavaScript is employed for manipulating the Document Object Model (DOM) to create book cards dynamically. This allows books to be visually represented in a structured manner.

7. `Book Object Creation:` The project showcases object-oriented programming (OOP) principles by creating book objects using the `'Book()'` constructor function. This approach encapsulates book data and behaviors.

8. `User Interface Updates:` When a new book is added or removed, the user interface (UI) is updated to reflect these changes immediately. This provides a seamless and interactive user experience.

9. `Synchronized Data and UI:` The project ensures that data stored in the array `(myLibrary)` and its corresponding display in the UI remain synchronized. When a book is removed, it is deleted both from the array and the UI simultaneously.

10. `Flexible for Future Development:` Although not implemented in this version, the project is designed to accommodate future enhancements, such as data persistence using local storage or backend integration.

These features collectively demonstrate the fundamental concepts and skills required for building interactive web applications and showcase the power of JavaScript in web development.

## Usage

1. `Add a Book:`

- Click the "Add Book" button.
- Fill in the book's title, author, page count, and mark it as read or unread.
- Click the "Save" button to add the book to your library.

2. `Edit a Book:`

- Click the "Edit" button on the book card you want to edit.
- Update the book's details.
- Click the "Save" button to save your changes.

3. `Remove a Book:`

- Click the "Remove" button on the book card you want to delete.
- Confirm the removal when prompted.

4. `Mark as Read/Unread:`

- Click the "Read" or "Unread" button on a book card to toggle its read status.

5. `Library Statistics:`

- Keep an eye on the total number of books, total pages, and the number of books you've read at the bottom of the page.

## What I Learned

During the development of this library project, I learned several key concepts and skills:

1. `DOM Manipulation:` I gained a solid understanding of how to manipulate the Document Object Model (DOM) using JavaScript. This allowed me to dynamically update and display book information on the web page.

2. `Event Handling:` I learned how to handle user interactions by attaching event listeners to HTML elements. For example, I added event listeners to buttons for adding, editing, and removing books.

3. `Form Handling:` I discovered how to work with HTML forms, collect user input, and prevent the default form submission behavior using `e.preventDefault()`.

4. `Object-Oriented Programming (OOP):` I implemented object-oriented programming principles by creating a `'Book'` class and using it to create book objects. This helped me organize and manage data more efficiently.

5. `Array Manipulation:` I became proficient in manipulating JavaScript arrays to store and manage book data, including adding, editing, and removing books from the library.

6. `Data Binding:` I learned how to associate DOM elements with data objects by using data attributes, making it easier to perform actions on specific books in the library.

7. `Dynamic UI Updates:` I mastered the art of updating the user interface (UI) dynamically based on user interactions, such as marking books as read or unread.

8. `Project Structure:` I organized the project's structure by breaking it down into functions and classes, making the code more modular and maintainable.

9. `Version Control:` I improved my version control skills by working with Git and GitHub, allowing me to collaborate on the project and track changes effectively.

10. `User Experience:` I focused on creating a user-friendly interface by incorporating features like book cards, a "New Book" form, and real-time statistics for the library.

Overall, this project provided valuable hands-on experience in building interactive web applications, applying JavaScript concepts, and enhancing the user experience. It also laid the foundation for further exploration of web development and JavaScript in future projects.

## Technologies Used

- HTML
- CSS
- JavaScript

## Credits

Created as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library) curriculum.
