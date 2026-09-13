DevStack

DevStack is a React-based web app that helps developers explore modern frontend, backend, database, and tooling technologies, and build a personalized development stack by picking and comparing options side by side.

Description

Browse a curated catalog of technologies across categories like Frontend, Backend, Database, Language, Styling, DevOps, and Tools. Each technology is shown as a card with its icon, description, difficulty level, and rating. Add technologies to your personal "Stack" panel, remove them individually, or clear the whole stack — with toast notifications confirming every action along the way

Tech Used
-React
-Tailwind CSS
-Vite
-React-Toastify
-JSON

Features
- Uses state to let users select and disselect items
- A interactive stack builder 
-Centrallized gradient theming inside css to change the websites overall color palette with minimal effort

Question Answer
i.JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript/TypeScript files. It is used in react to get HTML like output in React type projects that can be used in web dev directly

ii.Props are data passed into a component from its parent. State is something that changes overtime when expected actions trigger particular function.

iii.useState changes the value or state of something when certain action triggers a function and re-renders the site. It's used in TechSection to track the fetched technologies list, the user's stack, and the loading status, and in Navbar to track whether the mobile menu is open.

iv.useEffect runs side effects — code that happens outside the normal render flow, like fetching data. It's needed here because fetching technologies.json is an asynchronous operation that shouldn't run on every render

v.Without a unique key (or with duplicate keys), React can misidentify items, leading to bugs like wrong items being updated or removed.

vi.Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. In YourStackSidebar, we check stack.length === 0 — if true, we show an "Your stack is empty" placeholder; otherwise, we render the list of added items:

vii.A parent passes data down to a child via props.To send data back up, the parent passes a function down as a prop, and the child calls that function with whatever data it wants to share