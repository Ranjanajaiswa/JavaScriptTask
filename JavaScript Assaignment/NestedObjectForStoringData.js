const company = {
  name: "ABC Inc.",
  Place: "Pune",
  employees: [
    {
      id: 1001,
      name: "Ranjana Jaiswal",
      department: "Engineering",
      position: "Software Engineer",
      salary: 75000,
    },
    {
      id: 1002,
      name: "Priya Shrivastava",
      department: "Marketing",
      position: "Analyst",
      salary: 8000,
    },
    {
      id: 1003,
      name: "Aagman Mehto",
      department: "Human Resources",
      position: "HR",
      salary: 90000,
    },
    {
      id: 1004,
      name: "MOhit Patel",
      department: "Back Office Support",
      position: "Back Offic Specialist",
      salary: 50000,
    },
  ],
};

console.log(company.name);
console.log(company.Place);
console.log(company.employees[0].name);
console.log(company.employees[1].position);
console.log(company.employees[2].name);
console.log(company.employees[3].name);
