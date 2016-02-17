import React from 'react';
import Picker from './picker.cont.jsx';
import Reddit from './reddit.cont.jsx';

const RedditPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <header>
          <h1>Reddit Page</h1>
        </header>
        <section>
          <Picker options={['reactjs', 'frontend']}/>
        </section>
        <section>
          <Reddit />
        </section>
      </div>
    </div>
  </div>
)

export default RedditPage;
