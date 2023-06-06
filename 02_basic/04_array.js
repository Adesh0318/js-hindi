const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}
// course.courseInstructor
// If we want to add the value three time it is very bad method
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

