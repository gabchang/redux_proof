import React from 'react';
import { Route } from 'react-router';

import { App, Todo, Reddit, Github, Repo, User, Saga } from 'apps';

export default(
  <Route path="/" component={App}>
    <Route path="todo" component={Todo}/>
    <Route path="reddit" component={Reddit}/>
    <Route path="reddit" component={Reddit}/>
    <Route path="github" component={Github}>
      <Route path=":login/:name" component={Repo}/>
      <Route path=":login" component={User}/>
    </Route>
    <Route path="saga" component={Saga.Main} >
      <Route path=":login" component={Saga.User}/>
      <Route path=":login/:name" component={Saga.Repo}/>
    </Route>
  </Route>
);
