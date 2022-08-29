import { rest } from "msw";

/**
 * req, an information about a matching request;
 * res, a functional utility to create the mocked response;
 * ctx, a group of functions that help to set a status code, headers, body, etc. of the mocked response.
 */
export const handlers = [
  rest.get("https://localhost:3030/scoops", (req, res, ctx) => {
    return rest(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
];
