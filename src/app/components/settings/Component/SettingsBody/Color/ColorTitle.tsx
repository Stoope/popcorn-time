import React from 'react';
import messages from '../index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Typography from '@material-ui/core/Typography';

type Props = {
  type: 'primary' | 'secondary';
} & InjectedIntlProps;

class ColorTitle extends React.Component<Props> {
  render() {
    const { type, intl } = this.props;
    let title = null;
    switch (type) {
      case 'primary':
        title = intl.formatMessage(
          messages.settings_SettingsBody_title_primary
        );
        break;
      case 'secondary':
        title = intl.formatMessage(
          messages.settings_SettingsBody_title_secondary
        );
        break;
      default:
        title = 'Color';
        break;
    }
    return (
      <Typography gutterBottom={true} variant="title">
        {title}
      </Typography>
    );
  }
}

export default injectIntl(ColorTitle);
