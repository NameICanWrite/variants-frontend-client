import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function MySwitch({onChange, name}) {
    const [checked, setChecked] = React.useState(false)
    const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
            opacity: 1,
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
        },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
    }))(Switch);

    const handleChange = (event) => {
        onChange()
        setChecked(event.target.checked)
    }



    return (
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1} className='switch-container' >
          <Grid item>Off</Grid>
          <Grid item>
            <AntSwitch onChange={handleChange} name={name} checked={checked}/>
          </Grid>
          <Grid item>On</Grid>
        </Grid>
      </Typography>
    )
}

export default MySwitch