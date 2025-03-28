const BINS_EPOCH = new Date(2025,2,24);
const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

function diff_weeks(dt2, dt1)  {
  return Math.floor((dt2 - dt1) / MILLISECONDS_PER_WEEK);
}

function is_week_even(dt) {
  return diff_weeks(dt, BINS_EPOCH.getTime()) % 2 === 0;
}

function is_current_week_even() {
  return is_week_even(Date.now());
}
