import React from 'react';
import { connect } from "react-redux"
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { characterAction } from "../_actions/character.action"

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
});

class CharacterSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeCharacter : props.activeCharacter || ""
        }
    }

    handleChange = (event) => {
        const activeCharacter = event.target.value;
        this.setState({ activeCharacter });

        // Set active character in store
        this.props.dispatch({ type : "SET_ACTIVE_CHARACTER", activeCharacter })
    }

    componentDidMount = () => {
        // Get character list from API
        this.props.dispatch(characterAction.getAllCharacters())
    }

    render() {
        const { classes, characters } = this.props;
        if (!characters) return(<div></div>)

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="selectCharacter">Select a Character</InputLabel>
                    <Select
                    value={this.state.activeCharacter}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'activeCharacter',
                        id: 'selectCharacter',
                    }}
                    >
                        {
                            characters.map(character => <MenuItem key={character.Name} value={character}>{character.Name}</MenuItem> )
                        }
                    </Select>
                </FormControl>
            </form>
        )
    }
}

function mapStateToProps({ characters }) {
    return { characters }
}

export default connect(mapStateToProps)(withStyles(styles)(CharacterSelect));