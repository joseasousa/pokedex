import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../pages/Home'

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />)
  })
})
