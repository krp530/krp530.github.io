import React from 'react'
import { push } from 'connected-react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

const Home = props => {
  const { t, i18n } = props;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div>
      <h1>Home</h1>
      <Trans i18nKey="description.part1">
        This one has <b>special rich-text formatting</b> in the translation file!
      </Trans>
      <br/>
      <br/>
      <button onClick={() => changeLanguage('fr')}>Switch to FRENCH</button>
      <button onClick={() => changeLanguage('es')}>Switch to SPANISH</button>
      <button onClick={() => changeLanguage('en')}>Switch to ENGLISH</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(withNamespaces('translation')(Home))
