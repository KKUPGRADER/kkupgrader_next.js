
  // Example code to count words in the article content
export function countWords(articleContent) {
  articleContent = articleContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
  articleContent = articleContent.replace(/[^\w\s]/gi, ''); // Remove unwanted characters
  var words = articleContent.trim().split(/\s+/); // Split into an array of words
  return words.length;
}
// Example code to calculate the read time
export function calculateReadTime(articleContent, averageReadingSpeed  = 200) {
  var wordCount = countWords(articleContent);
  var readTimeMinutes = Math.ceil(wordCount / averageReadingSpeed);
  return readTimeMinutes === 1 ?readTimeMinutes +  " min" :readTimeMinutes +  " mins";
}
export function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const interval in intervals) {
    const count = Math.floor(seconds / intervals[interval]);

    if (count >= 1) {
      return count === 1 ? `${count} ${interval} ago` : `${count} ${interval}s ago`;
    }
  }

  return "Just now";
}
export function getDateTime(dateString) {
  // Create a new Date object using the date string
  const date = new Date(dateString);

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  // Convert the date to the desired format
  const customFormat = date.toLocaleString('en-US', options);

  return customFormat;
}
export function getInitials(str) {
  // Remove leading and trailing whitespace
  str = str?.trim();

  // Split the string into words
  const words = str.split(' ');

  // Check if there are at least two words
  if (words.length >= 2) {
    // Return the first letter of the first two words
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  } else if (words.length === 1) {
    // Return the uppercase of the first letter of the only word
    return words[0][0].toUpperCase();
  } else {
    // No words in the string
    return '';
  }
}
 
export function removeStringAfterWord(str, word) {
  const wordIndex = str.indexOf(word);
  if (wordIndex !== -1) {
    return str.slice(0, wordIndex + word.length);
  }
  return str;
}

export const checkEnvironment = () => {
  let base_url =
    process.env.NEXT_PUBLIC_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_WEBSITE_URL;

  return base_url;
};