import {
  ArgsTable as Props,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

Props.defaultProps = { ...Props.defaultProps, story: PRIMARY_STORY };

export { Props };
