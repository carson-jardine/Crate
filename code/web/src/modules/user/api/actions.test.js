import * as actions from './actions'

describe('actions', () => {
    it('should have a type of EDIT_PROFILE', () => {
        const dispatch = jest.fn()
        const returnValue = actions.editProfile()
        returnValue(dispatch)
        expect(dispatch).toHaveBeenCalledWith({type: 'AUTH/EDIT_PROFILE'})
    })
})