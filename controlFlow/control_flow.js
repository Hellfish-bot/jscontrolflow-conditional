// USING IF ELSE STATEMENT

// If userRole is "admin", the code with assign accessLevel as "Full access granted".
// If not, it will proceed to check if userRole is "manager".
// If userRole is "manager", it will assign accessLevel as "Limited access granted".
// If userRole is neither "admin" nor "manager", the code will assign accessLevel as "No access granted".

let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// Based on the value of userRole, the accessLevel variable will be set to one of the following:

// "Full access granted" if userRole === "admin"
// "Limited access granted" if userRole === "manager"
// "No access granted" for any other value of userRole

// See the output using this code:

console.log("Access Level:", accessLevel);

// ------------------------------------------------------------------------------------------------------------------------------

// USING NESTED IF ELSE STATEMENT

// If user is logged in isLoggedIn === true, the code checks the user's role (userRole):
// If userRole is "admin", it sets userMessage to "Welcome, Admin!".
// If userRole is not "admin", it sets userMessage to "Welcome, User!".

// If User is not logged in isLoggedIn === false, then:
// The message is set to "Please log in to access the system."

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

// See the output using this code:

console.log("User Message:", userMessage);

// ---------------------------------------------------------------------------------------------------------------------------

// USING SWITCH STATEMENT

// The output for cases depend upon its value, such as:

//Case "admin":
//    If userType is "admin", userCategory is assigned as "Administrator".
//    break; exits the switch statement after the assignment.

//Case "manager":
//    If userType is "manager", userCategory is assigned as "Manager".
//    break; exits the switch statement after the assignment.

//Case "subscriber":
//    If userType is "subscriber", userCategory is assigned as "Subscriber".
//    break; exits the switch statement after the assignment.

//Default Case:
//    If userType doesn't match any defined cases ("admin", "manager", or "subscriber"), userCategory is assigned as "Unknown".
 
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

// See the output using this code:

console.log("User Category:", userCategory);