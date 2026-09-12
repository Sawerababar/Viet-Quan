// Published regular hours; this is a local clock calculation, not a kitchen feed.
export function openingStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-AU', {timeZone:'Australia/Perth',weekday:'long',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now);
  const part = (type:string) => parts.find(p=>p.type===type)?.value || '';
  const day = part('weekday');
  const mins = Number(part('hour')) * 60 + Number(part('minute'));
  const open = day !== 'Monday' && mins >= 660 && mins < 1260;
  const next = day === 'Monday' || (day === 'Sunday' && mins >= 1260) ? 'Opens Tuesday at 11am' : mins < 660 ? 'Opens today at 11am' : 'Opens tomorrow at 11am';
  return {open, label:open ? 'Open now · until 9pm' : `Closed · ${next}`,time:`${part('hour')}:${part('minute')}`,day};
}
