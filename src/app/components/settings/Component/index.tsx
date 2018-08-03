import React from 'react';
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
    const { isSettingsOpen, fullScreen, closeSettings } = this.props;
    return (
      <Dialog
        fullWidth={true}
        open={isSettingsOpen}
        onClose={closeSettings}
        fullScreen={fullScreen}
        aria-labelledby="scroll-dialog-title"
      >
        <SettingsHeader closeSettings={closeSettings} />
        <SettingsBody />
      </Dialog>
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
