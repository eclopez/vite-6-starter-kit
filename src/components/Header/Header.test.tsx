import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    render(<Header title="Header goes here!" />);

    expect(screen.getByText('Header goes here!')).toBeInTheDocument();
  });
});
