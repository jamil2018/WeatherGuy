const determinePeriod = (time) => {
  if (time >= 5 && time <= 11) {
    return "morning";
  }
  if (time >= 12 && time <= 16) {
    return "afternoon";
  }
  if (time >= 17 && time <= 20) {
    return "evening";
  }
  return "night";
};

export { determinePeriod };
