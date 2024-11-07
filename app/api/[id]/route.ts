import books from "../db";

export async function PUT(req: Request, context: { params: { id: string } }) {
  const id = +context.params.id;
  const book = await req.json();

  const index = books.findIndex((b) => b.id === id);
  books[index] = book;

  return new Response(JSON.stringify(books));
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  const index = books.findIndex((b) => b.id === id);
  books.splice(index, 1);

  return new Response(JSON.stringify(books));
}
