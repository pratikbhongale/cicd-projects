const { add } = require('../src/index');
test('add numbers correctly', () => {
	expect(add(2,3)).toBe(5);
});
