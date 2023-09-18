const printMenuForDay = (dayOfWeek) => {
  switch (dayOfWeek.toLowerCase()) {
    case "monday":
      console.log("Monday Menu: Spaghetti and Meatballs");
      break;
    case "tuesday":
      console.log("Tuesday Menu: Tacos");
      break;
    case "wednesday":
      console.log("Wednesday Menu: Grilled Chicken Salad");
      break;
    case "thursday":
      console.log("Thursday Menu: Sushi");
      break;
    case "friday":
      console.log("Friday Menu: Pizza");
      break;
    case "saturday":
      console.log("Saturday Menu: BBQ Ribs");
      break;
    case "sunday":
      console.log("Sunday Menu: Pancakes and Waffles");
      break;
    default:
      console.log("Invalid day of the week");
  }
};


printMenuForDay("Tuesday"); 
printMenuForDay("Saturday"); 
printMenuForDay("InvalidDay"); 
