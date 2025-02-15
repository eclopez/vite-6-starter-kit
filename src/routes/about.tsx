import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return <Header title="Hello from About!" />;
}
