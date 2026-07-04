// sample.ts -- provided for GT1 Part 1
// Task: convert to TypeScript and annotate all variables, parameters, and return types.

type Role = "student" | "admin" | "instructor";
type Grade = "A" | "B" | "C" | "F";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  score: number;
}

function getUser(id: number): User {
  return {
    id: id,
    name: "Juan dela Cruz",
    email: "juan@example.com",
    role: "student",
    isActive: true,
    score: 95.5,
  };
}

function calculateGrade(score: number, maxScore: number): Grade {
  const percentage: number = (score / maxScore) * 100;

  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  return "F";
}

function formatCourse(name: string, units: number, semester: string): string {
  return `${name} (${units} units) - ${semester}`;
}

const user: User = getUser(1);
const grade: Grade = calculateGrade(85, 100);
const courseSummary: string = formatCourse("IT Elective 4", 3, "1st Semester");

console.log("User:", user);
console.log("Grade:", grade);
console.log("Course:", courseSummary);