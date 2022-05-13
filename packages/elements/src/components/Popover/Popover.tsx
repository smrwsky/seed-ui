import {
  ContentLocation,
  ContentLocationGetter,
  PopoverAlign,
  PopoverPosition,
  PopoverState,
  usePopover,
} from 'react-tiny-popover';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isEqual } from 'lodash';

import withCsrOnly from '../../utils/with-csr-only';

import PopoverPortal from './PopoverPortal';

export type PopoverTrigger = 'click' | 'hover' | 'focus';

export type PopoverProps = {
  align?: PopoverAlign;
  anchorElement?: HTMLElement;
  boundaryElement?: HTMLElement;
  boundaryInset?: number;
  children: ((popoverState: PopoverState) => JSX.Element) | React.ReactNode;
  className?: string;
  contentLocation?: ContentLocation | ContentLocationGetter;
  defaultOpen?: boolean;
  offset?: number;
  onChangeOpen?: (visible: boolean) => void;
  open?: boolean;
  padding?: number;
  parentElement?: HTMLElement;
  position?: PopoverPosition | PopoverPosition[];
  reposition?: boolean;
  trigger?: PopoverTrigger | PopoverTrigger[];
};

export const DEFAULT_ALIGN: PopoverAlign = 'center';

export const DEFAULT_CLIENT_RECT: ClientRect = {
  top: 0,
  left: 0,
  bottom: 0,
  height: 0,
  right: 0,
  width: 0,
};

export const DEFAULT_POSITION: PopoverPosition[] = [
  'top',
  'left',
  'right',
  'bottom',
];

export const DEFAULT_TRIGGER: PopoverTrigger = 'click';

function Popover({
  anchorElement,
  align = DEFAULT_ALIGN,
  boundaryElement = window.document.body,
  boundaryInset = 0,
  children,
  className,
  contentLocation,
  defaultOpen = false,
  onChangeOpen,
  open,
  padding = 0,
  parentElement = window.document.body,
  position = DEFAULT_POSITION,
  reposition = true,
  trigger = DEFAULT_TRIGGER,
}: PopoverProps): JSX.Element | null {
  const positions = useMemo(
    () => (Array.isArray(position) ? position : [position]),
    [position],
  );

  const [popoverState, setPopoverState] = useState<PopoverState>({
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

  const childRef = useRef(anchorElement);
  const prevIsOpen = useRef(false);
  const prevPositions = useRef<PopoverPosition[] | undefined>();

  const prevContentLocation = useRef<
    ContentLocation | ContentLocationGetter | undefined
  >();

  const prevReposition = useRef(reposition);

  const handlePositionPopover = useCallback((val: PopoverState) => {
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
    containerClassName: className,
    onPositionPopover: handlePositionPopover,
  });

  const [openState, setOpenState] = useState(defaultOpen);

  const triggers = useMemo(
    () => (Array.isArray(trigger) ? trigger : [trigger]),
    [trigger],
  );

  const changeOpen = useCallback(
    (val: boolean) => {
      if (typeof open === 'undefined' && !onChangeOpen) {
        setOpenState(val);
      } else {
        onChangeOpen?.(val);
      }
    },
    [onChangeOpen, open],
  );

  const handleChildBlur = useCallback(() => {
    if ('focus' in triggers) {
      changeOpen(false);
    }
  }, [changeOpen, triggers]);

  const handleChildClick = useCallback(() => {
    if ('click' in triggers) {
      changeOpen(true);
    }
  }, [changeOpen, triggers]);

  const handleChildFocus = useCallback(() => {
    if ('focus' in triggers) {
      changeOpen(true);
    }
  }, [changeOpen, triggers]);

  const handleChildMouseEnter = useCallback(() => {
    if ('hover' in triggers) {
      changeOpen(true);
    }
  }, [changeOpen, triggers]);

  const handleOutsideMouseDown = useCallback(
    (e: MouseEvent) => {
      if (
        'click' in triggers &&
        openState &&
        !popoverRef.current?.contains(e.target as Node)
      ) {
        e.preventDefault();
        changeOpen(false);
      }
    },
    [changeOpen, openState, popoverRef, triggers],
  );

  const handleOutsideMouseMove = useCallback(
    (e: MouseEvent) => {
      if (
        'hover' in triggers &&
        openState &&
        !popoverRef.current?.contains(e.target as Node) &&
        !childRef.current?.contains(e.target as Node)
      ) {
        changeOpen(false);
      }
    },
    [changeOpen, openState, popoverRef, triggers],
  );

  const handleWindowResize = useCallback(() => {
    if (childRef.current) {
      window.requestAnimationFrame(() => positionPopover());
    }
  }, [positionPopover]);

  useLayoutEffect(() => {
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

  useEffect(() => {
    if (typeof open !== 'undefined') {
      setOpenState(open);
    }
  }, [open]);

  useEffect(() => {
    childRef.current = anchorElement;
  }, [anchorElement]);

  useEffect(() => {
    const { current } = childRef;
    current?.addEventListener('blur', handleChildBlur);
    return () => current?.removeEventListener('blur', handleChildBlur);
  }, [handleChildBlur]);

  useEffect(() => {
    const { current } = childRef;
    current?.addEventListener('click', handleChildClick);
    return () => current?.removeEventListener('click', handleChildClick);
  }, [handleChildClick]);

  useEffect(() => {
    const { current } = childRef;
    current?.addEventListener('focus', handleChildFocus);
    return () => current?.removeEventListener('focus', handleChildFocus);
  }, [handleChildFocus]);

  useEffect(() => {
    const { current } = childRef;
    current?.addEventListener('mouseenter', handleChildMouseEnter);

    return () => {
      current?.removeEventListener('mouseenter', handleChildMouseEnter);
    };
  }, [handleChildMouseEnter]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideMouseDown);
    };
  }, [handleOutsideMouseDown, openState, triggers]);

  useEffect(() => {
    document.addEventListener('mousemove', handleOutsideMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleOutsideMouseMove);
    };
  }, [handleOutsideMouseMove]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    if ('click' in triggers && openState) {
      document.body.style.pointerEvents = 'none';
    }

    return () => {
      document.body.style.pointerEvents = 'auto';
    };
  }, [openState, triggers]);

  if (!openState) {
    return null;
  }

  return (
    <PopoverPortal
      container={parentElement}
      element={popoverRef.current}
      scoutElement={scoutRef.current}
    >
      {typeof children === 'function' ? children(popoverState) : children}
    </PopoverPortal>
  );
}

export default withCsrOnly(Popover);
