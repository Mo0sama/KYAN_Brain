export async function onRequest() {
  return json({
    ok: true,
    service: "KYAN Brain API",
    time: new Date().toISOString()
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
