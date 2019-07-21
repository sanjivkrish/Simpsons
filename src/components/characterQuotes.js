import React from 'react';
import { connect } from "react-redux"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing(4),
    minWidth: 345,
  },
  card: {
    minWidth: 275,
    minHeight: 150,
    margin: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  message: {
    fontSize: 24,
    textAlign: "center",
    color: "Red",
    margin: theme.spacing(2),
  },
});

class CharacterQuotes extends React.Component {
    render() {
        const { classes, quotes, activeCharacter } = this.props;
        if (!quotes) return(<div></div>)

        return (
            <div className={classes.root} autoComplete="off">
                {
                  (quotes.length === 0 ) &&
                    (
                      <Grid className={classes.message}>
                          No quotes found for {activeCharacter.Name}
                      </Grid>
                    )
                }
                <Grid container spacing={3}>
                  {
                    quotes.map(({character, quote}) => {
                      return  (
                        <Grid item xs={12} sm={6} key={quote}>
                          <Card className={classes.card} xs={6}>
                            <CardContent>
                              <Typography className={classes.title} color="textPrimary" gutterBottom>
                              { character }
                              </Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              { quote }
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })
                  }
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({ quotes, activeCharacter }) {
    return { quotes, activeCharacter }
}

export default connect(mapStateToProps)(withStyles(styles)(CharacterQuotes));