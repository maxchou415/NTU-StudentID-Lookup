const departmentList = require('./data/departments.json')

module.exports = ({ studentId = '' }) => {
  const studentIdArray = [...studentId]
  if (studentIdArray.length !== 9) {
    throw new Error('INVALID_FORMAT')
  }

  let departmentCode = `${studentIdArray[3]}${studentIdArray[4]}${studentIdArray[5]}0`
  departmentCode = departmentCode.toUpperCase()

  let studentDepartment
  departmentList.forEach((department) => {
    if (department.code === departmentCode) {
      studentDepartment = department.full_name
    }
  })

  if (!studentDepartment) {
    throw new Error('INVALID_DEPARTMENT_CODE')
  }
  return studentDepartment
}
