  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  export function formatDate(date) {
    const formattedDate = new Date(date);
    const month = shortMonths[formattedDate.getMonth()]; 
    const day = formattedDate.getDate(); 
    return {month, day};
  }
