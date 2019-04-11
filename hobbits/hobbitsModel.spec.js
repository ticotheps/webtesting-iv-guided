const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

// returns 201
//
describe('hobbits model', () => {
    // important to cleanup before each test in SQL
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('insert()', () => {

        it('should insert the provided hobbits', async () => {
            await Hobbits.insert({ name: 'gaffer' }); // executes our endpoint
            await Hobbits.insert({ name: 'aragorn' });
            await Hobbits.insert({ name: 'gandalf' });

            // assertion to check the db and make sure the hobbit is there
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(3);
        });    
        
        it('should insert the provided hobbit', async () => {
            let hobbit = await Hobbits.insert({ name: 'gaffer' }); // executes our endpoint
            expect(hobbit.name).toBe('gaffer');

            hobbit = await Hobbits.insert({ name: 'sam' });
            expect(hobbit.name).toBe('sam');
        }); 
    });
});