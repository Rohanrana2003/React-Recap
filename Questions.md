# React-Recap

## Q1. What is a CDN? Why do we need CDN

> A **CDN** is a network of servers distributed globally that delivers web content to users more efficiently by using the server closest to the user.

### Why do we need a CDN?

- 🚀 **Faster Load Times** – Serves content from the nearest server to the user.
- 🌍 **Better Performance Globally** – Ensures fast access regardless of location.
- 📉 **Reduced Load on Origin Server** – Distributes traffic to multiple servers.
- 🔒 **Improved Security** – Offers protection against DDoS attacks and supports HTTPS.
- ⚡ **High Availability** – Content is still accessible even if one server fails.

> Commonly used to deliver static assets like images, CSS, and JavaScript files.

## Example

```html
<!-- Using React via CDN -->
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
```

## Q2. What is a difference between a caret(^) and a tilde(~)

> ~version “Approximately equivalent to version”, will automatically update you to all future Major versions that are backwards-compatible, without incrementing the minor version.
> ^version “Compatible with version”, will automatically update you to all future Minor versions that are backwards-compatible, without incrementing the major version.

## Q3: What is the difference between `package.json` and `package-lock.json`?

> `package.json` is used to declare the main dependencies and scripts of a project. It helps others understand what libraries your project needs.  
> `package-lock.json` is automatically generated to lock the exact versions of those dependencies, so the project works the same for everyone who installs it.

## Q4: What is a bundler?

> A bundler is a tool that takes all your project files (JavaScript, CSS, images, etc.) and combines them into a few optimized files. This makes the app faster and easier to load in the browser. Examples include Webpack, Parcel, and Vite.

## Q5: What is the difference between Parcel and Webpack?

> Parcel works without any setup — you can start building right away.  
> Webpack needs more setup and gives you full control.  
> Parcel is simple and fast for small projects, while Webpack is powerful and better for large apps.

### Q6: What is the difference between Git and GitHub?

> Git is a version control system that tracks code changes on your local machine.  
> GitHub is a cloud platform where you can store your Git repositories and collaborate with others online.  
> In short, Git is the tool, GitHub is the service.

### Q7: What is Babel?

> Babel is a JavaScript compiler that converts modern JavaScript code into older versions so it can run in all browsers.  
> It helps developers use the latest JS features without worrying about browser support.

### Q8: What is component composition in React?

> Component composition means building complex UIs by combining smaller, reusable components.  
> Instead of writing everything in one big component, you break it into parts and use them together like building blocks.

### Q9: What is config-driven UI?

> Config-driven UI means building the user interface using data or configuration objects instead of hardcoding everything.  
> It makes the UI flexible and easy to update by just changing the config, not the code.

### Q10: WhY is Redux efficient?

> We use Redux when ou app requires a lot of data management and read write operations into our app.
> Redux offers better state management and better debugging for our app because of the Redux store chrome extension

### Q11: Type of testing

> Three types:
>
> 1. Unit Testing - Testing one unit or one component of app in isolation
> 2. Integration Testing - Testing the flows between components of the application
> 3. End to End Testing - Testing all the components and floews in our application
