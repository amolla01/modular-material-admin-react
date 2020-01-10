import React, { forwardRef } from 'react'
import clsx from 'clsx'

import ListItem from '@material-ui/core/ListItem'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { NavLink } from 'react-router-dom'

export const ListItemLink = forwardRef((props, ref) => (
  <NavLink exact {...props} innerRef={ref} />
))

// Can be a link, or button
export const ListItemComponent = forwardRef((props, ref) => {
  // Omit isCollapsed
  const { isCollapsed, ...newProps } = props
  const classes = useStyles()

  const component =
    typeof props.link === 'string' ? (
      <ListItem {...newProps} button component={ListItemLink} to={props.link} />
    ) : (
      <ListItem {...newProps} button />
    )

  return (
    <div ref={ref} className={clsx(isCollapsed && classes.navItemCollapsedWrapper)}>
      {component}
    </div>
  )
})

const useStyles = makeStyles(theme =>
  createStyles({
    navItemCollapsedWrapper: {
      width: theme.sidebar.widthCollapsed,
    },
  }),
)

export default ListItemComponent
