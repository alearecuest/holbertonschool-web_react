console.log("Script loaded");

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log("Content of teacher3:");
console.log(teacher3);

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, printing teacher3 again:");
  console.log(teacher3);
  
  const div = document.createElement('div');
  div.textContent = 'Check the console to see object teacher3';
  document.body.appendChild(div);
});


// should print:
// object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"