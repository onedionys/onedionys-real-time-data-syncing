// realTimeDataSyncing.test.js

const assert = require('assert');
const RealTimeDataSyncing = require('../src/realTimeDataSyncing');

describe('RealTimeDataSyncing', () => {
    it('should update data and notify listeners', () => {
        const rtds = new RealTimeDataSyncing();

        let notifiedData = null;
        const listener = (data) => {
            notifiedData = data;
        };

        rtds.addListener(listener);
        rtds.updateData('temperature', 25);

        assert.deepStrictEqual(notifiedData, { temperature: 25 });
    });
});
