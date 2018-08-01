import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSettings } from './actions';
import { State } from 'types';
import { injectIntl, InjectedIntl } from 'react-intl';
import messages from 'messages';

class App extends React.Component<{
  config: State['settingsReducer']['config'];
  changeSettings: typeof changeSettings;
  intl: InjectedIntl;
}> {
  render() {
    return (
      <Button
        onClick={() =>
          this.props.changeSettings({
            theme: { palette: { type: 'dark' }, typography: { fontSize: 50 } },
            locale: 'ru'
          })
        }
      >
        {this.props.intl.formatMessage(messages.settings_test)}
      </Button>
    );
  }
}

export default injectIntl(
  connect(
    (state: State) => ({
      config: state.settingsReducer.config
    }),
    { changeSettings }
  )(App)
);
