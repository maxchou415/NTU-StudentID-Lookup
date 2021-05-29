const departmentList = require('./data/departments.json')

module.exports = ({ studentId = '' }) => {
  const studentIdArray = [...studentId]
  if (studentIdArray.length !== 9) {
    return undefined
  }

  const departmentCode = `${studentIdArray[3]}${studentIdArray[4]}${studentIdArray[5]}0`

  let studentDepartment
  departmentList.forEach((department) => {
    if (department.code === departmentCode) {
      studentDepartment = department.shortForm
    } else {
      return undefined
    }
  })

  return studentDepartment
}
