import { expect } from 'chai';
import projects from '../../src/js/store/reducers/projects';
import {
  requestProjects,
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

  it('receives projects', () => {
    const result = projects(
      undefined,
      receiveProjects({ projects: [project] }),
    );
    expect(result.items).not.to.be.empty;
    expect(result.isFetching).to.eq(false);
    expect(result.lastUpdated).not.to.eq(0);
  });

  it('requests projects', () => {
    const result = projects(undefined, requestProjects());
    expect(result.isFetching).to.eq(true);
  });
});