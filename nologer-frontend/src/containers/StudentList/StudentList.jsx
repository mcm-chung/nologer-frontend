import React, { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((res) => {
        setStudents(res);
      });
  }, []);

  return students.map((student) => (
    <div>
      <Link to={`student/${student.id}`}></Link>
    </div>
  ));
};

export default StudentList;
