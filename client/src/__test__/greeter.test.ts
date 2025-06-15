import { greeter } from '../lib/greeter.ts';

describe('greeter', () => {
  it('returns "Good morning" between 5 and 11', () => {
    expect(greeter(5)).toBe("Good morning");
    expect(greeter(11)).toBe("Good morning");
  });

  it('returns "Good afternoon" between 12 and 16', () => {
    expect(greeter(12)).toBe("Good afternoon");
    expect(greeter(16)).toBe("Good afternoon");
  });

  it('returns "Good evening" between 17 and 20', () => {
    expect(greeter(17)).toBe("Good evening");
    expect(greeter(20)).toBe("Good evening");
  });

  it('returns "Good night" between 21 and 4', () => {
    expect(greeter(21)).toBe("Good night");
    expect(greeter(4)).toBe("Good night");
  });

  it('throws error for invalid hour', () => {
    expect(() => greeter(-1)).toThrow();
    expect(() => greeter(24)).toThrow();
  });
});

