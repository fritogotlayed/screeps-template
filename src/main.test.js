const screepsConst = require('../helpers/screeps-consts')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const main = require('./main')

describe('main', () => {
    describe('module function', () => {
        it('module method runs without error', () => {
            // Arrange

            // Act
            let ret = main.loop()

            // Assert
            chai.expect(ret).to.be.equal('trash')
        })
    })
})