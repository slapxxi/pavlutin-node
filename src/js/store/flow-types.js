// @flow
export type Post = {
  +id: number,
  +title: string,
  +slug: string,
  +tags: Array<string>,
  +description: string,
  +content: string,
  +createdAt: Date,
}

export type PostsState = {
  +isFetching: boolean,
  +items: Array<Post>,
  +lastUpdated: number,
};

export type State = {
  +posts: PostsState,
  +searchTerm: string,
}

export type Action =
  | {type: 'ADD_POST', payload: Post}
  | {type: 'REQUEST_POSTS'}
  | {type: 'REQUEST_POSTS_ERROR', payload: Error}
  | {type: 'RECEIVE_POSTS', payload: Array<Post>, meta: Object};

export type Reducer = (state: State, action: Action) => State;

export type Dispatch = (action: Action) => void;

export type Store = {dispatch: Dispatch, getState: () => State};
