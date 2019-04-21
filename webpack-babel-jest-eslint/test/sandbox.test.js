import sandbox from '../src/sandbox';

test('returns horse', () => {
  expect(sandbox()).toBe('horse');
});
