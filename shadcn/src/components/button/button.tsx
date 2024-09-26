import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'shad-button'
})
export class ShadButton {
  @Prop() variant: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' = 'primary';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() loadingText: string = 'Loading...';
  @Prop() asChild: boolean = false;
  @Prop() icon?: string;

  private getButtonClasses() {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none transition ease-in-out duration-300';
    const sizeStyles = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2 text-md',
      large: 'px-6 py-3 text-lg',
    };

    const variantStyles = {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
      destructive: 'bg-red-500 hover:bg-red-600 text-white',
      outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
      ghost: 'text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent',
      link: 'underline text-blue-500 hover:text-blue-600',
    };

    const disabledStyles = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    const loadingStyles = this.loading ? 'cursor-wait' : '';

    return `${baseStyles} ${sizeStyles[this.size]} ${variantStyles[this.variant]} ${disabledStyles} ${loadingStyles}`;
  }

  render() {
    const buttonContent = this.loading ? <span>{this.loadingText}</span> : <slot />;

    if (this.asChild) {
      return (
        <a class={this.getButtonClasses()} aria-disabled={this.disabled ? 'true' : 'false'}>
          {this.icon && <i class={`icon-${this.icon}`}></i>}
          {buttonContent}
        </a>
      );
    }

    return (
      <button class={this.getButtonClasses()} disabled={this.disabled || this.loading}>
        {this.icon && <i class={`icon-${this.icon} mr-2`}></i>}
        {buttonContent}
      </button>
    );
  }
}
