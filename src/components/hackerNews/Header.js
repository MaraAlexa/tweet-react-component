import React from 'react';

export default class Header extends React.Component{
  render() {
    return(      
        <div className="header">
          <Logo data={this.props.data} />
          <Title data={this.props.data} />
          {this.props.data.headerLinks.map( (headerLink) =>
            <HeaderLink key={headerLink.id} item={headerLink} />
          )}
        </div>
    )
  }
}

const Logo = (props) => {
  return <a href={props.data.logo}>{props.data.title}</a>
}
const Title = (props) => {
  return <h2>{props.data.title}</h2>
}
const HeaderLink = (props) => {
  return <a href={props.item.link}>{props.item.link} | </a>
}
