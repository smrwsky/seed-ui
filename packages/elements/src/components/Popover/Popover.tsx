import {
  ContentLocation,
  ContentLocationGetter,
  PopoverAlign,
  PopoverPosition,
  PopoverState,
  usePopover,
} from 'react-tiny-popover';
import React from 'react';
import { isEqual } from 'lodash';
import cn from 'classnames';

import withCsrOnly from '../../utils/with-csr-only';

import PopoverPortal from './PopoverPortal';
import * as S from './Popover.css';

export type PopoverTrigger = 'click' | 'hover' | 'focus';

export type PopoverProps = {
  align?: PopoverAlign;
  anchorElement?: HTMLElement | null;
  boundaryElement?: HTMLElement;
  boundaryInset?: number;
  children: ((popoverState: PopoverState) => JSX.Element) | React.ReactNode;
  className?: string;
  contentLocation?: ContentLocation | ContentLocationGetter;
  defaultOpen?: boolean;
  disabled?: boolean;
  offset?: number;
  onChangeOpen?: (visible: boolean) => void;
  open?: boolean;
  padding?: number;
  parentElement?: HTMLElement;
  position?: PopoverPosition | PopoverPosition[];
  reposition?: boolean;
  shouldLockBody?: boolean;
  trigger?: PopoverTrigger | PopoverTrigger[];
};

export const DEFAULT_ALIGN: PopoverAlign = 'center';

export const DEFAULT_CLIENT_RECT = {
  top: 0,
  left: 0,
  bottom: 0,
  height: 0,
  right: 0,
  width: 0,
} as const;

export const DEFAULT_POSITION: PopoverPosition[] = [
  'top',
  'left',
  'right',
  'bottom',
];

export const DEFAULT_TRIGGER: PopoverTrigger = 'click';

const Popover: React.FC<PopoverProps> = ({
  anchorElement,
  align = DEFAULT_ALIGN,
  boundaryElement = window.document.body,
  boundaryInset = 0,
  children,
  className,
  contentLocation,
  defaultOpen = false,
  disabled,
  onChangeOpen,
  open,
  padding = 0,
  parentElement = window.document.body,
  position = DEFAULT_POSITION,
  reposition = true,
  shouldLockBody,
  trigger = DEFAULT_TRIGGER,
}) => {
  const positions = React.useMemo(
    () => (Array.isArray(position) ? position : [position]),
    [position],
  );

  const [popoverState, setPopoverState] = React.useState<PopoverState>({
    align,
    padding,
    boundaryInset,
    boundaryRect: DEFAULT_CLIENT_RECT,
    childRect: DEFAULT_CLIENT_RECT,
    nudgedLeft: 0,
    nudgedTop: 0,
    parentRect: DEFAULT_CLIENT_RECT,
    popoverRect: DEFAULT_CLIENT_RECT,
    position: positions[0],
  });

  const childRef = React.useRef(anchorElement ?? undefined);
  const prevIsOpen = React.useRef(false);
  const prevPositions = React.useRef<PopoverPosition[] | undefined>();

  const prevContentLocation = React.useRef<
    ContentLocation | ContentLocationGetter | undefined
  >();

  const prevReposition = React.useRef(reposition);

  const handlePositionPopover = React.useCallback((val: PopoverState) => {
    setPopoverState(val);
  }, []);

  const { positionPopover, popoverRef, scoutRef } = usePopover({
    align,
    boundaryElement,
    boundaryInset,
    childRef,
    contentLocation,
    padding,
    parentElement,
    positions,
    reposition,
    containerClassName: cn(S.root, className),
    onPositionPopover: handlePositionPopover,
  });

  const [openState, setOpenState] = React.useState(defaultOpen);

  const triggers = React.useMemo(
    () => (Array.isArray(trigger) ? trigger : [trigger]),
    [trigger],
  );

  const changeOpen = React.useCallback(
    (val: boolean) => {
      if (typeof open === 'undefined' && !onChangeOpen) {
        setOpenState(val);
      } else {
        onChangeOpen?.(val);
      }
    },
    [onChangeOpen, open],
  );

  React.useLayoutEffect(() => {
    let shouldUpdate = true;

    const updatePopover = () => {
      if (openState && shouldUpdate) {
        const childRect = childRef?.current?.getBoundingClientRect();
        const popoverRect = popoverRef?.current?.getBoundingClientRect();

        if (
          childRect != null &&
          popoverRect != null &&
          (!isEqual(childRect, {
            top: popoverState.childRect.top,
            left: popoverState.childRect.left,
            width: popoverState.childRect.width,
            height: popoverState.childRect.height,
            bottom: popoverState.childRect.top + popoverState.childRect.height,
            right: popoverState.childRect.left + popoverState.childRect.width,
          }) ||
            popoverRect.width !== popoverState.popoverRect.width ||
            popoverRect.height !== popoverState.popoverRect.height ||
            popoverState.padding !== padding ||
            popoverState.align !== align ||
            positions !== prevPositions.current ||
            contentLocation !== prevContentLocation.current ||
            reposition !== prevReposition.current)
        ) {
          positionPopover();
        }

        if (positions !== prevPositions.current) {
          prevPositions.current = positions;
        }

        if (contentLocation !== prevContentLocation.current) {
          prevContentLocation.current = contentLocation;
        }

        if (reposition !== prevReposition.current) {
          prevReposition.current = reposition;
        }

        if (shouldUpdate) {
          window.requestAnimationFrame(updatePopover);
        }
      }

      prevIsOpen.current = openState;
    };

    window.requestAnimationFrame(updatePopover);

    return () => {
      shouldUpdate = false;
    };
  }, [
    align,
    contentLocation,
    openState,
    padding,
    popoverRef,
    popoverState.align,
    popoverState.childRect.height,
    popoverState.childRect.left,
    popoverState.childRect.top,
    popoverState.childRect.width,
    popoverState.padding,
    popoverState.popoverRect.height,
    popoverState.popoverRect.width,
    positionPopover,
    positions,
    reposition,
  ]);

  React.useEffect(() => {
    if (typeof open !== 'undefined') {
      setOpenState(open);
    }
  }, [open]);

  React.useEffect(() => {
    childRef.current = anchorElement ?? undefined;
  }, [anchorElement]);

  React.useEffect(() => {
    function handleOpen() {
      changeOpen(true);
    }

    function handleClose() {
      changeOpen(false);
    }

    if (!disabled && triggers.includes('click')) {
      anchorElement?.addEventListener('click', handleOpen);
    }

    if (!disabled && triggers.includes('focus')) {
      anchorElement?.addEventListener('focus', handleOpen);
      anchorElement?.addEventListener('blur', handleClose);
    }

    if (!disabled && triggers.includes('hover')) {
      anchorElement?.addEventListener('mouseenter', handleOpen);
    }

    return () => {
      anchorElement?.removeEventListener('click', handleOpen);
      anchorElement?.removeEventListener('focus', handleOpen);
      anchorElement?.removeEventListener('blur', handleClose);
      anchorElement?.removeEventListener('mouseenter', handleOpen);
    };
  }, [anchorElement, changeOpen, disabled, triggers]);

  React.useEffect(() => {
    function handleOutsideMouseDown(e: MouseEvent) {
      if (!popoverRef.current?.contains(e.target as Node)) {
        changeOpen(false);
      }
    }

    function handleOutsideMouseMove(e: MouseEvent) {
      if (
        !popoverRef.current?.contains(e.target as Node) &&
        !childRef.current?.contains(e.target as Node)
      ) {
        e.preventDefault();
        changeOpen(false);
      }
    }

    if (openState && !disabled && triggers.includes('click')) {
      document.addEventListener('mousedown', handleOutsideMouseDown);
    }

    if (openState && !disabled && triggers.includes('hover')) {
      document.addEventListener('mousemove', handleOutsideMouseMove);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideMouseDown);
      document.removeEventListener('mousemove', handleOutsideMouseMove);
    };
  }, [changeOpen, disabled, openState, popoverRef, triggers]);

  React.useEffect(() => {
    function handleWindowResize() {
      if (childRef.current) {
        window.requestAnimationFrame(() => positionPopover());
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [positionPopover]);

  React.useEffect(() => {
    if (!shouldLockBody || !triggers.includes('click') || !openState) {
      return undefined;
    }

    document.body.style.pointerEvents = 'none';

    return () => {
      document.body.style.pointerEvents = 'auto';
    };
  }, [openState, shouldLockBody, triggers]);

  if (!openState) {
    return null;
  }

  return (
    <PopoverPortal
      container={parentElement}
      element={popoverRef.current}
      scoutElement={scoutRef.current}
    >
      {children instanceof Function ? children(popoverState) : children}
    </PopoverPortal>
  );
};

Popover.displayName = 'Popover';

export default withCsrOnly(Popover);
