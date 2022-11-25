# React Page Transition
## The Package From `@steveeeie/react-page-transition`. The Difference Is That It Does Not use `styled-components`.
## Usage with `react-router` v5

### 1. Install Package

`npm install @v-immor/page-transition`

or

`yarn add @v-immor/page-transition`

or

`pnpm add @v-immor/page-transition`

---

### 2. Install Dependencies

`npm install react-router-dom@^5`

or

`yarn add react-router-dom@^5`

---

### 3. Code Example

#### App.js

```jsx
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import './styles.css';

const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

const Home = props => <h1>Home</h1>;

const About = props => <h1>About</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
```

Wrap your routes inside the `PageTransition` component and pass one of the preset names to the `preset` prop. [View the advanced demo](https://codesandbox.io/s/advanced-react-page-transition-demo-z8hmd) for the full list of presets.

You will also need to pass the current `location.path` to the `transitionKey` prop, this is so that the internal `TransitionGroup` can track which components are entering and exiting.

---

#### styles.css

```css
html,
body,
#root {
  height: 100%;
}
```

`PageTransition` is styled with `height: 100%`. The parent containers need to be given a height for it to render correctly because of this.

---

## Props

| Prop             | Required | Type              | Description                                                         |
| ---------------- | -------- | ----------------- | ------------------------------------------------------------------- |
| `preset`         | No       | String            | Sets the enter and exit animations \*                               |
| `enter` | No       | String            | Sets the enter animation \*                                         |
| `exit`  | No       | String            | Sets the exit animation \*                                          |
| `transitionKey`  | Yes      | `Unique Identifier` | Used internally to track which components are entering and exiting. |
\*
| `outerWrapperStyle` | No | `React.CSSProperties` | wrapper style |
\*
| `outerWrapperClassName` | No | string | wrapper class |