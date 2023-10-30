import { expect, test } from 'vitest'
import { pascalToCamelCase } from '../stringHelpers'

test('pascalToCamelCase: 空字符串 -> 空字符串', () => {
  expect(pascalToCamelCase('')).toBe('');
});

test('pascalToCamelCase: an-banana-client -> anBananClient', () => {
  expect(pascalToCamelCase('an-banana-client')).toBe('anBananaClient');
});

test('pascalToCamelCase: s-client -> sClient', () => {
  expect(pascalToCamelCase('s-client')).toBe('sClient');
});

test('pascalToCamelCase: an-banana-client -> AnBananClient', () => {
  expect(pascalToCamelCase('an-banana-client', true)).toBe('AnBananaClient');
});

test('pascalToCamelCase: abBce-basc -> abbceBasc', () => {
  expect(pascalToCamelCase('abBce-basc')).toBe('abbceBasc');
});

test('pascalToCamelCase: abBce-bAsC-CBA -> abbceBascCba', () => {
  expect(pascalToCamelCase('abBce-bAsC-CBA')).toBe('abbceBascCba');
});