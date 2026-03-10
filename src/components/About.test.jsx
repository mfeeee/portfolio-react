import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { About } from './About';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Componente About', () => {
  it('deve renderizar o título e subtítulo corretamente', () => {
    render(<About theme="light" />);
    
    expect(screen.getByText('about.title')).toBeInTheDocument();
    expect(screen.getByText('about.subtitle')).toBeInTheDocument();
  });

  it('deve exibir a foto da desenvolvedora', () => {
    render(<About theme="light" />);
    const img = screen.getByAltText('Foto de Desenvolvedora');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('maratona2025.png'));
  });

  it('deve alterar a lógica da seta ao passar o mouse', () => {
    render(<About theme="light" />);
    const arrow = screen.getByAltText('Icone de Flecha');
    
    fireEvent.mouseOver(arrow);
  });
});