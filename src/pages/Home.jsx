import { useState } from "react";

function Home() {

    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="page">

            <h1>🏠 Home</h1>

            <p>Welcome back, Keerthi! Here's your academic overview.</p>

            {/* STATISTICS */}

            <div className="cards">

                <div className="card">
                    <h3>📚 Courses</h3>
                    <p>6</p>
                    <small>Currently enrolled</small>
                </div>

                <div className="card">
                    <h3>📝 Tasks</h3>
                    <p>12</p>
                    <small>4 pending</small>
                </div>

                <div className="card">
                    <h3>📊 Attendance</h3>
                    <p>92%</p>
                    <small>Good attendance</small>
                </div>

                <div className="card">
                    <h3>🎓 CGPA</h3>
                    <p>7.6</p>
                    <small>Current semester</small>
                </div>

            </div>


            {/* ATTENDANCE */}

            <div className="dashboard-section">

                <h2>📊 Attendance</h2>

                <div className="progress">

                    <div
                        className="progress-fill"
                        style={{ width: "92%" }}
                    ></div>

                </div>

                <p>92% Attendance</p>

            </div>


            {/* UPCOMING TASKS */}

            <div className="dashboard-section">

                <h2>⏰ Upcoming Tasks</h2>

                <div className="home-task">
                    <span>React Assignment</span>
                    <span className="badge">Tomorrow</span>
                </div>

                <div className="home-task">
                    <span>Database Record Submission</span>
                    <span className="badge">2 Days</span>
                </div>

                <div className="home-task">
                    <span>Web Technology Exam</span>
                    <span className="badge">5 Days</span>
                </div>

            </div>


            {/* QUICK ACTION */}

            <div className="dashboard-section">

                <h2>⚡ Quick Action</h2>

                <button
                    className="primary-btn"
                    onClick={() => setShowMessage(true)}
                >
                    📢 Check Notifications
                </button>

                {showMessage && (
                    <p className="success-message">
                        🔔 You have 3 new notifications!
                    </p>
                )}

            </div>

        </div>
    );
}

export default Home;