import React from 'react'
import {
  Popover,
  Typography,
  Chip,
  Avatar,
  Snackbar,
  Button,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const DateTimeReasonCollection = props => {
  const {
    dtrArray,
    onChipClick,
    onChipDelete,
    popover,
    onPopoverClose,
    snackbar,
    onSnackbarClose,
    onUndoChipDelete,
  } = props

  return (
    <>
      <Popover
        open={popover.open}
        anchorEl={popover.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={onPopoverClose}>
        <Typography
          // className={classes.typography}
          children={popover.content}
        />
      </Popover>
      {dtrArray.map((dtr, i) => (
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
      ))}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={onSnackbarClose}
        message={<span>Η καταχώρηση {snackbar.message} διαγράφηκε</span>}
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
