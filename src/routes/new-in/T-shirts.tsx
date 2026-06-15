import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-in/T-shirts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/new-in/T-shirts"!</div>
}
