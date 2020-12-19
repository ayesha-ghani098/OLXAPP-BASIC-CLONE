export const UPDATED_USER = 'UPDATED_USER'

const userLogin = (result) => dispatch => {
    dispatch({
        type: UPDATED_USER,
        payload: result.user
    })

}

export default userLogin



