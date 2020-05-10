import React from 'react'

export const Section = (props: {
  icon?: string
  title?: string
  children: React.ReactNode
}) => {
  return (
    <div style={{ borderTop: 'solid 1px #ccc', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
        {props.icon ? (
          <div style={{ marginRight: '10px' }}>
            ICON: {props.icon}
            {/* <Icon></Icon> */}
            {/* <FontAwesome name={props.icon} size='2x' /> */}
          </div>
        ) : null}
        {props.title ? (
          <div style={{ fontSize: '24px' }}>{props.title}</div>
        ) : null}
      </div>
      <div>{props.children}</div>
    </div>
  )
}
