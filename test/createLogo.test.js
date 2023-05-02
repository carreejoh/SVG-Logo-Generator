const logo = require('../utils/createLogo.js');

describe('Generator', () => {
    describe('returnSVG', () => {
        it('should return an svg file that is a circle', () => {
       
            const svgCircleTest = new logo.generateSVG("car", "black", "Circle", "green");
            expect(svgCircleTest).toEqual()
        })
    })
})