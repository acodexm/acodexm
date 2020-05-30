export default {
  init: jest.fn(),
  send: jest.fn().mockImplementation(() => Promise.resolve())
};
