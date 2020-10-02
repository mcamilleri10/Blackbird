export const fetchShare = shareId => {
  return $.ajax({
    url: `/api/shares/${shareId}`
  });
};

export const createShare = (share) => {
  return $.ajax({
    url: '/api/shares',
    method: 'post',
    data: { share }
  });
};

export const deleteShare = shareId => {
  return $.ajax({
    url: `/api/shares/${shareId}`,
    method: 'delete',
  });
};

export const updateShare = share => {
  return $.ajax({
    url: `/api/shares/${share.id}`,
    method: 'patch',
    data: { share }
  });
};