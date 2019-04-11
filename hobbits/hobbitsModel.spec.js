const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

// returns 201
//
describe('hobbits model', () => {

    describe('insert()', () => {

        it('should insert the provided hobbit', async () => {
            await Hobbits.insert({ name: 'gaffer' }); // executes our endpoint

            // assertion to check the db and make sure the hobbit is there
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        });        
    });

});