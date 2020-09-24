export const fetchShare = shareId => {
  return $.ajax({
    url: `/api/shares/${shareId}`
  });
};
