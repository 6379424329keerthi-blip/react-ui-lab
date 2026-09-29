import { useState } from "react";

function Courses() {

    const [search, setSearch] = useState("");

    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "Web Technology",
            teacher: "Dr. Karthik",
            progress: 95,
            enrolled: true
        },
        {
            id: 2,
            name: "Database Management",
            teacher: "Dr. Denish",
            progress: 70,
            enrolled: true
        },
        {
            id: 3,
            name: "Theory of Computation",
            teacher: "Dr. Reeyana",
            progress: 60,
            enrolled: true
        },
        {
            id: 4,
            name: "Data Science Ecosystem",
            teacher: "Dr. Anusha Bamini",
            progress: 90,
            enrolled: true
        },
        {
            id: 5,
            name: "Quantum Computing",
            teacher: "Dr. Raj Tilak",
            progress: 60,
            enrolled: false
        }
    ]);


    const toggleEnrollment = (id) => {

        setCourses(
            courses.map((course) =>
                course.id === id
                    ? {
                        ...course,
                        enrolled: !course.enrolled
                    }
                    : course
            )
        );

    };


    const filteredCourses = courses.filter((course) =>
        course.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    return (

        <div className="page">

            <h1>📚 Courses</h1>

            <p>Manage your enrolled courses.</p>


            {/* SEARCH */}

            <input
                className="search-box"
                type="text"
                placeholder="🔍 Search courses..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />


            {/* COURSES */}

            <div className="courses">

                {filteredCourses.map((course) => (

                    <div
                        className="course-card"
                        key={course.id}
                    >

                        <div className="course-header">

                            <h3>{course.name}</h3>

                            <span>
                                {course.progress}%
                            </span>

                        </div>

                        <p>
                            👨‍🏫 {course.teacher}
                        </p>


                        <div className="progress">

                            <div
                                className="progress-fill"
                                style={{
                                    width:
                                        course.progress + "%"
                                }}
                            ></div>

                        </div>


                        <p>
                            Course Completion
                        </p>


                        <button
                            className={
                                course.enrolled
                                    ? "secondary-btn"
                                    : "primary-btn"
                            }
                            onClick={() =>
                                toggleEnrollment(course.id)
                            }
                        >

                            {course.enrolled
                                ? "✓ Enrolled"
                                : "+ Enroll"}

                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Courses;