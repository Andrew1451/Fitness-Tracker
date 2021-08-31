import React from 'react'
import { render } from '../test-utils'
import userEvent from '@testing-library/user-event'
import SignupForm from './signupForm'

describe('SignupForm', () => {
    test('when user clicks cancel, the form inputs should be cleared', () => {
        const { getByRole, getByText, debug } = render(<SignupForm />)
        const input = getByRole('textbox')
        userEvent.type(input, 'example@email.com')
        expect(input).toHaveValue('example@email.com')
        userEvent.click(getByText('Cancel'))
        expect(input).toHaveValue('')
    })
})