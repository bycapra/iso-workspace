import React from 'react'
import {Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';

function MuiButton() {
  return (
    <div>
        <Button size='medium' color='primary' variant='contained'>Deneme</Button>
        <Button size='small' color='success' variant='outlined'>Deneme</Button>
        <Button size='large' color='warning' variant='text'>Deneme</Button>
        <Button startIcon={<DeleteIcon/>} color='error' variant='contained' >Sil</Button>
        <IconButton color='primary'>
            <AlarmIcon/>
        </IconButton>
    </div>
  )
}

export default MuiButton
