import Caption, { CaptionProps, CaptionVariant } from './Caption';

const variants: CaptionVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

export default {
  title: 'Typography/Caption',
  component: Caption,

  args: {
    children: 'This is a caption',
  },
};

export function Base(args: CaptionProps): JSX.Element {
  return <Caption {...args} />;
}

export function Variants(args: CaptionProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Caption {...args} key={i} variant={variant}>
          This is {variant} caption
        </Caption>
      ))}
    </>
  );
}
