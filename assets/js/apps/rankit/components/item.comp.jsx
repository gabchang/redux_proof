import React from 'react';
import reactStamp from 'react-stamp';
import R from 'ramda';

// Poster: "http://ia.media-imdb.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg"
// Title: "Hello Ladies"
// Type: "series"
// Year: "2013–"
// imdbID: "tt2378794"

const {
  string, number, func
} = React.PropTypes;

const Item = reactStamp(React).compose({

  displayName: 'Item.Component',

  propTypes: {
    imdbID: string.isRequired,
    Title: string.isRequired,
    Poster: string,
    Type: string,
    Year: string,
    rank: number,
    cols: number,
    onRankValidate: func,
    onRankRemove: func
  },

  defaultProps: {
    rank: null,
    cols: 4
  },

  init() {
    this.state = {
      ranking: this.props.rank ? true : false
    };
  },

  _rankClick()  { this.setState({ ranking: true }) },

  _rankRemove() {
    this.setState({ ranking: false });
    const {imdbID, onRankRemove} = this.props;
    onRankRemove(imdbID);
  },

  _rankValidate(rank) {
    const {imdbID, onRankValidate} = this.props;
    onRankValidate(imdbID, rank);
  },

  render() {
    const { imdbID, Poster, Title, Type, Year, rank, cols, i } = this.props,
          crdCls = "card " + (rank ? "ranked" : ""),
          colCls = "col-sm-" + Math.floor(12 / cols);
          // <a className="link-button" href={"http://www.imdb.com/title/" + imdbID} target="_blank">
          //   <img src="/img/imdb.png"/>
          // </a>
    return (
      <div className={colCls} style={{ transitionDelay: (0.1*i)+'s' }}>
        <div className={crdCls}>
          <div className="card-img-top">
            <a href={"http://www.imdb.com/title/" + imdbID} target="_blank">
              <img src={Poster && (Poster != "N/A") ? Poster : "/img/no-poster.jpg"} alt={Title}/>
            </a>
          </div>
          <div className="card-block">
            <div className="card-text small text-uppercase">
              {Type} - {Year}
            </div>
            <h6 className="card-title">{Title}</h6>
          </div>
          <div className="card-footer text-sm-right">
            { this.renderLinks() }
          </div>
        </div>
      </div>
    )
  },

  renderStars: function() {
    const {rank}    = this.props,
          {ranking} = this.state;
    if (!(rank||ranking)) return;
    const choices = [5,4,3,2,1];
    return (
      <div className="stars">
        <i className="mi text-danger remove" title="Unrank it !" onClick={ () => this._rankRemove() }>close</i>
        { R.map( v => this.renderStar(v), choices) }
      </div>
    );
  },

  renderNoStar: function() {
    const {rank} = this.props,
          {ranking} = this.state;
    if (rank||ranking) return;
    return <a onClick={ () => this._rankClick() } className="card-link">Rank-It !</a>;
  },

  renderStar: function(value) {
    const { rank } = this.props,
          cls      = ['mi'];
    if (value == rank) cls.push('active');
    return <i key={'star-'+value} className={cls.join(' ')} title={value} onClick={ () => this._rankValidate(value) }>star</i>;
  },

  renderLinks: function() {
    return (
      <div>
        { this.renderStars() }
        { this.renderNoStar() }
      </div>
    )
  }
});

export default Item
