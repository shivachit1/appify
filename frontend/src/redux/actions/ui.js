import { CHANGE_MODAL_PAGE, SEARCH_KEYWORDS } from "./types"


// action for changing App theme
export function changeModalPage(pageName) {
  return {
    type: CHANGE_MODAL_PAGE,
    payload: pageName,
  }
}

// action for changing App theme
export function search(searchKeyword) {
  return {
    type: SEARCH_KEYWORDS,
    payload: {
      searchKeyword,
    },
  }
}