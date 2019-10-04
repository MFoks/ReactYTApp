import React from 'react';
import InputBase from "@material-ui/core/InputBase/InputBase";
import {fade} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import './main.css'
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class SearchBar extends React.Component{
    state = {
        searchTerm:''
    };

    handleChange = (event) => {
      this.setState({ searchTerm: event.target.value });

        console.log(event.target.value);
    };

    handleSubmit = (event) => {
      const { searchTerm } = this.state;
      const { onFormSubmit } = this.props;

      onFormSubmit(searchTerm);

      event.preventDefault();
    };

    render(){
        const { classes } = this.props;

        return(
           // <Paper elevation={6} style={{ padding: '25px' }}>
               // <form onSubmit={this.handleSubmit}>
                    //<TextField fullWidth label="Search.." onChange={this.handleChange}/>
               // </form>
           // </Paper>
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Youtube Clone on React
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search','maxLength':10 }}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        />
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchBar);

