import { expect } from 'chai';
import projects from '../../src/js/store/reducers/projects';
import {
  requestProjects,
  requestProjectsError,
  receiveProjects,
} from '../../src/js/store/actions/projects';

describe('projects reducer', () => {
  const project = { title: 'test' };

  it('returns initial state', () => {
    const result = projects(undefined, {});
    expect(result).to.eql({
      isFetching: false,
      lastUpdated: 0,
      items: [],
    });
  });

  it('handles receiving projects', () => {
    const result = projects(
      undefined,
      receiveProjects({ projects: [project] }),
    );
    expect(result.items).not.to.be.empty;
    expect(result.isFetching).to.eq(false);
    expect(result.lastUpdated).not.to.eq(0);
  });

  it('handles requesting projects', () => {
    const result = projects(undefined, requestProjects());
    expect(result.isFetching).to.eq(true);
  });

  it('handles request errors', () => {
    const result = projects(
      { items: [], isFetching: true },
      requestProjectsError(),
    );
    expect(result.isFetching).to.eq(false);
  });
});
