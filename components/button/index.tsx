import React, { PureComponent, MouseEventHandler } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';
import ActivityIndicator from '../activity-indicator';

export interface ButtonProps extends PropsType {
  prefixCls?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default class Button extends PureComponent<ButtonProps, {}> {
  static defaultProps = {
    prefixCls: 'za-button',
    theme: 'default',
    block: false,
    ghost: false,
    active: false,
    disabled: false,
    loading: false,
    shape: 'radius',
    onClick() {},
  };

  render() {
    const {
      prefixCls,
      className,
      theme,
      size,
      shape,
      icon,
      block,
      active,
      ghost,
      disabled,
      loading,
      onClick,
      children,
      ...others,
    } = this.props;

    const classes = classnames(`${prefixCls}`, className, {
      [`theme-${theme}`]: !!theme,
      [`size-${size}`]: !!size,
      [`shape-${shape}`]: !!shape,
      block,
      'bordered': !!ghost,
      active,
      disabled,
      loading,
    });

    const iconRender = loading
      ? <ActivityIndicator className="rotate360" />
      : icon;

    const childrenRender = children && <span>{children}</span>;

    const contentRender = (!!icon || loading)
      ? <div className={`${prefixCls}-content`}>{iconRender}{childrenRender}</div>
      : childrenRender;

    return (
      <a
        role="button"
        aria-disabled={disabled}
        className={classes}
        onClick={e => !disabled && typeof onClick === 'function' && onClick(e)}
        onTouchStart={() => {}}
        {...others}
      >
        {contentRender}
      </a>
    );
  }
}
