import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as settingsActions from '~/components/settings/actions';
// import { settingsActions as ddd } from '~/components/settings';
import { State } from 'types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogHeader from './DialogHeader';
import withMobileDialog, {
  InjectedProps
} from '@material-ui/core/withMobileDialog';

type Props = {
  isSettingsOpen: State['settingsReducer']['isSettingsOpen'];
  openSettings: typeof settingsActions.openSettings;
  closeSettings: typeof settingsActions.closeSettings;
} & InjectedProps;

class App extends React.Component<Props> {
  render() {
    // console.log(ddd.openSettings);
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
          <DialogHeader closeSettings={closeSettings} />
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </DialogContentText>
          </DialogContent>
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
