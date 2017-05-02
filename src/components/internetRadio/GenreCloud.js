import React from 'react'
import BSPanel from './BSPanel';

class GenreCloud extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">

            <BSPanel title="Popular Genres">
              {this.props.genres.map((genre, index) => {
                let size = 'btn-xs';
                if(index < 10) {
                  size = 'btn-lg'
                } else if(index < 30) {
                  size = 'btn-md'
                }
                return <button className={`btn btn-default ${size}`} key={index}>{genre}</button>
              })}
            </BSPanel>

          </div>
        </div>
      </div>
    )
  }
}

export default GenreCloud;
