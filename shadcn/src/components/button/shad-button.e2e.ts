import { newE2EPage } from '@stencil/core/testing';

describe('shad-button E2E', () => {
  it('renders correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<shad-button variant="primary">Click me</shad-button>');

    const buttonElement = await page.find('shad-button >>> button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toHaveClass('bg-blue-500');
    expect(buttonElement.textContent).toBe('Click me');
  });

  it('applies the correct variant class', async () => {
    const page = await newE2EPage();
    await page.setContent('<shad-button variant="secondary">Click me</shad-button>');

    const buttonElement = await page.find('shad-button >>> button');
    expect(buttonElement).toHaveClass('bg-gray-500');
  });

  it('shows loading text when loading is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<shad-button variant="primary" loading loading-text="Please wait...">Click me</shad-button>');

    const buttonElement = await page.find('shad-button >>> button');
    expect(buttonElement.textContent).toBe('Please wait...');
  });

  it('disables the button when disabled is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<shad-button variant="primary" disabled>Click me</shad-button>');

    const buttonElement = await page.find('shad-button >>> button');
    expect(buttonElement).toHaveAttribute('disabled');
  });

  it('renders the asChild anchor tag correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <shad-button as-child>
        <a href="/login">Login</a>
      </shad-button>
    `);

    const anchorElement = await page.find('shad-button >>> a');
    expect(anchorElement).not.toBeNull();
    expect(anchorElement.textContent).toBe('Login');
  });
});
