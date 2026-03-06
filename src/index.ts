#!/usr/bin/env node

import "dotenv/config";
import { createCLI } from "./main.js";

createCLI().parse();
