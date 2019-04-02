import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {App} from './'

configure({adapter: new Adapter()})

test('App', () => {
  const subject = shallow(<App />)

  expect(subject).toMatchSnapshot()
})
