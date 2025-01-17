import * as React from 'react'
import { assert } from 'chai'
import { AnonAadhaarProvider } from '../src/provider/AnonAadhaarProvider'
import { render, screen } from '@testing-library/react'

describe('CountryIdentityProvider', () => {
  it('renders children', () => {
    render(
      <AnonAadhaarProvider>
        <div>Test Children</div>
      </AnonAadhaarProvider>,
    )

    assert(screen.getByText('Test Children') != null, 'Should not be null')
  })
})
