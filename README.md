"**Dashboard Widget Management System**"
 React.js-based system for managing dashboard widgets with dynamic add/remove functionality and chart visualizations.

## Features

- **Dynamic Widget Management:** Add/remove widgets from categories.
- **Graphical Representation:** Charts rendered using `chart.js` in the `Card` component.
- **State Management:** Handled with `useReducer`, `useContext`, and `useState`.
- **Conditional Rendering:** Manage UI elements like modal visibility based on state.
- **Responsive UI:** Built using Bootstrap.

## Project Structure

- **assets Folder:** Icons used in the project.
- **components Folder:**
  - **Card.js:** Renders charts using `chart.js`.
  - **Widget.js:** Displays all categories and their widgets.
  - **Modal.js:** Manages adding/removing widgets and chart visibility.
  - **data.json:** Holds category and widget data.
- **Home Component:** The parent component managing widget state and rendering the dashboard.

## State Management

- **useReducer:** Manages widget state in the `Home` component. Handles adding/removing widgets with actions like `ADD_WIDGET` and `REMOVE_WIDGET`.
- **useContext:** Shares state across components (e.g., `Modal`), avoiding prop drilling.
- **useState:** Manages UI interactions and modal visibility.

## Modal Management

The `Modal` component controls widget selection and handles add/remove actions, updating the dashboard with `useContext` and `useReducer`.

## Running the Project

1. **Install Dependencies:** `npm install`
2. **Start the Project:** `npm start`

Runs on `http://localhost:3000`.

## Libraries Used

- **React.js**
- **Bootstrap**
- **Chart.js**
- **React Hooks:** `useReducer`, `useContext`, `useState`

## Future Improvements

- Add search widget feature.
- More advanced chart types.
- Persist widget state with local storage/backend.
