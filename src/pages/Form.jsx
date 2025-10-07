import React, { useState } from "react";

function Form() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    className: "",
    section: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    agree: false,
    hobbies: [],
  });
  const [show, setShow] = useState(false);

  function input(e) {
    const { name, value, type, checked } = e.target;

    // handle multiple checkboxes named 'hobbies' (store as array)
    if (type === "checkbox" && name === "hobbies") {
      setStudent((prev) => {
        const prevHobbies = prev.hobbies || [];
        if (checked) {
          // add hobby if not already present
          return { ...prev, hobbies: [...prevHobbies, value] };
        } else {
          // remove hobby
          return { ...prev, hobbies: prevHobbies.filter((h) => h !== value) };
        }
      });
      return;
    }

    // default handling (including single checkbox 'agree')
    setStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function showData(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header bg-primary bg-gradient text-white text-center">
                <h5 className="mb-0">Student Registration</h5>
              </div>
              <div className="card-body p-4">
                <form onSubmit={showData}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label small">
                      Student Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      onChange={input}
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="roll" className="form-label small">
                        Roll No
                      </label>
                      <input
                        id="roll"
                        name="roll"
                        onChange={input}
                        className="form-control"
                        placeholder="2025-001"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="className" className="form-label small">
                        Class
                      </label>
                      <input
                        id="className"
                        name="className"
                        onChange={input}
                        className="form-control"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <label htmlFor="section" className="form-label small">
                        Section
                      </label>
                      <input
                        id="section"
                        name="section"
                        onChange={input}
                        className="form-control"
                        placeholder="A"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="dob" className="form-label small">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        type="date"
                        name="dob"
                        onChange={input}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label small">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={input}
                        className="form-control"
                        placeholder="student@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label small">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        onChange={input}
                        className="form-control"
                        placeholder="+91 11111 11111"
                      />
                    </div>
                  </div>

                  <div className="mb-3 mt-3">
                    <label htmlFor="address" className="form-label small">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      onChange={input}
                      className="form-control"
                      rows="3"
                      placeholder="Home address"
                    />
                  </div>

                  <div className="mb-3">
                    <span className="form-label small d-block mb-2">
                      Gender
                    </span>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gMale"
                        value="Male"
                        checked={student.gender === "Male"}
                        onChange={input}
                      />
                      <label className="form-check-label small" htmlFor="gMale">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gFemale"
                        value="Female"
                        checked={student.gender === "Female"}
                        onChange={input}
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="gFemale"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gOther"
                        value="Other"
                        checked={student.gender === "Other"}
                        onChange={input}
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="gOther"
                      >
                        Other
                      </label>
                    </div>
                  </div>

                  {/* Interests / Hobbies - multiple checkboxes */}
                  <div className="mb-3">
                    <label className="form-label small d-block mb-2">
                      Interests
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobbyReading"
                        value="Reading"
                        checked={student.hobbies?.includes("Reading")}
                        onChange={input}
                      />
                      <label className="form-check-label small" htmlFor="hobbyReading">
                        Reading
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobbySports"
                        value="Sports"
                        checked={student.hobbies?.includes("Sports")}
                        onChange={input}
                      />
                      <label className="form-check-label small" htmlFor="hobbySports">
                        Sports
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobbyMusic"
                        value="Music"
                        checked={student.hobbies?.includes("Music")}
                        onChange={input}
                      />
                      <label className="form-check-label small" htmlFor="hobbyMusic">
                        Music
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobbyCoding"
                        value="Coding"
                        checked={student.hobbies?.includes("Coding")}
                        onChange={input}
                      />
                      <label className="form-check-label small" htmlFor="hobbyCoding">
                        Coding
                      </label>
                    </div>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      id="agree"
                      className="form-check-input"
                      type="checkbox"
                      name="agree"
                      checked={student.agree}
                      onChange={input}
                    />
                    <label className="form-check-label small" htmlFor="agree">
                      I confirm the information is correct
                    </label>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Register Student
                    </button>
                  </div>
                </form>

                {show && (
                  <div className="mt-4">
                    <h6 className="mb-2">Submitted Student Data</h6>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Name:</strong> {student.name || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Roll No:</strong> {student.roll || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Class:</strong> {student.className || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Section:</strong> {student.section || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>DOB:</strong> {student.dob || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Email:</strong> {student.email || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Phone:</strong> {student.phone || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Address:</strong> {student.address || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Gender:</strong> {student.gender || "N/A"}
                      </li>
                      <li className="list-group-item">
                        <strong>Interests:</strong>{" "}
                        {student.hobbies && student.hobbies.length > 0 ? (
                          student.hobbies.join(", ")
                        ) : (
                          <em>None selected</em>
                        )}
                      </li>
                      <li className="list-group-item">
                        <strong>Confirmed:</strong>{" "}
                        {student.agree ? "Yes" : "No"}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
