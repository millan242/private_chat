import { Elysia, t } from "elysia";

const rooms = new Elysia({ prefix: "/room" }).post("/create", () => {
  console.log(`CREATE A NEW ROOM!`);
});

const app = new Elysia({ prefix: "/api" })
  .use(rooms)
  .get("/user", { user: { name: "Millan" } });

export type app = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
