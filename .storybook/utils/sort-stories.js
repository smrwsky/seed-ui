import { get } from 'lodash';

const getPosition = (item, order = []) => {
  const array = Array.isArray(order) ? order : Object.keys(order);
  const index = array.indexOf(item);
  return index === -1 ? 10000 : index;
};

const compareSections = (aSections, bSections, sortOrder, depth = 0) => {
  if (aSections[depth] === bSections[depth]) {
    return compareSections(aSections, bSections, sortOrder, depth + 1);
  }

  let order;

  if (depth > 0) {
    const pathToSection = aSections.slice(0, depth).join('.');
    order = get(pathToSection, sortOrder);
  } else {
    order = sortOrder;
  }

  return (
    getPosition(aSections[depth], order) - getPosition(bSections[depth], order)
  );
};

const splitStoryName = (storyName) => storyName.split('/');

export const sortStories = (sortOrder) => (a, b) => {
  const aStoryName = a[1].kind;
  const bStoryName = b[1].kind;

  // Preserve story sort order.
  if (aStoryName === bStoryName) {
    return 0;
  }

  const aSections = splitStoryName(aStoryName);
  const bSections = splitStoryName(bStoryName);

  return compareSections(aSections, bSections, sortOrder);
};
