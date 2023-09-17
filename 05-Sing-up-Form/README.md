# Sign-up Form

## About

In this one-page project, which looks like a registration form, HTML form elements have been given a beautiful appearance with CSS. JavaScript was used to check that the password fields match each other. The Registration Form page project was built to provide a user-friendly and visually appealing registration experience for web applications. It offers a simple yet effective registration form that can be easily integrated into various projects.

## Demo

You can see a live demo of the project 👉 [https://singup-form-er.netlify.app/](https://singup-form-er.netlify.app/)

![Demo GIF](https://github.com/ersinisgor/theOdinProject/blob/main/05-Sing-up-Form/img/gif/Sign%20Up%20Form.gif)

## Technologies Used

This project was built using the following technologies:

- HTML
- CSS
- JavaScript

## Form Elements

The sign-up form includes the following elements:

- **First Name** and **Last Name**: Users are required to provide their first and last names, with a minimum of 2 characters for each name. These fields use the `input` elements with `type="text"`.

- **Email**: Users must provide a valid email address. The email field uses the `input` element with `type="email"`.

- **Tel**: Users can optionally provide their telephone number. The tel field uses the `input` element with `type="tel"`.

- **Password** and **Confirm Password**: Users are required to create a password with a minimum of 8 characters and confirm it. Both fields use the `input` element with `type="password"`.

- **I agree to receive news and promotions from Loady Company by email**: This is a checkbox that allows users to opt-in for email updates. It uses the `input` element with `type="checkbox"`.

- **Create Account**: This is the submit button for the form. It uses the `button` element with `type="submit"`.

## Form Input Attributes

Several attributes are used within the form inputs:

- `required`: This attribute is added to the first name, last name, email, password, and confirm password fields. It indicates that the user must fill in these fields before submitting the form.

- `autocomplete`: This attribute is set to provide hints to the browser about what type of data is expected. For example, `autocomplete="name"` suggests that the field expects a name, while `autocomplete="email"` suggests an email address.

- `pattern`: The pattern attribute is used in the first name field with `pattern="[a-zA-Z]{2,200}"`. This specifies that the field should only accept alphabetical characters and be between 2 and 200 characters in length.

### Project Sources

Photo by <a href="https://unsplash.com/@karlpb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karl Paul Baldacchino</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Brand icon on [freesvg.org](https://freesvg.org/banner-parchment-paper)

## Credits

This project created as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form 'https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form') curriculum.
