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
  
export const setDeleteAcct = (payload) => {
  return {
    type: 'HANDLE_DELETE_ACCT',
    payload: payload,
  }
}