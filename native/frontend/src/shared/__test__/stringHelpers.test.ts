import { expect, test } from 'vitest'
import { pascalToCamelCase } from '../stringHelpers'

test('pascalToCamelCase: an-banana-client -> anBananClient', () => {
  expect(pascalToCamelCase('an-banana-client')).toBe('anBananaClient');
});

test('pascalToCamelCase: s-client -> sClient', () => {
  expect(pascalToCamelCase('s-client')).toBe('sClient');
});

test('pascalToCamelCase: an-banana-client -> AnBananClient', () => {
  expect(pascalToCamelCase('an-banana-client', true)).toBe('AnBananaClient');
});