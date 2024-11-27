export function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));

  return {
    total,
    days,
    hours,
    minutes
  };
}