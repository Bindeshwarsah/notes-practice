// export const formatMessageTimestamp = (timestamp) => {
//   const formattedDate = new Date(timestamp)
//     .toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     })
//     .replace(/,/, "")
//     .replace(/(\w+) (\d+) (\d+)/, "$2 $1 $3");
    

//   const formattedTime = new Date(timestamp).toLocaleTimeString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
//   });

//   return (
//     `${formattedDate} ${formattedTime}`

//   );
// };





// // formatMessageTimestamp.js
// export const formatMessageTimestamp = (timestamp) => {
//   try {
//     const dateObject = new Date(timestamp);

//     if (isNaN(dateObject.getTime())) {
//       throw new Error("Invalid Timestamp");
//     }

//     const formattedDate = dateObject
//       .toLocaleDateString("en-US", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       })
//       .replace(/,/, "")
//       .replace(/(\w+) (\d+) (\d+)/, "$2 $1 $3");

//     const formattedTime = dateObject.toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//     });

//     const bulletSymbol = "\u2022"; // Unicode character for bullet symbol

//     return `${formattedDate} ${bulletSymbol} ${formattedTime}`;
//   } catch (error) {
//     console.error("Error formatting timestamp:", error);
//     return "Invalid Timestamp";
//   }
// };
