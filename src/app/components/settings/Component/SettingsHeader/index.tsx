import React from 'react';
import { settingsActions } from '~/components/settings';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import messages from './index.messages';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  closeSettings: typeof settingsActions.closeSettings;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = () => ({
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const SettingsHeader: React.SFC<Props> = ({
  intl,
  closeSettings,
  classes
}: Props) => (
  <DialogTitle
    className={classes.dialogTitle}
    id="scroll-dialog-title"
    disableTypography={true}
  >
    <Typography variant="title">
      {intl.formatMessage(messages.settings_DialogHeader_title)}
    </Typography>
    <IconButton onClick={closeSettings} aria-label="Close">
      <CloseIcon />
    </IconButton>
  </DialogTitle>
);

export default withStyles(styles)(injectIntl(SettingsHeader));
