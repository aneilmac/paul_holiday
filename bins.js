const BINS_EPOCH = new Date(2025,2,23);
const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

function diff_weeks(dt2, dt1)  {
  // Calculate the difference in milliseconds between dt2 and dt1
  var diff = (dt2 - dt1);
  return Math.floor(diff / MILLISECONDS_PER_WEEK);
}

function is_date_even(dt) {
    // Is the difference between the current week and the epoch week divisible by 2?
    return diff_weeks(dt, BINS_EPOCH.getTime()) % 2 === 0;
}

function is_even_week() {
    return is_date_even(new Date(Date.now()).setHours(0, 0, 0, 0));
}

