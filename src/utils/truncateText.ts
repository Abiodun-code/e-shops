export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    // eslint-disable-next-line prettier/prettier
    return text.substring(0, maxLength) + '...';
  }
  return text;
}