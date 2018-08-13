import React from 'react';
import messages from '../index.messages';
import { showsActions } from '~/components/shows';
import keycode from 'keycode';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import EventListener from 'react-event-listener';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';

type Props = {
  value: string;
  changeFilter: typeof showsActions.changeShowsFilter;
  classes: Record<string, string>;
} & InjectedIntlProps;

const styles: StyleRulesCallback = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.common.black,
      0.15
    ),
    '&:hover': {
      background: fade(
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.common.black,
        0.25
      )
    },
    '& $inputInput': {
      transition: theme.transitions.create('width'),
      width: 120,
      '&:focus': {
        width: 170
      }
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 9}px`
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class GridComponent extends React.Component<Props> {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleKeyDown = (event: KeyboardEvent) => {
    if (
      ['/', 's'].indexOf(keycode(event)) !== -1 &&
      document.activeElement !== this.inputRef.current
    ) {
      event.preventDefault();
      this.inputRef.current && this.inputRef.current.focus();
    }
  };
  changeFilter: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    this.props.changeFilter({ keywords: event.target.value });
  };
  render() {
    const { intl, value, classes } = this.props;
    return (
      <div className={classes.root}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div className={classes.search}>
          <SearchIcon />
        </div>
        <Input
          disableUnderline={true}
          placeholder={intl.formatMessage(messages.app_shows_searchPlaceholder)}
          onChange={this.changeFilter}
          value={value}
          inputRef={this.inputRef}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(injectIntl(GridComponent));
