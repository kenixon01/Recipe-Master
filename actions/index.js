export const setData = (payload) => {
    return {
      type: 'HANDLE_DATA_CHANGE',
      payload: payload,
    }
};
  
export const setAPICallLoading = (payload) => {
  return {
    type: 'API_CALL',
    payload: payload,
  }
}