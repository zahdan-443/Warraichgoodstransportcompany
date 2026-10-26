import { describe, it, expect } from 'vitest';
import { normalizeBiltyNo } from '../lib/firebase';

describe('Firebase Utility Functions', () => {
  it('should normalize bilty numbers to uppercase and trimmed format', () => {
    expect(normalizeBiltyNo(' ah-0113-off-f6hu ')).toBe('AH-0113-OFF-F6HU');
    expect(normalizeBiltyNo('wgt-1234')).toBe('WGT-1234');
    expect(normalizeBiltyNo('')).toBe('');
  });
});
