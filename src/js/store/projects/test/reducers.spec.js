import projects from '../reducers';
import {
  requestProjects,
  requestProjectsError,
  receiveProjects,
} from '../actions';

const project = { title: 'test' };

it('returns initial state', () => {
  const state = projects(undefined, {});
  expect(state).toEqual({
    isFetching: false,
    lastUpdated: 0,
    items: [],
  });
});

it('handles receiving projects', () => {
  const state = projects(
    undefined,
    receiveProjects({ projects: [project] }),
  );
  expect(state.items.length).not.toBe(0);
  expect(state.isFetching).toBe(false);
  expect(state.lastUpdated).not.toBe(0);
});

it('handles requesting projects', () => {
  const state = projects(undefined, requestProjects());
  expect(state.isFetching).toBe(true);
});

it('handles request errors', () => {
  const state = projects(
    { items: [], isFetching: true },
    requestProjectsError(),
  );
  expect(state.isFetching).toBe(false);
});
