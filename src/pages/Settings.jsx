import { useState } from "react";

function Settings({ darkMode, setDarkMode }) {

    const [notifications, setNotifications] =
        useState(true);

    const [emailNotifications, setEmailNotifications] =
        useState(false);


    return (

        <div className="page">

            <h1>⚙️ Settings</h1>

            <p>Customize your dashboard.</p>


            <div className="settings-card">

                <h3>🎨 Appearance</h3>

                <div className="setting-row">

                    <span>
                        Dark Mode
                    </span>

                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                    >
                        {darkMode
                            ? "☀️ Light Mode"
                            : "🌙 Dark Mode"}
                    </button>

                </div>


                <h3 className="settings-title">
                    🔔 Notifications
                </h3>


                <div className="setting-row">

                    <span>
                        Push Notifications
                    </span>

                    <button
                        onClick={() =>
                            setNotifications(!notifications)
                        }
                    >
                        {notifications
                            ? "ON"
                            : "OFF"}
                    </button>

                </div>


                <div className="setting-row">

                    <span>
                        Email Notifications
                    </span>

                    <button
                        onClick={() =>
                            setEmailNotifications(
                                !emailNotifications
                            )
                        }
                    >
                        {emailNotifications
                            ? "ON"
                            : "OFF"}
                    </button>

                </div>


                <h3 className="settings-title">
                    🔐 Account
                </h3>


                <div className="setting-row">

                    <span>
                        Change Password
                    </span>

                    <button>
                        Change
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Settings;