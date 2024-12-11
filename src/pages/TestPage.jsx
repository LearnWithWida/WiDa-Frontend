import React from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../coursesData";

const TestPage = () => {
  const { courseId } = useParams();
  const course = courseData.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.title} Exams</h1>
      <ul>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>Exam {index + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;