const departmentList = require('./data/departments.json')

module.exports = ({ studentId = '' }) => {
  if (!/^[a-zA-Z]{1}[0-9]{2}[a-zA-Z0-9]{6}$/.test(studentId)) {
    throw new Error('INVALID_FORMAT')
  }
  const studentIdArray = [...studentId]

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
