import { Handlers } from "$fresh/server.ts";
import { conductDebateStream } from "lib/debate.ts";
import { validateDebateInput } from "lib/inputValidation.ts";

export const handler: Handlers = {
  async POST(req) {
    const input = await req.json();

    const validationResult = validateDebateInput(input);

    if (!validationResult.valid) {
      return new Response(JSON.stringify({ errors: validationResult.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const {
      position,
      context,
      numAgents,
      agentDetails,
      uuid,
      numDebateRounds,
    } = input;

    try {
      const stream = await conductDebateStream(
        position,
        context,
        numAgents,
        agentDetails,
        uuid,
        numDebateRounds,
      );
      if (!(stream instanceof ReadableStream)) {
        throw new Error("Invalid stream returned from conductDebateStream");
      }
      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    } catch (error) {
      console.error("Error conducting debate:", error);
      return new Response(
        JSON.stringify({ error: "Failed to conduct debate" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
