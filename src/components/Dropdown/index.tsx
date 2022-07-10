import React, {ReactElement, useEffect, PropsWithChildren, useMemo, useRef, useState} from 'react';
import classnames from 'classnames';
import Button, {IButtonProps} from '../Button';

export type XPosition = 'before' | 'after' | 'left' | 'center' | 'right';
export type YPosition = 'above' | 'below' | 'top' | 'bottom';
export type IDropdownItem = {
  text: string | ReactElement;
  disabled?: boolean;
} & {
  [key: string]: any;
};

export interface IDropdownProps {
  className?: string;
  text?: string | ReactElement;
  button?: ReactElement;
  buttonProps?: IButtonProps;
  arrow?: ReactElement | null;
  dropdown?: IDropdownItem[];
  dropdownClass?: string;
  dropdownItemClass?: string;
  dropdownOpened?: boolean;
  activeDropdownItemClass?: string;
  disabled?: boolean;
  activeItem?: IDropdownItem;
  xPosition?: XPosition;
  yPosition?: YPosition;
  onSelect?: (item: IDropdownItem) => void;
  onDropdownOpened?: () => void;
  onDropdownClosed?: () => void;
}

const Dropdown = ({
  className = '',
  text = '',
  button,
  buttonProps,
  arrow,
  dropdown,
  dropdownClass = '',
  dropdownItemClass = '',
  dropdownOpened = false,
  activeDropdownItemClass = 'font-bold',
  disabled,
  activeItem,
  xPosition = 'left',
  yPosition = 'below',
  children,
  onSelect = () => {},
  onDropdownOpened = () => {},
  onDropdownClosed = () => {},
}: PropsWithChildren<IDropdownProps>) => {
  const [opened, setOpened] = useState(dropdownOpened);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpened(dropdownOpened);
  }, [dropdownOpened]);

  useEffect(() => {
    if (!opened) {
      return;
    }

    const clickListener = (e: MouseEvent) => {
      let el: Node | null = e.target as Node;
      if (!el || !el.parentNode)
        return;

      while (el && el !== ref.current) {
        el = el.parentNode;
      }
      if (!el) {
        setOpened(false);
        onDropdownClosed();
      }
    };
    window.addEventListener('click', clickListener);
    return () => window.removeEventListener('click', clickListener);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  const arrowIcon = useMemo(() => {
    if (arrow === null)
      return undefined;

    if (buttonProps?.rightIcon)
      return buttonProps.rightIcon;

    if (arrow) {
      return (
        <div className={classnames('transform transition-transform', { 'rotate-180': opened })}>
          {arrow}
        </div>
      );
    }
    return (
      <i className={classnames('fa fa-angle-down transform transition-transform', { 'rotate-180': opened })} />
    );
  }, [arrow, buttonProps, opened]);

  const onToggle = () => {
    setOpened(!opened);
    if (opened)
      onDropdownClosed();
    else
      onDropdownOpened();
  };

  const onSelectItem = (item: IDropdownItem) => {
    if (item !== activeItem) {
      onSelect(item);
    }
    setOpened(false);
    onDropdownClosed();
  };

  useEffect(() => {
    if (!opened || !ref.current)
      return;

    const dropdown = ref.current.querySelector('.dropdown-wrapper');
    if (!(dropdown instanceof HTMLElement)) return;
    let element = dropdown;
    let offset = 0;
    while (element) {
      offset += element.offsetLeft;
      element = element.offsetParent as HTMLElement;
    }
    if (xPosition === 'left') {
      if (offset + dropdown.clientWidth > window.innerWidth) {
        dropdown.style.left = 'unset';
        dropdown.style.right = '0px';
      } else {
        dropdown.style.right = 'unset';
        dropdown.style.left = '0px';
      }
    }
  }, [opened, xPosition, yPosition]);

  return (
    <div
      className={classnames('relative transition-all', className)}
      ref={ref}
    >
      {button ? (
        <div onClick={onToggle}>{button}</div>
      ) : (
        <Button
          {...buttonProps}
          className={classnames(
            '!justify-between !normal-case',
            buttonProps?.className,
          )}
          rightIcon={arrowIcon}
          rightIconClass={classnames(buttonProps?.rightIconClass, '!ml-auto pl-2')}
          disabled={disabled}
          onClick={onToggle}
        >
          {text}
        </Button>
      )}

      <div className={classnames(
        'dropdown-wrapper absolute z-50 bg-white shadow-md transition-all',
        dropdownClass,
        opened ? 'max-h-56 overflow-auto' : '!max-h-0 !py-0 overflow-hidden',
        { 'left-0': xPosition === 'left' },
        { 'right-0': xPosition === 'right' },
        { 'top-6': yPosition === 'top' },
      )}>
        {dropdown ? dropdown.map((item, index) => (
          <div
            key={index}
            className={classnames(
              'hover:text-primary px-3 py-2 cursor-pointer transition-all',
              dropdownItemClass,
              item === activeItem ? activeDropdownItemClass : '',
            )}
            onClick={() => onSelectItem(item)}
          >
            {item.text}
          </div>
        )) : children}
      </div>
    </div>
  );
};

export default Dropdown;
