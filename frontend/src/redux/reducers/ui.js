import { CHANGE_MODAL_PAGE, SEARCH_KEYWORDS } from "../actions/types"


  // initial state for handling UI state
  const defaultState = {
    modalPage: "none",
    searchKeyword: "",
  }
  
  export default function ui(state = defaultState, action) {
    switch (action.type) {
      case CHANGE_MODAL_PAGE: {
        return {
          ...state,
          modalPage: action.payload,
        }
      }

      case SEARCH_KEYWORDS: {
        const { searchKeyword } = action.payload
        return {
          ...state,
          searchKeyword: searchKeyword,
        }
      }
  
      default:
        return state
    }
  }
  