export const userConstants = {
  BECOME_HOST: 'BECOME_HOST'
};

export const becomeHost = userId => ({
  type: userConstants.BECOME_HOST,
  userId
});
