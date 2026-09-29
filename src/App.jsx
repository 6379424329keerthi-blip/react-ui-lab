import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {

    // Which page is currently selected
    const [page, setPage] = useState("home");

    // Menu open / close
    const [menuOpen, setMenuOpen] = useState(false);

    // Dark mode
    const [darkMode, setDarkMode] = useState(false);


    // Change page
    const openPage = (selectedPage) => {

        setPage(selectedPage);

        // Close menu after selecting a page
        setMenuOpen(false);
    };


    // Display selected page
    const showPage = () => {

        if (page === "home") {
            return <Home />;
        }

        if (page === "courses") {
            return <Courses />;
        }

        if (page === "tasks") {
            return <Tasks />;
        }

        if (page === "profile") {
            return <Profile />;
        }

        if (page === "settings") {
            return (
                <Settings
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
            );
        }

    };


    return (

        <div className={darkMode ? "app dark" : "app"}>


            {/* =====================
                TOP NAVBAR
            ===================== */}

            <nav className="top-navbar">

                {/* MENU BUTTON */}

                <button
                    className="menu-toggle"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                >
                    ☰ Menu
                </button>


                {/* CURRENT PAGE */}

                <h2>
                    {page === "home" && "🏠 Home"}

                    {page === "courses" && "📚 Courses"}

                    {page === "tasks" && "📝 Tasks"}

                    {page === "profile" && "👤 Profile"}

                    {page === "settings" && "⚙️ Settings"}
                </h2>


                {/* NOTIFICATION */}

                <div className="top-notification">
                    🔔
                    <span>3</span>
                </div>


                {/* PROFILE */}

                <div className="top-profile">

                    <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Profile" />

                    <span>KEERTHI ADITHYA URK24CS1135</span>

                </div>

            </nav>


            {/* =====================
                MENU
            ===================== */}

            {menuOpen && (

                <>

                    {/* DARK BACKGROUND */}

                    <div
                        className="menu-overlay"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    ></div>


                    {/* MENU PANEL */}

                    <div className="menu-panel">

                        <div className="menu-header">

                            <h2>EduDashboard</h2>

                            <button
                                onClick={() =>
                                    setMenuOpen(false)
                                }
                            >
                                ✕
                            </button>

                        </div>


                        <div className="menu-items">

                            {/* HOME */}

                            <button
                                className={
                                    page === "home"
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    openPage("home")
                                }
                            >
                                <span>🏠</span>
                                <span>Home</span>
                            </button>


                            {/* COURSES */}

                            <button
                                className={
                                    page === "courses"
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    openPage("courses")
                                }
                            >
                                <span>📚</span>
                                <span>Courses</span>
                            </button>


                            {/* TASKS */}

                            <button
                                className={
                                    page === "tasks"
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    openPage("tasks")
                                }
                            >
                                <span>📝</span>
                                <span>Tasks</span>
                            </button>


                            {/* PROFILE */}

                            <button
                                className={
                                    page === "profile"
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    openPage("profile")
                                }
                            >
                                <span>👤</span>
                                <span>Profile</span>
                            </button>


                            {/* SETTINGS */}

                            <button
                                className={
                                    page === "settings"
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    openPage("settings")
                                }
                            >
                                <span>⚙️</span>
                                <span>Settings</span>
                            </button>

                        </div>

                    </div>

                </>

            )}


            {/* =====================
                PAGE CONTENT
            ===================== */}

            <main className="content">

                {showPage()}

            </main>


        </div>
    );
}

export default App;