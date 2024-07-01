# Convention Guide

## Table of Contents

1. [Folder structure](#1-folder-structure)
2. [Git Management](#2-git-management)
   1. [Branch](#21-branch)
   2. [Push/Pull](#22-pushpull)
3. [File Naming Rule](#3-file-naming-rule)
4. [HTML](#4-html)
   1. [General HTML Convetion](#41-general-html-convetion)
   2. [Semantic HTML Element](#42-semantic-html-element)
5. [CSS / SCSS](#5-css--scss)
6. [Grid System](#6-grid-system)
7. [Javascript](#6-javascript)

<hr/>

## 1. Folder Structure

![](./folder-structure.jpg)

## 2. Git Management

### 2.1. Branch

- Use `main` branch for releasing to public.
- Use `develop` branch as base source code.
- Use `feature` branch for updating new feature.
- Use `bugfix` branch for resolving bug after updating new feature.
- Use `release` branch for updating `tag` (version) and push to QA test.
- Use `hotfix` branch for resolving issue according to QA test feedback.

### 2.2. Push/Pull

- Create specific issue before developing/resolving any new issue
- **Always** use `git pull` to fetch the latest version before making any change
- Create pull request after developing/solving issue

## 3. File Naming Rule

- Use `lowercase` for folder and file name.
- Use `dash` (-) to seperate word of folder or file.
- Name folder and file according to its purpose.
- Name should be meaningful

## 4. HTML

- Use semantic tag (`header, nav, main, sidebar, footer`)
- Use `<ul>` to create list
- Use `external` css
- Don't use `id` if not neccessary

  ```html
  <body>
    <!-- header section -->
    <header></header>

    <!-- navigation section -->
    <nav></nav>

    <!-- main section -->
    <main></main>

    <!-- content section -->
    <section></section>

    <!-- footer section -->
    <footer></footer>
  </body>
  ```

### 4.1 General HTML Convetion

1. **Declare Document Type**:

   - Always declare the document type as the first line in your HTML document:
     ```html
     <!DOCTYPE html>
     ```

2. **Use Lowercase Element Names**:

   - Although HTML allows mixing uppercase and lowercase letters in element names, it's recommended to use lowercase for consistency and readability:

     ```html
     <!-- Good -->
     <body>
       <p>This is a paragraph.</p>
     </body>

     <!-- Bad -->
     <body>
       <P>This is a paragraph.</p>
     </body>
     ```

3. **Close All HTML Elements**:

   - While some elements (like `<p>`) don't require explicit closing tags, it's best practice to close all elements:

     ```html
     <!-- Good -->
     <section>
       <p>This is a paragraph.</p>
       <p>This is another paragraph.</p>
     </section>

     <!-- Bad -->
     <section>
       <p>This is a paragraph.<p>
       <p>This is another paragraph.<p>
     </section>
     ```

4. **Use Lowercase Attribute Names**:

   - Similar to element names, use lowercase for attribute names:

     ```html
     <!-- Good -->
     <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>

     <!-- Bad -->
     <a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
     ```

5. **Always Quote Attribute Values**:

   - Always quote attribute values, especially if they contain spaces:

     ```html
     <!-- Good -->
     <img src="html5.gif" alt="HTML5" style="width:128px;height:128px" />

     <!-- Bad -->
     <img src=html5.gif alt=HTML5 style="width:128px;height:128px" />
     ```

6. **Avoid Long Code Lines**:

   - Keep lines of HTML code reasonably short for readability.
   - Avoid excessively long lines that require horizontal scrolling.

7. **Blank Lines and Indentation**:
   - Use blank lines to separate logical code blocks.
   - Indent your code with two spaces (avoid using tabs).
   - Maintain consistent indentation for better readability.

### 4.2 Semantic HTML Element

1. **`<article>` Element**:

   - The `<article>` element represents independent, self-contained content that makes sense on its own.
   - Use it for blog posts, forum threads, news articles, or any content that stands alone.
   - Example:
     ```html
     <article>
       <h2>Google Chrome</h2>
       <p>
         Google Chrome is a web browser developed by Google, released in 2008.
       </p>
     </article>
     ```

2. **`<section>` Element**:

   - The `<section>` element defines a thematic grouping of content.
   - Use it to organize related content within a page.
   - Example:
     ```html
     <section>
       <h1>WWF</h1>
       <p>
         The World Wide Fund for Nature (WWF) is an international
         organization...
       </p>
     </section>
     ```

3. **`<header>` and `<footer>` Elements**:

   - `<header>` represents introductory content or a container for site-wide navigation.
   - `<footer>` represents the footer of a section or the entire page.
   - Example:

     ```html
     <header>
       <h1>My Website</h1>
       <nav>
         <!-- Navigation links -->
       </nav>
     </header>

     <footer>
       <p>&copy; 2024 My Company</p>
     </footer>
     ```

4. **`<nav>` Element**:

   - The `<nav>` element defines navigation links.
   - Use it for menus, navigation bars, or any set of links that guide users.
   - Example:
     ```html
     <nav>
       <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
         <!-- Other navigation links -->
       </ul>
     </nav>
     ```

5. **`<main>` Element**:
   - The `<main>` element represents the main content of a document.
   - Use it once per page to encapsulate the primary content.
   - Example:
     ```html
     <main>
       <!-- Main content goes here -->
     </main>
     ```

## 5. CSS

1. **Block Element Modifier**

   - Use **lowercase** for identifier names (classes, ids).
   - Use **dash (-)** to seperate word
   - Use **em or rem** for font size
   - All names should start with a letter.
   - Examples:

     ```css
     .header {
       font-size: 2rem;
     }

     .header-lower {
       font-size: 1.5rem;
     }
     ```

2. **Color**

   ```css
   ```

3. **Font family**

   ```css
   font-family: "Roboto", "sans-serif";
   ```

4. **Font size**
   ```css
   .fs-1: 0.75rem;
   .fs-2: 0.875rem;
   .fs-3: 1rem;
   .fs-4: 1.25rem;
   .fs-5: 1.5rem;
   .fs-6: 2rem;
   .fs-7: 3rem;
   .fs-8: 4rem;
   .fs-9: 5rem;
   .fs-10: 6rem;
   ```

5. **Grid System**

```css
/* desktop: 12 columns*/
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
}

/* tablet: 8 columns*/
.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 16px;
}

/* mobile: 4 columns*/
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
```

6. **Element Box**
```css
.pt for padding top
.pb for padding bottom
.px for padding left and right
.py for padding top and bottom

.mt for margin top
.mb for margin bottom
.mx for margin left and right
.my for margin top and bottom
```

## 6. Javascript

1. **Variable and Function Names**:

   - Use **camelCase** for identifier names (variables and functions).
   - All names should start with a letter.
   - Examples:
     ```javascript
     let firstName = "John";
     let lastName = "Doe";
     const price = 19.9;
     const tax = 0.2;
     const fullPrice = price + price * tax;
     ```

2. **Spaces Around Operators**:

   - Always put spaces around operators (`=`, `+`, `-`, `*`, `/`) and after commas.
   - Examples:
     ```javascript
     let x = y + z;
     const myArray = ["Volvo", "Saab", "Fiat"];
     ```

3. **Code Indentation**:

   - Always use **2 spaces** for indentation of code blocks.
   - Functions:
     ```javascript
     function toCelsius(fahrenheit) {
       return (5 / 9) * (fahrenheit - 32);
     }
     ```
   - Avoid using tabs for indentation.

4. **Statement Rules**:

   - For simple statements, always end with a semicolon.
   - For complex (compound) statements:
     - Put the opening bracket at the end of the first line.
     - Use one space before the opening bracket.
     - Put the closing bracket on a new line without leading spaces.
     - Do not end a complex statement with a semicolon.
     - Examples:
       ```javascript
       const cars = ["Volvo", "Saab", "Fiat"];
       const person = {
         firstName: "John",
         lastName: "Doe",
         age: 50,
         eyeColor: "blue",
       };
       ```

5. **Object Rules**:

   - Place the opening bracket on the same line as the object name.
   - Use a colon plus one space between each property and its value.
   - Use quotes around string values (not around numeric values).
   - Do not add a comma after the last property-value pair.
   - Always end an object definition with a semicolon.
   - Example:
     ```javascript
     const person = {
       firstName: "John",
       lastName: "Doe",
       age: 50,
       eyeColor: "blue",
     };
     ```

6. **Line Length**:
   - For readability, avoid lines longer than **80 characters**.
   - If a JavaScript statement doesn't fit on one line, break it after an operator or a comma.

## 7. Injecting Common Components

put `<link rel="stylesheet" href="">` in the head tag
put `<script type="module" src="">` right above the closing of body tag

in the body tag section
```html
<!-- common component -->
<component-name></component-name>
```

in the script file
```javascript
import {Component} from "path"

const myComponent = new Component();
``

