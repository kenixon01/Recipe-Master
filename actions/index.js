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
  
export const setRecentSearches = (payload, limit) => {
  return {
    type: 'HANDLE_RECENT_SEARCHES',
    payload: payload,
    limit: limit
  }
}  

export const setUser = (payload) => {
  return {
    type: 'HANDLE_USER_STATE',
    payload: payload,
  }
}

export const setVerifcationCode = (payload) => {
  return {
    type: 'HANDLE_VERIFICATION_CODE',
    payload: payload,
  }
}