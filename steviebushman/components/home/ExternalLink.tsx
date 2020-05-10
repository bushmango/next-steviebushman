import React from 'react'

// function clickOutboundLink(url: string) {
//   // analytics.outboundLink(url)
// }

export const ExternalLink = (props: {
  url?: string
  href?: string
  title?: string
  label?: string
  disableIcon?: boolean
  children?: any
}) => (
  <span>
    <a
      href={props.url || props.href}
      // onMouseDown={memoizeBind(
      //   clickOutboundLink,
      //   this,
      //   props.url || props.href,
      // )}
    >
      {props.disableIcon !== true ? (
        <span>
          external link icon!!
          {/* <FontAwesome name='external-link' />{' '} */}
        </span>
      ) : null}
      {props.title || props.label || props.url || props.href || props.children}
    </a>
  </span>
)

// export class ExternalLink extends React.Component<{
//   label?: string,
//   href?: string,
// }, any> {

//   render() {

//     return (
//       <a href={this.props.href}><FontAwesome name='external-link' /> {this.props.label || this.props.children || this.props.href}</a>
//     )
//   }
// }
