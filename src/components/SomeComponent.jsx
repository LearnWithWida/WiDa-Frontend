const handleCourseClick = (courseName) => {
  navigate(`/course/${encodeURIComponent(courseName.toLowerCase())}`);
  // or
  navigate(`/course-details/${encodeURIComponent(courseName.toLowerCase())}`);
}; 