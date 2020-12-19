import { UPDATED_USER } from '../action/userActions'

const InitialState = { user: null }

const userReducer = (state = InitialState, { type, user }) => {

    switch (type) {
        case UPDATED_USER:
            return {
                ...state, user

            }

        default:
            return state
    }
}

export default userReducer