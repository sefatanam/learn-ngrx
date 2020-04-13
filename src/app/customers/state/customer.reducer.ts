  
import * as customerActions from "./customer.action";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Customer } from "../customer.model";
import * as fromRoot from "../../state/app.state";

export interface CustomerState{
    customers: Customer[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
    customers: CustomerState
}

export const initialState : CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ""
}

export function customerReducer(
    state = initialState,
    action: customerActions.Actions) 
    : CustomerState {
        switch(action.type){
            
            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
                return {
                    ...state,
                    loading:true,
                }
            }

            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    customers: action.payload
                };
            }


            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    customers: [],
                    error: action.payload
                };
            }

            default: {
                return state;
            }
        }

}


















// const initialState = {
//     customers: [
//         {
//             name: 'Sefata Anam',
//             phone: '36346776531',
//             address: 'Dhaka',
//             membership: 'Pro',
//             id: 1
//         }
//     ],
//     loading: false,
//     loaded: true
// };


// export function customerReducer(state= initialState, action){
//     switch (action.type){
//         case 'LOAD_CUSTOMERS': {
//             return {
//                 ... state,
//                 loading: true,
//                 loaded: false
//             };
//         }

//         default: {
//             return state;
//         }
//     }
// }
