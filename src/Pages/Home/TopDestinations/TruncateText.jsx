const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    // Trim the text to the maximum length and add ellipsis
    return text.substring(0, maxLength).trim() + '...';
  };

  export default truncateText