// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_csrf_token from "./routes/api/csrf-token.tsx";
import * as $api_debate from "./routes/api/debate.tsx";
import * as $api_voicesynth from "./routes/api/voicesynth.tsx";
import * as $index from "./routes/index.tsx";
import * as $AgentSelector from "./islands/AgentSelector.tsx";
import * as $DarkModeToggle from "./islands/DarkModeToggle.tsx";
import * as $DebateForm from "./islands/DebateForm.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/csrf-token.tsx": $api_csrf_token,
    "./routes/api/debate.tsx": $api_debate,
    "./routes/api/voicesynth.tsx": $api_voicesynth,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AgentSelector.tsx": $AgentSelector,
    "./islands/DarkModeToggle.tsx": $DarkModeToggle,
    "./islands/DebateForm.tsx": $DebateForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
