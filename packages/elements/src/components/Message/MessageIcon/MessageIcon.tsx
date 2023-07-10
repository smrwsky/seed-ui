import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, memo } from 'react';

import { Icon } from '../../Icon';

import * as S from './MessageIcon.css';

export interface MessageIconProps {
  variant: 'danger' | 'warning' | 'info' | 'success' | 'light';
}

const MessageIcon: FC<MessageIconProps> = ({ variant }) => {
  return (
    (variant === 'danger' && (
      <Icon
        className={cn(S.rootVariant[variant], atoms({ mr: 2 }))}
        fontSize="lg"
        name="error-circle"
      />
    )) ||
    (variant === 'warning' && (
      <Icon
        className={cn(S.rootVariant[variant], atoms({ mr: 2 }))}
        fontSize="lg"
        name="error"
      />
    )) ||
    (variant === 'success' && (
      <Icon
        className={cn(S.rootVariant[variant], atoms({ mr: 2 }))}
        fontSize="lg"
        name="check-circle"
      />
    )) ||
    (variant === 'info' && (
      <Icon
        className={cn(S.rootVariant[variant], atoms({ mr: 2 }))}
        fontSize="lg"
        name="info-circle"
      />
    )) ||
    null
  );
};

MessageIcon.displayName = 'MessageIcon';

export default memo(MessageIcon);
