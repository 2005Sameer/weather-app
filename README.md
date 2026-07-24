# weather-app
a simple weather application describing weather of searched cities using APIs.

**Weature-app** is a sleek, feature-rich weather application built with React, Vite, and Tailwind CSS. It delivers real-time meteorological data, interactive forecasts, dynamic background themes based on current weather conditions, and location-based searching with autocomplete.

---
#Preview & Features

-Real-Time Weather Data: Instant access to temperature, apparent temperature ("feels like"), humidity, wind speed & direction, atmospheric pressure, visibility, and UV index.
-Dynamic Visual Themes: The UI background and color palette seamlessly shift based on weather conditions (sunny, rainy, snowy, thunderstorm, cloudy, night).
-Interactive 5-Day / Hourly Forecast: Comprehensive charts and cards detailing upcoming weather trends.
-Smart City Search & Autocomplete: Fast location lookup backed by the OpenWeatherMap Geocoding API with quick-access history for recent searches.
-Geolocation Support: One-click button to automatically fetch weather data for your current GPS coordinates.
-Unit Conversion: Seamlessly toggle between Metric (°C, km/h) and Imperial (°F, mph) measurement systems.
-Responsive Design: Fully optimized for mobile, tablet, and desktop viewports with smooth CSS transitions.

---

#Tech Stack

*   **Frontend Library:** [React 18](https://reactjs.org/) (Functional Components & Hooks)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling & Design:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Charts / Visualizations:** [Chart.js](https://www.chart.js/) / [react-chartjs-2](https://react-chartjs-2.js.org/)
*   **API Provider:** [OpenWeatherMap API](https://openweathermap.org/api)

---

#Project Structure

```text
weather-app/
├── public/
│   ├── favicon.ico
│   └── weather-illustration.svg
├── src/
│   ├── assets/           # Images, SVGs, and static assets
│   ├── components/       # Reusable UI components
│   │   ├── CurrentWeather.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherMetrics.jsx
│   │   └── HourlyChart.jsx
│   ├── context/          # React Context (Theme & Units)
│   ├── hooks/            # Custom React hooks (useWeather, useLocalStorage)
│   ├── services/         # API integration layer (weatherService.js)
│   ├── utils/            # Helper functions (date formatting, unit converters)
│   ├── App.jsx           # Main application root
│   ├── index.css         # Tailwind directives and custom global styles
│   └── main.js           # Application entry point
├── .env.example          # Environment variable template
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

#🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

*   Node.js (v16.x or higher recommended)
*   npm or yarn package manager
*   An active API key from [OpenWeatherMap](https://openweathermap.org/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-weather-app.git
    cd react-weather-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory based on the provided `.env.example`:
    ```env
    VITE_WEATHER_API_KEY=your_actual_openweathermap_api_key_here
    VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Navigate to `http://localhost:5173` to view the application.

---

## 🧪 Available Scripts

In the project directory, you can run:

*   `npm run dev` — Starts the local development server with Hot Module Replacement (HMR).
*   `npm run build` — Bundles the application for production into the `dist` folder.
*   `npm run preview` — Locally previews the production build.
*   `npm run lint` — Runs ESLint to check for code quality and syntax issues.

---

## ⚙️ Configuration & API Usage

This application consumes data from two primary endpoints of the OpenWeatherMap API:
1.  **Current Weather Data API:** Fetches real-time meteorological conditions for a given city or lat/lon coordinates.
2.  **5-Day / 3-Hour Forecast API:** Retrieves projected weather conditions over the next 5 days.

Make sure your API key is properly restricted or kept secret in production environments.

