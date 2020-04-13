const initialState ={
    customers: [
        {
            name: "Sefata Anam",
            phone: "36346776531",
            address: "Dhaka",
            membership: "Pro",
            id: 1  
        }
    ],
    loading: false,
    loaded: true
};


export function customerReducer(state=initialState, action){
    switch(action.type){
        case "LOAD_CUSTOMERS":{
            return {
                ... state,
                loading:true,
                loaded:false
            };
        }

        default: {
            return state;
        }
    }
}