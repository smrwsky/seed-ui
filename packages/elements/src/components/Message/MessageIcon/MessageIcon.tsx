import { Icon } from '@seed-ui/icons';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, memo } from 'react';

import * as S from './MessageIcon.css';

export interface MessageIconProps {
  variant: 'danger' | 'warning' | 'info' | 'success' | 'light';
}

const MessageIcon: FC<MessageIconProps> = ({ variant }) => {
  return (
    (variant === 'danger' && (
      <Icon
        className={cn(S.root, S.rootVariant[variant], atoms({ mr: 2 }))}
        name="error-circle"
      />
    )) ||
    (variant === 'warning' && (
      <Icon
        className={cn(S.root, S.rootVariant[variant], atoms({ mr: 2 }))}
        name="error"
      />
    )) ||
    (variant === 'success' && (
      <Icon
        className={cn(S.root, S.rootVariant[variant], atoms({ mr: 2 }))}
        name="check-circle"
      />
    )) ||
    (variant === 'info' && (
      <Icon
        className={cn(S.root, S.rootVariant[variant], atoms({ mr: 2 }))}
        name="info-circle"
      />
    )) ||
    null
  );
};

MessageIcon.displayName = 'MessageIcon';

export default memo(MessageIcon);
