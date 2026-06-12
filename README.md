# Frontend Mentor - Frontend Quiz App Solution

![Design preview for the Frontend quiz app coding challenge](./preview.jpg)

This is my solution to the [Frontend Quiz App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). The challenge was to build a responsive, accessible quiz experience where users can choose a subject, answer multiple-choice questions, track their progress, view their final score, and switch between light and dark themes.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Current status](#current-status)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project structure](#project-structure)
  - [Features](#features)
  - [How the app works](#how-the-app-works)
  - [What I learned](#what-i-learned)
  - [Challenges I am still working on](#challenges-i-am-still-working-on)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting started](#getting-started)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject.
- Select a single answer from each question from a choice of four.
- See if they made a correct or incorrect choice when they submit an answer.
- Move on to the next question after seeing the submitted result.
- See a completed state with their final score after the final question.
- Try the same quiz again.
- Start a new quiz after completing one.
- View a layout that adapts across mobile, tablet, and desktop screen sizes.
- See hover, disabled, selected, correct, and incorrect states for interactive elements.
- Navigate the app using semantic controls such as links, buttons, radio inputs, and labelled fields.
- Change the app theme between light and dark mode.

### Links

- Solution URL: [Frontend Mentor solution](https://www.frontendmentor.io/solutions/quiz-app-with-react-qouter-CO1nECsCm2)
- Live Site URL: [Vercel deployment](https://rerpo-frontendmentor-quiz-challenge.vercel.app/)
- Repository: [GitHub repository](https://github.com/repro123/frontendmentor-quiz-challenge.git)

### Current status

The main quiz flow is working:

- Users can choose from the available subjects.
- Each subject page loads the related questions from the local JSON data.
- Users can pick one answer, submit it, see feedback, and move forward.
- The final result page shows the score and total number of questions.
- Users can retry the current quiz or return to the start screen.
- The light/dark theme toggle works and stores the selected theme in `localStorage`.

There are still some state and refresh behavior improvements I want to make. I have documented those in the [Challenges I am still working on](#challenges-i-am-still-working-on) section.

## My process

### Built with

- Semantic HTML5 markup
- React components
- React Context API
- React hooks
- React Router
- Vite
- Tailwind CSS v4
- CSS custom properties
- Mobile-first responsive layout
- Local JSON data
- `localStorage` for theme preference
- Vercel for deployment

### Project structure

```text
quiz-app/
|-- public/
|   |-- data.json
|   `-- assets/images/
|-- src/
|   |-- assets/images/
|   |-- components/
|   |   |-- background/
|   |   |-- containers/
|   |   |-- cta-buttons/
|   |   |-- header/
|   |   |-- icons/
|   |   |-- number-of-questions/
|   |   |-- options/
|   |   |-- question/
|   |   |-- theme-toggle/
|   |   `-- ui/
|   |-- context/
|   |-- hooks/
|   |-- layout/
|   |-- lib/
|   |-- pages/
|   |-- App.css
|   |-- App.jsx
|   `-- main.jsx
|-- package.json
`-- vite.config.js
```

The app is split into small reusable components. Page-level components handle the main screens, context providers manage shared quiz and theme state, and UI components such as buttons, loaders, logos, and progress bars keep the interface consistent.

### Features

#### Subject selection

The start screen fetches quiz subjects from `public/data.json` and renders each subject as a clickable option. Each subject includes a title, icon, and background color class.

#### Quiz routing

The app uses React Router routes for:

- `/` - start menu.
- `/:subject` - selected quiz subject page.
- `/results` - completed quiz result page.

The subject name in the URL is used to find the matching quiz. This makes quiz pages directly addressable by subject, for example `/html` or `/javascript`.

#### Quiz state

The `QuizProvider` manages:

- Loaded quiz data.
- Loading state.
- Current quiz.
- Current question index.
- Selected answer.
- Score.
- Submitted state.
- Finished state.

This keeps the quiz logic centralized and allows components like `Question`, `Options`, `SubmitBtn`, `NextBtn`, and `ResultPage` to consume the same quiz state through the custom `useQuiz` hook.

#### Answer selection and feedback

Each answer option is rendered with a native radio input inside a label. After submission:

- The selected correct answer receives a success style.
- The selected wrong answer receives an error style.
- If the selected answer is wrong, the correct answer is also shown.
- Correct and incorrect icons are displayed for visual feedback.
- Options are disabled after submission so users cannot change their answer before continuing.

#### Progress indicator

The progress bar calculates progress using the current question index and total number of questions:

```js
const percentage = ((currentIndex + 1) / totalQuestions) * 100;
```

It also includes progress-related ARIA attributes so assistive technologies can understand the user's current position in the quiz.

#### Theme toggle

The app supports light and dark themes with Tailwind's custom dark variant and CSS custom properties. The selected theme is stored in `localStorage`, and the `dark` class is toggled on the root HTML element.

#### Responsive background

The background component chooses mobile, tablet, or desktop background artwork using media queries. It renders light and dark background layers and fades between them when the theme changes.

### How the app works

1. The user lands on the start menu.
2. `QuizProvider` fetches the quiz data from `/data.json`.
3. The start menu renders each quiz subject.
4. The user selects a subject.
5. The app stores that quiz as the current quiz and navigates to the subject route.
6. The quiz page renders the current question, answer options, progress bar, and submit button.
7. The user selects one option.
8. The user submits the answer.
9. The app checks the selected answer against the correct answer.
10. The score is updated if the answer is correct.
11. The UI shows correct or incorrect feedback.
12. The user moves to the next question.
13. After the final question, the user navigates to the results page.
14. The result page displays the final score and options to retry or start a new quiz.

### What I learned

This project helped me practice organizing a React app around shared state without making every component responsible for too much logic. Moving quiz behavior into `QuizProvider` made the UI components easier to read because they can focus mostly on rendering and user interaction.

I also learned more about combining route state and application state. The selected subject can be recovered from the URL, which makes direct subject routes possible. At the same time, I saw that relying only on in-memory context creates problems when the user refreshes the page or uses browser navigation.

Another useful lesson was theme handling. Persisting the dark mode preference in `localStorage` works, but applying the dark class only after React mounts can cause a flash of the wrong theme on refresh. That showed me the difference between persisting state and applying that state early enough in the page lifecycle.

### Challenges I am still working on

#### Flash of unstyled content in dark mode

When the site is refreshed while dark mode is active, there can be a brief flash of the light theme before the dark theme is applied. This happens because the stored theme is read inside the React app, and the `dark` class is applied after the initial HTML and CSS have already started rendering.

The improvement I want to make is to apply the saved theme before React renders. A small inline script in `index.html` could read `localStorage` immediately and add the `dark` class to `document.documentElement` before the first paint.

#### Quiz state persistence on refresh

The theme preference persists because it is saved in `localStorage`, but the quiz progress is currently stored in React context state. That means progress can be lost when the page refreshes.

The app currently stores values like the current quiz, selected answer, current question index, score, and submitted state in memory. To make refresh behavior stronger, I want to persist the active quiz session to either `localStorage`, `sessionStorage`, or URL state.

#### Browser back and forward navigation

The app writes the current question number to the URL search params, for example `?q=2`, but it does not fully restore quiz state from that query parameter yet. Because of that, browser back and forward navigation does not behave like a complete history of quiz progress.

A future improvement would be to make the URL and quiz state work together more intentionally:

- Restore `currentIndex` from the `q` query parameter.
- Decide whether submitted answers and scores should also be encoded or stored.
- Prevent invalid URL states, such as a result page with no current quiz.
- Make refresh, direct links, and browser navigation feel consistent.

#### Error message for empty submissions

The current submit button is disabled when no answer is selected. This prevents empty submissions, but the original challenge also asks for an error message when trying to submit without choosing an answer. I want to revisit this interaction and decide whether to keep the disabled button pattern, add a visible validation message, or combine both.

### Continued development

I want to continue improving:

- State persistence across refreshes.
- URL-driven quiz state.
- Browser history behavior.
- Preventing theme flashes before React mounts.
- Reducing debug `console.log` calls before final production polish.
- Adding tests for quiz flow, route behavior, scoring, and theme persistence.
- Strengthening keyboard and screen reader feedback for answer validation.
- Handling invalid routes and invalid quiz subjects more gracefully.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/) - The challenge platform and design source.
- [React documentation](https://react.dev/) - Helpful for component structure, hooks, and context patterns.
- [React Router documentation](https://reactrouter.com/) - Useful for route params, navigation, and search params.
- [Tailwind CSS documentation](https://tailwindcss.com/) - Used for styling, custom theme tokens, responsive utilities, and dark mode behavior.
- [Vite documentation](https://vite.dev/) - Used for local development, builds, and project tooling.

## Getting started

To run the project locally:

```bash
pnpm install
pnpm dev
```

To create a production build:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

To run linting:

```bash
pnpm lint
```

## Author

- GitHub - [@repro123](https://github.com/repro123)
- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- Solution - [Quiz app with React Router](https://www.frontendmentor.io/solutions/quiz-app-with-react-qouter-CO1nECsCm2)

## Acknowledgments

Thanks to Frontend Mentor for the challenge, assets, and design brief. This project was a useful way to practice React state management, routing, theme persistence, and responsive UI implementation in a realistic frontend workflow.
