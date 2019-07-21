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
        width: 500,
    },
    imgCard: {
        objectFit: "contain"
    },
});

function CharacterCard ({ classes, activeCharacter }) {
    console.log(activeCharacter)
    if (!activeCharacter) return (<></>)

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.imgCard}
                alt="Contemplative Reptile"
                height="300"
                image={activeCharacter.PicUrl}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {activeCharacter.Name}
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