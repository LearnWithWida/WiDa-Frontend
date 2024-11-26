import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../coursesData";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div>
        <h1>Course Not Found</h1>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="course-details">
      <img src={course.image} alt={course.name} />
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <h3>Modules:</h3>
      <ul>
        {course.modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Back to Courses</button>
    </div>
  );
};

export default CourseDetails;
