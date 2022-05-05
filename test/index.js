/* eslint no-undef: "error" */
/* eslint-env node */

const expect = require('chai').expect
const tool = require('../index')

describe('Find department name by student id', function () {
  it('First character uppercase with legal department code', function () {
    const department = tool({ studentId: 'B09902007' })
    expect(department).to.equal('資訊工程學系')
  })
  it('First character lowercase with legal department code', function () {
    const department = tool({ studentId: 'b09902007' })
    expect(department).to.equal('資訊工程學系')
  })
  it('EE Student ID', function () {
    const department = tool({ studentId: 'B09901001' })
    expect(department).to.equal('電機工程學系')
  })
  it('CSIE Student ID', function () {
    const department = tool({ studentId: 'T09902345' })
    expect(department).to.equal('資訊工程學系')
  })
  it('Department Code starts with letter', function () {
    const department = tool({ studentId: 'B09B02100' })
    expect(department).to.equal('生化科技學系')
  })
  it('Part-time Master Student ID, Department Code starts with letter', function () {
    const department = tool({ studentId: 'P09751100' })
    expect(department).to.equal('創業創新管理碩士在職專班')
  })
  it('Full-time Master Student ID, Department Code starts with letter', function () {
    const department = tool({ studentId: 'R09922100' })
    expect(department).to.equal('資訊工程學研究所')
  })
  it('Illegal department code', function () {
    expect(() => {
      tool({ studentId: 'b09Z02007' })
    }).to.throw(Error, /INVALID_DEPARTMENT_CODE/)
  })
  it('Illegal format (Length)', function () {
    expect(() => {
      tool({ studentId: 'b09Z0200' })
    }).to.throw(Error, /INVALID_FORMAT/)
  })
})
