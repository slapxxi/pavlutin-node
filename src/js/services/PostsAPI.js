// @flow
import axios from 'axios';
import type { Request } from '../store/flow-types';

const getRequest: Request = {
  method: 'get',
  url: '/api/v1/posts',
};

function get() {
  return axios(getRequest);
}

export default { get };
