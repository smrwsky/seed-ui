import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';

type BadgePosition = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

export interface BadgeProps {
  /**
   * Background color of the badge.
   */
  bg?: Atoms['bg'];

  /**
   * The content to be displayed within the badge. Can be a numerical value, text, or any ReactNode.
   */
  content?: ReactNode;

  /**
   * The children of the Badge component. Usually, the element to which the badge is applied.
   */
  children?: ReactNode;

  /**
   * Additional class name(s) to be applied to the Badge component.
   */
  className?: string;

  /**
   * If set to true, displays a dot without any numerical value within the badge.
   */
  dot?: boolean;

  /**
   * The maximum count to be displayed in the badge before showing an overflow indicator.
   */
  overflowCount?: number;

  /**
   * The horizontal offset of the badge from its default position in pixels.
   */
  offsetX?: number;

  /**
   * The vertical offset of the badge from its default position in pixels.
   */
  offsetY?: number;

  /**
   * The position of the badge relative to its parent element.
   */
  position?: BadgePosition;

  /**
   * If set to true, displays the badge even when the count is zero.
   */
  showZero?: boolean;

  /**
   * The title of the badge. This is used for accessibility purposes.
   */
  title?: string;
}

const transformStyle: Record<BadgePosition, string> = {
  'top-start': 'translate(-50%, -50%)',
  'top-end': 'translate(50%, -50%)',
  'bottom-start': 'translate(-50%, 50%)',
  'bottom-end': 'translate(50%, 50%)',
};

const transformOriginStyle: Record<BadgePosition, string> = {
  'top-start': 'bottom left',
  'top-end': 'bottom right',
  'bottom-start': 'top left',
  'bottom-end': 'top right',
};

const Badge: FC<BadgeProps> = ({
  bg = 'primary400',
  children,
  content,
  className,
  dot = false,
  offsetX = 0,
  offsetY = 0,
  overflowCount = 99,
  position = 'top-end',
  showZero,
  title,
}) => {
  const top = position.includes('top') ? 0 - offsetY : undefined;
  const bottom = position.includes('bottom') ? 0 - offsetY : undefined;
  const insetInlineStart = position.includes('start') ? 0 - offsetX : undefined;
  const insetInlineEnd = position.includes('end') ? 0 - offsetX : undefined;

  const positionStyle: CSSProperties = {
    top,
    bottom,
    insetInlineStart,
    insetInlineEnd,
    transform: transformStyle[position],
    transformOrigin: transformOriginStyle[position],
  };

  const badgeContent =
    typeof content === 'number' && content > overflowCount
      ? `${overflowCount}+`
      : content;

  const badgePosition: Atoms['position'] = children ? 'absolute' : undefined;

  const badgeStyle: CSSProperties | undefined = children
    ? positionStyle
    : undefined;

  return (
    <span
      className={cn(
        atoms({
          display: 'inline-block',
          position: 'relative',
        }),
        className,
      )}
    >
      {children}

      {typeof badgeContent === 'object' && (
        <span
          className={atoms({
            position: badgePosition,
            display: 'block',
          })}
          style={badgeStyle}
          title={title}
        >
          {badgeContent}
        </span>
      )}

      {dot &&
        typeof badgeContent !== 'object' &&
        (badgeContent !== 0 || showZero) && (
          <span
            className={atoms({
              position: badgePosition,
              display: 'block',
              width: 2,
              height: 2,
              borderRadius: 'full',
              bg,
            })}
            data-testid="badge-dot"
            style={badgeStyle}
            title={title}
          />
        )}

      {!dot &&
        typeof badgeContent !== 'object' &&
        (badgeContent !== 0 || showZero) && (
          <span
            className={atoms({
              position: badgePosition,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 1,
              minWidth: 5,
              height: 5,
              borderRadius: 'full',
              color: 'white',
              fontSize: 'xs',
              letterSpacing: 'wide',
              lineHeight: 'none',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              bg,
              overflow: 'hidden',
            })}
            style={badgeStyle}
            title={title}
          >
            {badgeContent}
          </span>
        )}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
