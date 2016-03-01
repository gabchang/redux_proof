import React from 'react';
import Myrank from './containers/myrank.cont.jsx';
import { Link } from 'react-router';

const RankitMine = () => (
  <article className="rankit rankit-mine">
    <header>
      <h1>
        My ranked movies
        <div className="pull-xs-right">
          <Link to="/rankit" className="small btn btn-link">Rank movies</Link>
        </div>
      </h1>
    </header>
    <section>
      <Myrank/>
    </section>
  </article>
)

export default RankitMine;
