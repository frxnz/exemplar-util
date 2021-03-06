require('./common/bootstrap');

const test = require('ava');
const fileToViewObject = require('../lib/fileToViewObject');

test('file to view', async t => {

    const view = await fileToViewObject('./src/views/test.hbs');

    t.true('name' in view);
    t.is(view.name, 'test');
    t.is(view.type, 'view');

});