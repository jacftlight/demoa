import {SCROLLVIEW} from "../actions/action-types";

const initialState = null;

const reducer = (state = initialState, action) => {
    if (action.type === SCROLLVIEW) {
        let anchorEl = document.getElementById(action.data);
        if (anchorEl) {
            anchorEl.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    }
    // switch (action.type) {
    //     console.log("Switch...: ");
    //     case SCROLLVIEW:
    //         let anchorEl = document.getElementById(action.data);
    //         console.log("el: " + anchorEl);
    //         if (anchorEl) {
    //             anchorEl.scrollIntoView({block: 'start', behavior: 'smooth'});
    //         }
    //         break;
    //     default:
    //         return state;
    // }
    return null;
}

export default reducer;
