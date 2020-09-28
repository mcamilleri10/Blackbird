export const fetchUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`
  });
};

export const updateUser = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'patch',
    data: { user }
  });
};