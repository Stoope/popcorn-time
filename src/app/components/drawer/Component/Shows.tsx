import React from 'react';
import messages from './index.messages';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LiveTv from '@material-ui/icons/LiveTv';
import ListItemText from '@material-ui/core/ListItemText';
import { RouteComponentProps } from 'react-router';

type Props = {
  activeItemClassName: string;
  navigateTo: (pathName: string) => void;
  location: RouteComponentProps<{}>['location'];
} & InjectedIntlProps;

class Shows extends React.Component<Props> {
  componentPathName = '/shows';
  navigateToShows = () => this.props.navigateTo(this.componentPathName);
  render() {
    const { intl, activeItemClassName, location } = this.props;
    return (
      <ListItem
        button={true}
        onClick={this.navigateToShows}
        className={
          location.pathname === this.componentPathName
            ? activeItemClassName
            : undefined
        }
      >
        <ListItemIcon>
          <LiveTv />
        </ListItemIcon>
        <ListItemText
          primary={intl.formatMessage(messages.drawer_Drawer_shows)}
        />
      </ListItem>
    );
  }
}

export default injectIntl(Shows);
