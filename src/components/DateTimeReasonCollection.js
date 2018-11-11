import React from 'react'
import {
  Popover,
  Typography,
  Chip,
  Avatar,
  Snackbar,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const DateTimeReasonCollection = props => {
  const {
    dtrArray,
    onChipClick,
    onChipDelete,
    popper,
    onPopperClose,
    snackbar,
    onSnackbarClose,
    onUndoChipDelete,
  } = props

  return (
    <>
      <Popover
        open={popper.open}
        anchorEl={popper.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={onPopperClose}>
        <Typography
          // className={classes.typography}
          children={popper.content}
        />
      </Popover>
      <Grid container spacing={8} justify="center">
        {dtrArray.map((dtr, i) => (
          <Grid item>
            <Chip
              avatar={<Avatar>{dtr.isWork ? 'Α' : 'Δ'}</Avatar>}
              // className={classes.chip}
              label={`${dtr.date}, ${dtr.start} - ${dtr.finish}`}
              clickable
              color={dtr.isWork ? 'primary' : 'secondary'}
              variant="outlined"
              onClick={onChipClick(dtr)}
              onDelete={onChipDelete(dtr, i)}
              // onDelete={null}
            />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
        message={
          <span>
            Η καταχώρηση <code>{snackbar.message}</code> διαγράφηκε
          </span>
        }
        action={[
          <Button
            color="secondary"
            size="small"
            onClick={onUndoChipDelete}
            children="ΑΝΑΙΡΕΣΗ"
          />,
          <IconButton
            color="inherit"
            onClick={onSnackbarClose}
            children={<CloseIcon />}
          />,
        ]}
      />
    </>
  )
}

export default DateTimeReasonCollection
