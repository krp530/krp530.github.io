import React from 'react'
import { push } from 'connected-react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <button onClick={() => props.changeLanguage('fr')}>Go to about page via redux</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(Home)
