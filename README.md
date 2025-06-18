# 🕒 Pomodoro Timer

**Pomodoro Timer** is a responsive web application that supports the Pomodoro time management technique. It allows users to manage tasks, track productivity, and visualize progress with statistics. Built using **React + TypeScript**, the app utilizes modern technologies such as **TailwindCSS**, **Formik**, **Recharts**, and **React Router v6**.

## ✨ Features

- ⏱️ Timer with modes: *Pomodoro*, *Short Break*, and *Long Break*
- ✅ Task list with support for adding, editing, deleting, and marking tasks as completed
- 🔁 Automatically increments Pomodoros for the active task
- 📈 Charts:
  - Weekly Pomodoro sessions overview
  - Pomodoros per task comparison
- 🧠 Motivational quotes displayed on the home page
- ⚙️ Settings page with customizable session and break durations
- 💬 Contextual toast notifications
- 🌙 Dark mode support
- 📱 Fully responsive layout for mobile and desktop

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** – blazing-fast bundler
- **TailwindCSS** – utility-first CSS
- **Formik + Yup** – form handling and validation
- **Recharts** – charting library
- **React Router v6** – client-side routing
- **Context API** – state management

## 🧩 Project Structure

```
src/
├── components/       # Reusable components (Timer, Tasks, UI, Stats, ...)
├── context/          # Context providers (TaskContext, StatisticsContext)
├── helpers/          # Utility functions (e.g., getPast7Days)
├── hooks/            # Custom hooks (e.g., useTimer)
├── pages/            # Application pages (Home, Tasks, Settings, NotFound)
├── router/           # Route definitions
├── styles/           # Custom chart styles, Tailwind config
└── App.tsx           # Main app component
```

## ▶️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## 🧪 Storybook

To preview UI components in isolation:

```bash
npm run storybook
```

## 🧹 Code Formatting

This project uses **Prettier** and **ESLint** to maintain consistent code style.

### Format the code:
```bash
npm run format
```

### Check for linting issues:
```bash
npm run lint
```

### Fix linting issues automatically:
```bash
npm run lint:fix
```

> 💡 It’s recommended to enable auto-formatting on save in your IDE (WebStorm, VSCode, etc.).

## 📦 Production Build

```bash
npm run build
```
