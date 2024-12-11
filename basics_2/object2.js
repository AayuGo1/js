const course = {
    courseName:"javascript",
courseprice:"1000",
courseteacher:"hitesh"
}

// console.log(course.courseName); syntax
// const{courseName}= course
// console.log(courseName);
        //  OR 
const{courseName:Name}= course
console.log(Name);

