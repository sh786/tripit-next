export async function GET() {
  const exampleConfig = {
    title: 'TripIt',
    description: 'An AI-based travel planner to help you explore and plan your next great trip.'
  };

  return new Response(JSON.stringify({ data: exampleConfig }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
