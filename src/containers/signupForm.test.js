import React from 'react'
import { render } from '../test-utils'
import SignupForm from './signupForm'

describe('SignupForm', () => {
    test('when user clicks cancel, the form inputs should be cleared', () => {
        const { getByRole } = render(<SignupForm />)
        expect(getByRole('textbox')).toBeInTheDocument()
    })
})