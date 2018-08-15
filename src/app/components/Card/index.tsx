import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Highlighter from 'react-highlight-words';
import {
  withStyles,
  StyleRulesCallback,
  WithTheme,
  withTheme
} from '@material-ui/core/styles';

type Props = {
  title: string;
  poster: string;
  searchValue: string;
  children: React.ReactNode;
  classes: Record<string, string>;
} & WithTheme;

const styles: StyleRulesCallback = () => ({
  media: {
    height: 0,
    paddingTop: '150%'
  },
  cardOuter: {
    width: 'calc(100% - 6px)',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 3,
    paddingBottom: 3
  },
  card: {
    cursor: 'pointer'
  }
});

class CardComponent extends React.Component<Props> {
  render() {
    const { title, poster, classes, searchValue, theme, children } = this.props;
    return (
      <div className={classes.cardOuter}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={poster} title={title} />
          <CardContent>
            <Grid container={true} spacing={8}>
              <Grid item={true} xs={12}>
                <Typography title={title} noWrap={true} variant="subheading">
                  <Highlighter
                    highlightStyle={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText
                    }}
                    highlightClassName="searched-keywords"
                    searchWords={searchValue ? searchValue.split(' ') : []}
                    autoEscape={true}
                    textToHighlight={title}
                  />
                </Typography>
              </Grid>
              {children}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(withTheme()(CardComponent));
