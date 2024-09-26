import { newSpecPage } from '@stencil/core/testing';
import { ShadButton } from './button';

describe('shad-button Unit', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [ShadButton],
      html: `<shad-button>Click me</shad-button>`,
    });

    expect(page.root).toEqualHtml(`
      <shad-button>
        <button class="inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none transition ease-in-out duration-300 px-4 py-2 text-md bg-blue-500 hover:bg-blue-600 text-white">
          <slot></slot>
        </button>
      </shad-button>
    `);
  });

  it('applies the correct variant class', async () => {
    const page = await newSpecPage({
      components: [ShadButton],
      html: `<shad-button variant="secondary">Click me</shad-button>`,
    });

    const buttonElement = page.root.shadowRoot.querySelector('button');
    expect(buttonElement.classList.contains('bg-gray-500')).toBe(true);
  });

  it('shows custom loading text when loading', async () => {
    const page = await newSpecPage({
      components: [ShadButton],
      html: `<shad-button loading loading-text="Please wait...">Click me</shad-button>`,
    });

    const buttonElement = page.root.shadowRoot.querySelector('button');
    expect(buttonElement.textContent).toBe('Please wait...');
  });

  it('disables the button', async () => {
    const page = await newSpecPage({
      components: [ShadButton],
      html: `<shad-button disabled>Click me</shad-button>`,
    });

    const buttonElement = page.root.shadowRoot.querySelector('button');
    expect(buttonElement.getAttribute('disabled')).not.toBeNull();
  });

  it('renders anchor tag when asChild is true', async () => {
    const page = await newSpecPage({
      components: [ShadButton],
      html: `
        <shad-button as-child>
          <a href="/login">Login</a>
        </shad-button>
      `,
    });

    const anchorElement = page.root.shadowRoot.querySelector('a');
    expect(anchorElement).not.toBeNull();
    expect(anchorElement.textContent).toBe('Login');
  });
});
