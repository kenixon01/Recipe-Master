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

export const setVerifcationCode = (payload) => {
  return {
    type: 'HANDLE_VERIFICATION_CODE',
    payload: payload,
  }
}

export const setQuery = (payload) => {
  return {
    type: 'HANDLE_SEARCH',
    payload: payload,
  }
}

export const setUserEmail = (payload) => {
  return {
    type: 'HANDLE_EMAIL',
    payload: payload,
  }
}
export const sethandleAddItem = (payload) => {
  return {
    type: 'ADD_ITEM',
    payload: payload,
  }
}

export const sethandleEdit = (payload) => {
  return {
    type: 'EDIT_ITEM',
    payload: payload,
  }
}

export const setdeleteItem = (payload) => {
  return {
    type: 'DELETE_ITEM',
    payload: payload,
  }
}