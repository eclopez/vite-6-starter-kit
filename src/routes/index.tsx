import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <Header title="Welcome Home!" />;
}
