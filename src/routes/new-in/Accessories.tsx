import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-in/Accessories')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/new-in/Accessories"!</div>
}
