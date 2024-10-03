// If user is logged in isLoggedIn === true, the code checks the user's role (userRole):

// if userRole is "Employee", it sets userMessage as "Access granted to Dietary Services!"
// if userRole is "Enrolled Member", it sets userMessage as "Access granted to Dietary Services. Request a dietician appointment!"
// if userRole is "Subscriber", it sets userMessage as "Limited access granted to Dietary Services!"
// if userRole is "Non-Subscriber", it sets userMessage as "No access to Dietary Services. Please enroll or subscribe."

let userType = "Employee";
let accessLevel;

switch (userType) {
    case "Employee":
        accessLevel = "Authorised to have access to Dietary Services";
        break;
    case "Enrolled Member":
        accessLevel = "Authorised to have access to Dietary Services and one-to-one interaction with dietician";
        break;
    case "Subscriber":
        accessLevel = "Authorised to have partial access to Dietary Services";
        break;
    case "Non-subscriber":
        accessLevel = "Needs to enroll or subscribe first to avail this facility";
        break;
    default:
        accessLevel = "Invalid Role";
}

// See the output with this code:

console.log("Access Level:", accessLevel);