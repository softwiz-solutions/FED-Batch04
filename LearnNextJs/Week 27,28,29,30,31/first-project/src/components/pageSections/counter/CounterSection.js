"use client";
import React, { useEffect, useState } from "react";

const getNews = () => {
  console.log("component fetching news");
  return [
    {
      image: "",
      title: "news title",
      body: "body",
    },
  ];
};
const CounterSection = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const newsData = getNews();
    console.log("component news data from api:", newsData);
  }, []);

  console.log("component is rendering");
  return (
    <div>
      <h2>{counter}</h2>
      <button className="btn btn-primary" onClick={handleIncrement}>
        +
      </button>
      <br />
      <button className="btn btn-danger" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default CounterSection;




/*
This is one of the most confusing topics for beginners. The good news is that once you understand **when a component is created, updated, and removed**, `useEffect` becomes much easier.

Let's start from the beginning.

---

# What is a Component?

A component is simply a function that returns UI.

Example:

```jsx
function Home() {
  return <h1>Hello World</h1>;
}
```

When Next.js opens this page, React executes this function.

Think of a component like a person.

A person is:

* Born
* Lives
* Dies

A React component also has a life.

* Created (Mount)
* Updated (Re-render)
* Removed (Unmount)

This is called the **Component Lifecycle**.

---

# The Three Lifecycle Phases

Imagine opening YouTube.

```
Open Website
      ↓
Component Created (Mount)

Watch Videos
      ↓
Component Updates (Re-render)

Close Browser
      ↓
Component Removed (Unmount)
```

React goes through these three stages for every component.

---

# Phase 1. Mount (Component is Created)

This happens when React creates the component for the first time.

Example

```jsx
function Home() {
  console.log("Component Created");

  return <h1>Hello</h1>;
}
```

Output

```
Component Created
```

This runs only when the page first loads.

Think like this:

```
Open Website

↓

React creates Home component

↓

Home appears on screen
```

---

# Phase 2. Update (Re-render)

Whenever something changes, React runs the component again.

Example

```jsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

Initial output

```
Component Rendered
```

Click button

```
Component Rendered
```

Click again

```
Component Rendered
```

Every state change causes a new render.

---

# Phase 3. Unmount

Unmount means the component disappears.

Example

```
Homepage

↓

Go to About Page

↓

Homepage removed

↓

About Page created
```

The Home component no longer exists.

React destroys it.

---

# What is useEffect?

Imagine you move into a new house.

After entering, you

* turn on the lights
* connect Wi-Fi
* unpack luggage

These actions happen **after entering the house**.

React is similar.

React first creates the UI.

Then it runs `useEffect`.

So:

```
Create UI

↓

Show UI

↓

Run useEffect
```

---

# Syntax

```jsx
useEffect(() => {

}, []);
```

It has two parts.

```
useEffect(

function,

dependency array

)
```

---

# Example 1. Run Only Once

```jsx
"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log("Website Loaded");
  }, []);

  return <h1>Hello</h1>;
}
```

Output

```
Website Loaded
```

It only runs once.

Why?

Because of

```
[]
```

An empty dependency array tells React:

> Run this effect only after the first render.

---

# Timeline

```
Page Opens

↓

Component Created

↓

Screen Shows

↓

useEffect Runs

↓

Done
```

---

# Example 2. Fetch Data

This is the most common use.

```jsx
useEffect(() => {

  fetch("/api/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

}, []);
```

Timeline

```
Component Created

↓

Page Visible

↓

API Request

↓

Data Received

↓

Display Data
```

React waits until the page exists before fetching.

---

# Example 3. Listen to Window Resize

```jsx
useEffect(() => {

  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

}, []);
```

Now every resize prints

```
1200

950

600
```

---

# But there's a problem...

Imagine you visit

```
Home

↓

About

↓

Home

↓

About

↓

Home
```

Each time

```
window.addEventListener()
```

creates another listener.

Eventually

```
Resize

↓

Listener 1

↓

Listener 2

↓

Listener 3

↓

Listener 4
```

All of them fire.

This is a memory leak.

---

# Cleanup Function

React lets us clean things up.

```jsx
useEffect(() => {

  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };

}, []);
```

Timeline

```
Component Created

↓

Listener Added

↓

User Leaves Page

↓

Listener Removed
```

This cleanup function runs before the component unmounts. It also runs before the effect runs again if dependencies have changed.

---

# Example 4. Timer

Without cleanup

```jsx
useEffect(() => {

  setInterval(() => {
    console.log("Hello");
  },1000);

},[]);
```

After leaving the page

```
Hello

Hello

Hello
```

The timer continues.

Bad.

Correct version

```jsx
useEffect(() => {

  const id = setInterval(() => {
    console.log("Hello");
  },1000);

  return () => {
    clearInterval(id);
  };

},[]);
```

Now the timer stops when the component is removed.

---

# Dependency Array

This is where beginners get confused.

There are three common patterns.

## 1. No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs");
});
```

Runs after **every render**.

Timeline

```
Page Load

↓

Runs

↓

Click Button

↓

Runs

↓

Click Again

↓

Runs
```

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Runs");
}, []);
```

Runs only once after the initial render.

Timeline

```
Page Load

↓

Runs

↓

Click

↓

Doesn't Run
```

---

## 3. Specific Dependencies

```jsx
useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

Runs when `count` changes.

Example

```jsx
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Timeline

```
Page Load

↓

Count = 0

↓

useEffect Runs

↓

Click

↓

Count = 1

↓

useEffect Runs

↓

Click

↓

Count = 2

↓

useEffect Runs
```

---

# Real-World Uses of `useEffect`

You will often use it for:

* Fetching data from an API.
* Reading or writing to `localStorage`.
* Setting up timers (`setInterval`, `setTimeout`).
* Listening for browser events (resize, scroll, keyboard).
* Opening or closing WebSocket connections.
* Initializing third-party libraries (charts, maps, analytics).

---

# Important Note for Next.js

In the Next.js App Router, components are **Server Components by default**. Server Components cannot use `useEffect` because they run on the server, not in the browser.

If you want to use `useEffect`, make the component a **Client Component** by adding this at the top:

```jsx
"use client";
```

Example:

```jsx
"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("Runs in the browser");
  }, []);

  return <h1>Home</h1>;
}
```

---

# Easy Way to Remember

```
Component Lifecycle

Mount
↓
Component appears

↓

Update
↓
State or props change

↓

Unmount
↓
Component disappears
```

```
useEffect Patterns

No dependency array
→ After every render

Empty dependency array []
→ Once after the first render

[count]
→ After the first render and whenever count changes
```

If you keep these three lifecycle stages and three `useEffect` patterns in mind, you'll understand the majority of `useEffect` usage in React and Next.js.
*/