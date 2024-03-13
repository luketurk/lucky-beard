# Lucky Beard Demo

This is a complete project as part of an interview process for a front end dev position at lucky beard.


## 1) Setup & Installation

### 1.1) Clone the repository and install dependencies.

```bash
# Clone the repository
git clone https://github.com/luketurk/lucky-beard.git

# Navigate to the project directory
cd lucky-beard-demo

# Install dependencies
npm install
```

### 1.2) Run the app

```bash
npm start
```

# 2) Run Unit Tests

### 2.1) From the terminal, run the following command

```bash
npm test
```

# 3) CSS Framework
## Styled-components 

Why I chose styled-components
1) Easy to Use: Writing CSS inside JavaScript is straightforward with Styled Components, making it easy to style individual parts of my app without dealing with multiple CSS files.

2) No Style Conflicts: Each component gets its unique style, so I don't have to worry about one part of my app accidentally changing the look of another.

3) Change Styles Dynamically: It's super handy to change styles based on what's happening in the app, like switching themes or responding to user actions, all directly within the component's code.

4) Clean and Organized: With Styled Components, the styles for each part of my app are kept right where they're used. This makes it much easier to see what's going on and make changes later.

5) Great for Teams: Because everything is so modular and contained, it's easier for me and others to work on the app without stepping on each other's toes.

In short, Styled Components made styling my app more straightforward, more flexible, and less error-prone, which is why I went with it for this project.

# 4) Issues experienced, solutions put in place

## 4.1) Implementing the first 'curve' on the landing page
 > solution: I combined the Arrow SVG and Curve SVG into one single SVG icon and exported it then used that on the landing page. I also tinkered with the z-index of the various parts of the section so everything fitted together seamlessly.
 
 ## 4.2) <Select></Select> Chevron Icon  rotation onClick on the Select component
 > I built a custom dropdown component that handles the selection state, and rotates the chevron icon accordingly to match as the normal CSS


# 5) What would I do if I had  additional time


