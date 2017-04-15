import { expect } from 'chai';
import projectsReducer from '../../src/js/reducers/projects-reducer';
import { requestProjects, receiveProjects } from '../../src/js/actions';

describe('projectsReducer', () => {
  const project = { title: 'test' };

  it('returns initial state', () => {
    const result = projectsReducer(undefined, {});
    expect(result).to.eql({
      isFetching: false,
      lastUpdated: 0,
      items: [],
    });
  });

  it('receives projects', () => {
    const result = projectsReducer(
      undefined,
      receiveProjects({ projects: [project] }),
    );
    expect(result.items).not.to.be.empty;
    expect(result.isFetching).to.eq(false);
    expect(result.lastUpdated).not.to.eq(0);
  });

  it('requests projects', () => {
    const result = projectsReducer(undefined, requestProjects());
    expect(result.isFetching).to.eq(true);
  });
});
