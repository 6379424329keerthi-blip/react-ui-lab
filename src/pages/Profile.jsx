import { useState } from "react";

function Profile() {

    const [name, setName] = useState("Keerthi");

    const [department, setDepartment] =
        useState("Computer Science");

    const [editing, setEditing] = useState(false);


    return (

        <div className="page profile-page">

            <h1>👤 Profile</h1>

            <p>Manage your personal information.</p>


            <div className="profile-card">

                <img
                    src="/profile.png"
                    alt="Profile"
                />


                {editing ? (

                    <>

                        <input
                            className="profile-input"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />

                        <input
                            className="profile-input"
                            value={department}
                            onChange={(e) =>
                                setDepartment(e.target.value)
                            }
                        />

                        <button
                            className="primary-btn"
                            onClick={() =>
                                setEditing(false)
                            }
                        >
                            💾 Save Profile
                        </button>

                    </>

                ) : (

                    <>

                        <h2>{name}</h2>

                        <p>{department} Student</p>

                        <button
                            className="primary-btn"
                            onClick={() =>
                                setEditing(true)
                            }
                        >
                            ✏️ Edit Profile
                        </button>

                    </>

                )}


                <hr />


                <div className="profile-info">

                    <p>
                        <b>📧 Email:</b>
                        keerthiadithya@karunya.edu.in
                    </p>

                    <p>
                        <b>🏫 Department:</b>
                        B.Tech Computer Science and Engineering
                    </p>

                    <p>
                        <b>📅 Year:</b>
                        III Year
                    </p>

                    <p>
                        <b>🎓 CGPA:</b>
                        7.6
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Profile;