````markdown
# React Learning Projects

A collection of small React projects created while learning and practising React fundamentals, hooks, reusable components, Tailwind CSS, custom hooks, and React Router.

This repository documents my React learning journey through practical projects, starting from basic component rendering and moving toward routing, API integration, reusable components, and custom hooks.

## Repository Overview

| Project | Description | Main Concepts |
|---|---|---|
| `React started` | A basic React application created to understand JSX and components. | JSX, components, Vite |
| `02Counter/Hooks` | React hooks and reusable component practice. | `useState`, props, components |
| `bgChanger` | A password generator with different configuration options. | `useState`, `useEffect`, `useCallback`, `useRef` |
| `customReact` | A custom JavaScript renderer demonstrating how React-like elements are rendered. | DOM manipulation, rendering |
| `customhooks` | A currency converter using a custom React hook. | Custom hooks, API integration |
| `reactRouter` | A multi-page React application using React Router. | Routing, nested routes, dynamic routes |

## Projects

### 1. React Started

This is a basic React application created to understand the fundamentals of React.

Topics covered:

- Creating React components
- Writing JSX
- Importing and exporting components
- Rendering components
- Running a React application with Vite

**Project folder:**

```text
React started/
````

---

### 2. Hooks and Reusable Components

This project was created to practise React hooks, props, and reusable components.

Topics covered:

* Managing state with `useState`
* Creating reusable components
* Passing data through props
* Styling components
* Component-based application development

**Project folder:**

```text
02Counter/Hooks/
```

---

### 3. Password Generator

The `bgChanger` folder contains a configurable password generator application.

Features:

* Generate random passwords
* Select password length
* Include numbers
* Include special characters
* Automatically update the password
* Copy the generated password to the clipboard

React hooks used:

* `useState`
* `useCallback`
* `useEffect`
* `useRef`

**Project folder:**

```text
bgChanger/
```

---

### 4. Custom React Renderer

This project demonstrates the basic idea behind how React renders elements in the browser.

A JavaScript object is created to represent an HTML element. A custom rendering function then:

* Creates a DOM element
* Adds text content
* Adds element attributes
* Appends the element to the root container

This project helped me understand how React converts element objects into browser DOM elements.

**Project folder:**

```text
customReact/
```

---

### 5. Currency Converter with Custom Hook

This project is a currency converter built using React and a custom hook.

Features:

* Enter an amount
* Select the source currency
* Select the target currency
* Convert between currencies
* Swap source and target currencies
* Fetch currency exchange information
* Use reusable input components

Topics covered:

* Custom React hooks
* API integration
* State management
* Reusable components
* Controlled form inputs
* Tailwind CSS

**Project folder:**

```text
customhooks/
```

---

### 6. React Router Project

This project demonstrates client-side routing using React Router.

Pages and routes include:

* Home
* About
* Contact
* User
* Dynamic user route
* GitHub information route
* Not Found page

Topics covered:

* `RouterProvider`
* `createBrowserRouter`
* `createRoutesFromElements`
* `Route`
* `Outlet`
* `Link`
* `NavLink`
* Nested routes
* Dynamic routes
* Route parameters
* Route loaders
* Shared layouts
* Not Found routes

**Project folder:**

```text
reactRouter/
```

## Technologies Used

* React
* JavaScript
* Vite
* React Router DOM
* Tailwind CSS
* HTML5
* CSS3
* npm
* Git
* GitHub

## Getting Started

### Prerequisites

Install the following tools before running the projects:

* Node.js
* npm
* Git

Check whether they are installed:

```bash
node --version
npm --version
git --version
```

## Clone the Repository

```bash
git clone https://github.com/chauhanmuskan291980-wq/React.git
cd React
```

## Running the Projects

Each React project has its own `package.json` file. Install the dependencies inside the project folder before running it.

### Run the Hooks Project

```bash
cd 02Counter/Hooks
npm install
npm run dev
```

### Run the React Started Project

```bash
cd "React started"
npm install
npm run dev
```

### Run the Password Generator

```bash
cd bgChanger
npm install
npm run dev
```

### Run the Currency Converter

```bash
cd customhooks
npm install
npm run dev
```

### Run the React Router Project

```bash
cd reactRouter
npm install
npm run dev
```

After running the project, open the local URL displayed in the terminal.

The default Vite development URL is usually:

```text
http://localhost:5173
```

## Running the Custom React Project

The `customReact` project uses plain HTML and JavaScript, so npm installation is not required.

Open the following file directly in your browser:

```text
customReact/index.html
```

You can also run it using the VS Code Live Server extension.

## Build a Project

To create a production build of a Vite React project, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## Repository Structure

```text
React/
├── 02Counter/
│   └── Hooks/
├── React started/
├── bgChanger/
├── customReact/
├── customhooks/
├── reactRouter/
└── README.md
```

## Learning Goals

Through these projects, I am learning and practising:

* Creating React components
* Writing JSX
* Managing state
* Passing data using props
* Using React hooks
* Creating custom hooks
* Building reusable components
* Handling form inputs
* Fetching data from APIs
* Implementing client-side routing
* Creating dynamic routes
* Using nested routes and layouts
* Styling applications with Tailwind CSS
* Organising React projects

## Future Improvements

Planned improvements for this repository:

* Add screenshots for every project
* Add live deployment links
* Improve responsive design
* Add loading states
* Add error handling
* Add more React projects
* Add unit testing
* Deploy selected projects

## Author

**Muskan Chauhan**

* GitHub: [chauhanmuskan291980-wq](https://github.com/chauhanmuskan291980-wq)
* Repository: [React Learning Projects](https://github.com/chauhanmuskan291980-wq/React)

## Support

If you find this repository helpful, consider giving it a star.

---

This repository is maintained as part of my React learning journey.

```
```

