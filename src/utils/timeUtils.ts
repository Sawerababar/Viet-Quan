/**
 * Calculates current operating status in Perth / Western Australia time (AWST, UTC+8)
 */
export function getPerthStatus() {
  const now = new Date();
  // Get time in Perth / AWST (UTC+8)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const perthOffset = 8; // AWST is UTC+8
  const perthTime = new Date(utc + (3600000 * perthOffset));

  const day = perthTime.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
  const hours = perthTime.getHours();
  const minutes = perthTime.getMinutes();
  const currentTimeDec = hours + (minutes / 60);

  // Monday is closed (day === 1)
  // Tuesday to Sunday: 11:00 AM to 9:00 PM (11.0 to 21.0)
  const isMonday = day === 1;
  const isOpen = !isMonday && currentTimeDec >= 11.0 && currentTimeDec < 21.0;

  let message = "";
  if (isMonday) {
    message = "Closed Mondays · Reopens Tuesday at 11:00 AM";
  } else if (currentTimeDec < 11.0) {
    message = "Closed Now · Opens Today at 11:00 AM";
  } else if (currentTimeDec >= 21.0) {
    message = day === 0 ? "Closed Tonight · Reopens Tuesday at 11:00 AM" : "Closed Tonight · Reopens Tomorrow at 11:00 AM";
  } else {
    message = "Open Today until 9:00 PM";
  }

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = daysOfWeek[day];

  return {
    isOpen,
    message,
    currentDayName,
    currentPerthHour: hours,
    currentPerthMinute: minutes
  };
}
