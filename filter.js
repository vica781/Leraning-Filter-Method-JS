
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
// const people = [
//   {
//     name: 'Michael',
//     age: 23,
//   },
//   {
//     name: 'Lianna',
//     age: 16,
//   },
//   {
//     name: 'Paul',
//     age: 18,
//   },
// ];

// const oldEnough = people.filter(person => person.age >= 20);
// console.log(oldEnough);

// const getSpecificObject = people.filter(itm => 16 < itm.age < 23);
// console.log(getSpecificObject);

// const getPaul = people.filter(itm => itm.name === 'Paul');
// console.log(getPaul);

// const paul = people.filter(itm => itm.name === 'Paul')[0];
// console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// // First (longer example - doesn't work)
// // The issue was in spelling incorrectly 'length'
// const hasStrongSkills = student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// };
// const candidates = students.filter(hasStrongSkills);
// console.log(candidates);

// Second (shorter example - doesn't work)
// The issue was in spelling incorrectly 'length'
const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills2 = student => student.skills.filter(has5YearsExp).length > 0;
const candidates2 = students.filter(hasStrongSkills2);
console.log(candidates2);

const names = candidates2.map(candidate => candidate.name);
console.log(names);

// //Third (answer from ChartGPT - working)
// const filteredStudents = students.filter(student => {
//   return student.skills.some(skill => skill.yrsExperience >= 5);
// });
// console.log(filteredStudents);