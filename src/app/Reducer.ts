
import { AppState } from '../models/state';
import { ActionTypes } from './Actions';


const INITIAL_STATE: AppState = {
    cache: {
        matches: []
    },
    notes: {
        auto: '',
        collection: '', 
        shooting: '',
        amp: '',
        path: '', 
        defense: '', 
        endgame: '', 
        humanPlayer: '', 
        penalties: '',
        drivers: '',
        other: ''
    }
};
export function reducer(state: AppState = INITIAL_STATE, action): AppState {
    const checkSpace = (categoryName, payload) => {
        if (state.notes[categoryName] !== '') {
           return state.notes[categoryName].concat(' / ', payload);
        }
        else {
            return payload;
        }
        
    }

    switch (action.type) {

        case ActionTypes.RESET_STATE:
            return {
                ...state,
                notes: INITIAL_STATE.notes
            }
        case ActionTypes.GET_OFFLINE_MATCHES_SUCCESS:
            return {
                ...state,
                cache: {
                    matches: action.payload
                }
            };
        case ActionTypes.CLEAR_OFFLINE_MATCHES:
            return {
                ...state,
                cache: {
                    matches: []
                }
            };
        case ActionTypes.SUBMIT_AUTO_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    auto: checkSpace('auto', action.payload)
                }
            }
        case ActionTypes.SUBMIT_COLLECTION_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    collection: checkSpace('collection', action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_POS_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    shooting: checkSpace('shooting', action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_COS_NOTES:
            return{
                ...state,
                notes: {
                    ...state.notes,
                    amp: checkSpace('amp', action.payload)
                }
            }
        case ActionTypes.SUBMIT_PATH_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    path: checkSpace('path', action.payload)
                }
            }
        case ActionTypes.SUBMIT_DEFENSE_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    defense: checkSpace('defense', action.payload)
                }
            }
        case ActionTypes.SUBMIT_CLIMBING_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    endgame: checkSpace('endgame', action.payload)
                }
            }
        case ActionTypes.SUBMIT_HP_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    humanPlayer: checkSpace('humanPlayer', action.payload)
                }
            }
        case ActionTypes.SUBMIT_PENALTY_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    penalties: checkSpace('penalties', action.payload)
                }
            }
        case ActionTypes.SUBMIT_DRIVERS_NOTES: 
        return {
            ...state,
            notes: {
                ...state.notes,
                drivers: checkSpace('drivers', action.payload)
            }
        }
        case ActionTypes.SUBMIT_OTHER_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    other: checkSpace('other', action.payload)
                }
            }
        default:
            return state;
    }
}
