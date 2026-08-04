export const dynamic = "force-dynamic";

export function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "lumore://profile",
      "Cache-Control": "no-store",
    },
  });
}
