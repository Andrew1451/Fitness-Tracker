import React from 'react'
import { render } from '../test-utils'
import Workout from './workout'

describe('Workout', () => {
    test('display date of workout', () => {
        const { getByText } = render(<Workout date={'9/2/21'} workout={[{date: '9/2/21'}, {situps: 100}, {pushups: 25}]} />)
        expect(getByText('9/2/21')).toBeInTheDocument()
    })
})