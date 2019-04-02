import React from 'react'
import {connect} from 'react-redux'

export const BaseDummy = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
      eligendi modi, suscipit delectus sit architecto minus quas, eos totam
      corrupti atque est ipsam itaque, illum nulla fugiat numquam quo!
    </div>
  )
}
BaseDummy.displayName = 'Dummy'

// this seems to work!
// export const Dummy = connect()(BaseDummy)

// the default export seems to broke the test
export default connect()(BaseDummy)

// this doesn't work either
// const Foo = connect()(BaseDummy)
// Foo.displayName = 'Foo'

// export default Foo
