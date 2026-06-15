import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-in/Jeans')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/new-in/Jeans"!</div>
}
