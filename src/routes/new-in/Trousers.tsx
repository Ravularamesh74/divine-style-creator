import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-in/Trousers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/new-in/Trousers"!</div>
}
