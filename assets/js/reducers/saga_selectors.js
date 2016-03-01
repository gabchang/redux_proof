export const getRoot = (state) => state.saga
export const getEntities = (state) => getRoot(state).entities
export const getPaginations = (state) => getRoot(state).pagination
export const getEntity = (state, name) => getEntities(state)[name]
export const getPagination = (state, name) => getPaginations(state)[name]
export const getUser = (state, login) => getEntity(state, 'users')[login]
export const getRepo = (state, fullName) => getEntity(state, 'repos')[fullName]
export const getStarredByUser = (state, login) => getPagination(state, 'starredByUser')[login] || { ids: [] }
export const getStargazersByRepo = (state, fullName) => getPagination(state, 'stargazersByRepo')[fullName]  || { ids: [] }
