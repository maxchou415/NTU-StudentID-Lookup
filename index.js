const departmentList = require('./data/departments.json')

module.exports = ({ studentId = '' }) => {
  const studentIdArray = [...studentId]
  if (studentIdArray.length !== 9) {
    throw new Error('INVALID_FORMAT')
  }

  const departmentCode = `${studentIdArray[3]}${studentIdArray[4]}${studentIdArray[5]}0`

  let studentDepartment
  departmentList.forEach((department) => {
    if (department.code === departmentCode) {
      studentDepartment = department.shortForm
    }
  })

  if (!studentDepartment) {
    throw new Error('INVALID_DEPARTMENT_CODE')
  }
  return studentDepartment
}
