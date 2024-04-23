import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { Extra } from "./Extra";
import { setupServer } from "msw/node";
import { HttpResponse, graphql } from "msw";
import { Episode } from "../../services/rickandmorty";

describe("Extra", () => {
  const responsePages: Record<string, Episode[]> = {
    "1": [
      {
        name: "Pilot",
        air_date: "December 2, 2013",
        episode: "S01E01",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            image: "/avatar/1.jpeg",
          },
          {
            id: "2",
            name: "Morty Smith",
            image: "/avatar/2.jpeg",
          },
        ],
      },
    ],
  };

  const handlers = [
    graphql.query("GetEpisodesPage", ({ query, variables }) => {
      const { page } = variables;
      const index = page as string;
      return HttpResponse.json({
        data: {
          episodes: {
            results: responsePages[index],
          },
        },
      });
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should episodes from the first page initially", async () => {
    renderWithProviders(<Extra />);

    expect(await screen.findByText("Pilot")).toBeInTheDocument();
  });
});
