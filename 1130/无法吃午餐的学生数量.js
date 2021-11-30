// 1700



/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let val = null;
    let i =0;
    while(i < students.length){
        if(students[0] === sandwiches[0]){
            students.shift()
            sandwiches.shift()
        }else {
            val = students.shift()
            students.push(val)
        }
        if( !students.includes(sandwiches[0])) {
            break;
        }
    }
    return students.length
};