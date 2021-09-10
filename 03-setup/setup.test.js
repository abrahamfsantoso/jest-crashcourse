// let animals = [
// 	'elephant',
// 	'zebra',
// 	'bear',
// 	'tiger',
// ];

// beforeAll(() => {
//   console.log('BEFORE ALL');
// });

// beforeEach(() => {
//   console.log('BEFORE EACH');
//   animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// afterEach(() => {
//   console.log('AFTER EACH');
//   animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// afterAll(() => {
//   console.log('AFTER ALL');
// });

describe('animals array', () => {
  beforeEach(() => {
    console.log('BEFORE EACH');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  it('should add animal to end of array', () => {
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });

  it('should add animal to beginning of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  it('should have initial length of 4', () => {
    expect(animals.length).toBe(4);
  });
});

describe('test something else', () => {
  it('true should be truthy', () => {
    expect(true).toBeTruthy();
  });
});
