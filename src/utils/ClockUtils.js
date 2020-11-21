const determinePeriod = (time) => {
  if (time >= 6 && time <= 9) {
    return "morning";
  }
  if (time >= 10 && time <= 11) {
    return "noon";
  }
  if (time >= 12 && time <= 14) {
    return "afternoon";
  }
  if (time >= 15 && time <= 17) {
    return "evening";
  }
  return "night";
};

export { determinePeriod };
