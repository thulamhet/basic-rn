export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const RESET_ANSWER = 'RESET_ANSWER';

export const changeAnswer = (data: any) => ({
  type: CHANGE_ANSWER,
  payload: data
});

export const resetAnswer = () => ({
  type: RESET_ANSWER,
})
