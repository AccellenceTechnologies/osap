#!/usr/bin/env node

// validate.js – prüft alle Beispiele gegen das OSAP-JSON-Schema
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const schemaPath = path.join(__dirname, "schemas", "osap-event.schema.json");
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

const ajv = new Ajv({ strict: true, allErrors: true });
addFormats(ajv);

const validate = ajv.compile(schema);

// Alle JSON-Dateien im examples/ Ordner finden
const files = glob.sync("examples/*.json");

let hasError = false;

files.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const valid = validate(data);
  if (!valid) {
    console.error(`❌ Validation failed for ${file}:`);
    console.error(validate.errors);
    hasError = true;
  } else {
    console.log(`✅ ${file} is valid`);
  }
});

if (hasError) {
  process.exit(1);
}
