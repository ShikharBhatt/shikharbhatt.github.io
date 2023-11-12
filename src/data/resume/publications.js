/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const publications = [
  {
    id: 1,
    data: 'S. Bhatt, S. Hotchandani, K. R. Gaur, and S. Sirsikar. Introduction to Lifeblocks: A Blockchain based Insurance Platform. Proceedings of the 17th International Joint Conference on e-Business and Telecommunications - Volume 1: DCNET, July, 2020',
  },
];

export default publications;
