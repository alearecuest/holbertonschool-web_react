interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ignacio",
  lastName: "Capezzolo",
  age: 30,
  location: "Minas"
};

const student2: Student = {
  firstName: "Jorge",
  lastName: "Beritan",
  age: 24,
  location: "La Habana"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');
  
  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';
  firstNameHeader.style.border = '1px solid black';
  locationHeader.style.border = '1px solid black';
  firstNameHeader.style.padding = '8px';
  locationHeader.style.padding = '8px';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', renderTable);
