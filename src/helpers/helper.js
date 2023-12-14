export const formatMessageTimestamp = (timestamp) => {
  const formattedDate = new Date(timestamp)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/,/, "")
    .replace(/(\w+) (\d+) (\d+)/, "$2 $1 $3");
    

  const formattedTime = new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    `${formattedDate} ${formattedTime}`

  );
};











