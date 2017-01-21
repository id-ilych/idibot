var expect = require('expect');

var decrypt = require('./decrypt');

describe('decrypt', () => {
    it('should decrypt example', () => {
        expect(
            decrypt('uggcf://lbhgh.or/bUt5FWLEUN0')
        ).toEqual('https://youtu.be/oHg5SJYRHA0');
    });
});
