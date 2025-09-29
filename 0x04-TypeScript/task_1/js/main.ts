// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Arrow function implementation ✅
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName.charAt(0) + ". " + lastName;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
