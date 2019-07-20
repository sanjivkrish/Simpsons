import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    card: {
        width: 345,
    },
});

function CharacterCard ({ classes, activeCharacter }) {
    if (!activeCharacter) return (<></>)

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={activeCharacter.PicUrl}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {activeCharacter.Name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {activeCharacter.Species}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    First appearance in {activeCharacter.FirstAppearance}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    );
}

function mapStateToProps({ activeCharacter }) {
    return { activeCharacter }
}

export default connect(mapStateToProps)(withStyles(styles)(CharacterCard));