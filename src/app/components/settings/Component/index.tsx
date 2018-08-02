import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { settingsActions } from '~/components/settings';
import { State } from 'types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog, {
  InjectedProps
} from '@material-ui/core/withMobileDialog';
import SettingsHeader from './SettingsHeader';
import SettingsBody from './SettingsBody';

type Props = {
  isSettingsOpen: State['settingsReducer']['isSettingsOpen'];
  openSettings: typeof settingsActions.openSettings;
  closeSettings: typeof settingsActions.closeSettings;
} & InjectedProps;

class App extends React.Component<Props> {
  render() {
    const {
      isSettingsOpen,
      fullScreen,
      openSettings,
      closeSettings
    } = this.props;
    return (
      <Fragment>
        <Button onClick={openSettings}>
          {'{intl.formatMessage(messages.settings_test)}'}
        </Button>
        <Dialog
          open={isSettingsOpen}
          onClose={closeSettings}
          fullScreen={fullScreen}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <SettingsHeader closeSettings={closeSettings} />
          <SettingsBody />
        </Dialog>
      </Fragment>
    );
  }
}

export default connect(
  (state: State) => ({
    isSettingsOpen: state.settingsReducer.isSettingsOpen
  }),
  {
    openSettings: settingsActions.openSettings,
    closeSettings: settingsActions.closeSettings
  }
)(withMobileDialog<Props>()(App));
