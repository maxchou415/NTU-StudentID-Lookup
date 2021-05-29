/* eslint no-undef: "error" */
/* eslint-env node */

const expect = require('chai').expect
const tool = require('../index')

describe('Find department name by student id', function () {
  it('First character uppercase with legal department code', function () {
    const department = tool({ studentId: 'B09902007' })
    expect(department).to.equal('資工系')
  })
  it('First character lowercase with legal department code', function () {
    const department = tool({ studentId: 'b09902007' })
    expect(department).to.equal('資工系')
  })
  it('EE Student ID', function () {
    const department = tool({ studentId: 'B09901001' })
    expect(department).to.equal('電機系')
  })
  it('CSIE Student ID', function () {
    const department = tool({ studentId: 'T09902345' })
    expect(department).to.equal('資工系')
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
