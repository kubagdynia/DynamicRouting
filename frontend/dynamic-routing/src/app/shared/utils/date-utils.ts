import { DateTime } from 'luxon';

export function fixDate(value: Date | string | null): string | null {
  return value && value instanceof Date ? DateTime.fromJSDate(value).toISO({ includeOffset: false }) : value;
}
