import assert from 'node:assert/strict';
import {openingStatus} from '../src/utils/openingStatus.ts';
// UTC timestamps exercise Australia/Perth, including the UTC/local day boundary.
for (const [date,open,text] of [
 ['2026-09-12T02:59:00Z',false,'today'],
 ['2026-09-12T03:00:00Z',true,'until 9pm'],
 ['2026-09-12T12:59:00Z',true,'until 9pm'],
 ['2026-09-12T13:00:00Z',false,'tomorrow'],
 ['2026-09-13T13:00:00Z',false,'Tuesday'],
 ['2026-09-13T16:00:00Z',false,'Tuesday'],
 ['2026-09-14T05:00:00Z',false,'Tuesday'],
 ['2026-09-15T03:00:00Z',true,'until 9pm'],
]) {const s=openingStatus(new Date(date)); assert.equal(s.open,open,date); assert.ok(s.label.includes(text),`${date}: ${s.label}`);}
console.log('8 Perth opening-hours boundary checks passed.');
