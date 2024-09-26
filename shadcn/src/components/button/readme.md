# Shad Button Component

A flexible and customizable button component built using StencilJS. This component supports multiple variants, sizes, loading states, and the ability to wrap child components like links. It aims to provide an accessible and reusable button for your web projects.

## Features

- **Variants**: Supports primary, secondary, and danger styles.
- **Sizes**: Available in small, medium, and large sizes.
- **Loading State**: Displays a loading spinner and custom text while performing an action.
- **Disabled State**: Automatically applies disabled styles and disables interaction.
- **AsChild**: Allows wrapping a child component (e.g., an anchor tag) within the button.



### . Variants

You can change the style of the button using different variants:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### . Sizes

You can modify the size of the button:

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### . Loading State

You can display a loading spinner and text when the button is in a loading state:

```tsx
<Button loading loading-text="Please wait...">Submit</Button>
```

### . Disabled State

When the `disabled` prop is set to true, the button will be disabled:

```tsx
<Button disabled>Disabled</Button>
```

### . AsChild Prop

You can pass child components like `<a>` inside the button:

```tsx
<Button as-child>
  <a href="/login">Login</a>
</Button>
```

## Props

| Prop          | Type                           | Default  | Description                                                                     |
| ------------- | ------------------------------ | -------- | ------------------------------------------------------------------------------- |
| `variant`     | `'primary' \| 'secondary' \| 'danger' \| 'outline' \| 'ghost'` | `'primary'` | The variant of the button.                                                      |
| `size`        | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button.                                                         |
| `loading`     | `boolean`                      | `false`  | Shows a loading spinner when true.                                              |
| `loadingText` | `string`                       | `'Loading...'` | The text displayed when the button is in a loading state.                       |
| `disabled`    | `boolean`                      | `false`  | Disables the button when true.                                                  |
| `asChild`     | `boolean`                      | `false`  | Allows passing a child component (like a link) inside the button.               |

## Example

```tsx
<Button variant="primary" size="large" loading loading-text="Submitting...">
  Submit
</Button>
```

## Running Tests

### Unit Tests

To run the unit tests for the button, use the following command:

```bash
npm test
```

### End-to-End Tests

For E2E tests, use the command:

```bash
npm run e2e
```

## File Structure

- `shad-button.tsx`: The main component file.
- `shad-button.e2e.ts`: End-to-end testing file.
- `shad-button.spec.tsx`: Unit test file.

## Contributing

Feel free to submit issues and pull requests. We welcome contributions!

## License

This project is licensed under the MIT License.

---

_Built with [StencilJS](https://stenciljs.com/)_

---

This `README.md` provides a complete overview of the button component, including how to install, use, and test it. It also explains the various props and features available for customizing the component.