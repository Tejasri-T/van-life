# 🚐 Van Life

Welcome to **Van Life**, a React-based web application built to help users find and rent the perfect van for their road trip adventures. This project demonstrates modern React routing techniques, layout management, and an authenticated host dashboard.

## Features

- **Public Routes:** Browse available vans, view van details, and learn about the application on the About page.
- **Host Dashboard (Protected):** A secure area for van owners (hosts) to manage their vans, view income, check reviews, and update pricing/photos.
- **Advanced Routing:** Utilizes `react-router-dom` v6 setup (`createBrowserRouter`) for nested routes, loaders, actions, and shared layout components.
- **Authentication Check:** Secures host-specific pages utilizing loader authentication checks (`requireAuth`).
- **Mocked Backend/Data:** Utilizes `miragejs` and Firebase to mock database interactions and API requests for vans.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Mock Server / Backend:** MirageJS & Firebase
- **Styling:** Vanilla CSS (`index.css`)
- **Icons:** React Icons

## Folder Structure

```text
van-life/
├── components/       # Reusable UI components (Layout, HostLayout, Error, etc.)
├── images/           # Static assets and image files
├── pages/            # Page-level components
│   ├── Host/         # Host dashboard pages (Dashboard, Income, Reviews, HostVans)
│   ├── Vans/         # Public van listing and detail pages
│   ├── About.jsx     # About page
│   ├── Home.jsx      # Landing page
│   ├── Login.jsx     # User login page
│   └── Notfound.jsx  # 404 Error page
├── api.js            # API utility functions and service calls
├── index.jsx         # App entry point, mapping out routing architecture
├── server.js         # MirageJS mock server configuration handling mock endpoints
├── utils.js          # Helper functions (e.g., `requireAuth` logic)
└── package.json      # Project dependencies and npm scripts
```

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Navigate to the project directory** (if cloned):
   ```bash
   cd van-life
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the App**:
   Open your browser and navigate to `http://localhost:5173` (or the port Vite provides) to view the application.

## Routing Architecture

The application implements a robust routing strategy:
- **`Layout`**: The top-level layout that wraps all public-facing routes (`/`, `/about`, `/vans`, `/login`) to provide the main navigation header and footer.
- **`HostLayout`**: A nested layout that wraps the host dashboard routes (`/host/*`), providing a secondary navigation menubar specific to host settings.
- **Protected Routes (`/host/*`)**: All routes under the host dashboard define a `loader` that calls `requireAuth`. If a user is not authenticated, they are intercepted and redirected to `/login` before the route even renders.
- **Loaders & Actions**: Uses React Router data APIs (`loader`, `action`) at the route level to handle data fetching prior to navigation, and to handle form submissions (e.g., within `/login`).

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the application for production.
- `npm run lint`: Runs ESLint to check for code quality and finding potential bugs.
- `npm run preview`: Boots up a local server to preview the production build locally.

---
*Happy traveling with Van Life!* 🏕️