let schoolStatus = "Not applicable";

fetch('./Data.json')
  .then(response => response.json())
  .then(people => {
    people.forEach(person => {
      if (person.age >= 5 && person.age <= 18) {
        schoolStatus = "In school";
      } else if (person.age < 5 || person.age > 18) {
        schoolStatus = "Not in school";
      }

      switch (schoolStatus) {
        case "In school":
          console.log(`${person.name}: goes to school`);
          break;
        case "Not in school":
          console.log(`${person.name}: does not go to school`);
          break;
        default:
          console.log(`${person.name}: Unknown school status`);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });






