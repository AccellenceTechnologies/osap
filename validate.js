#!/usr/bin/env node
// validate.js – validiert alle examples/*.json gegen das OSAP-JSON-Schema (Draft 2020-12)

const Ajv = require("ajv/dist/2020").default;
const addFormats = require("ajv-formats");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Pfade
const schemaPath = path.join(__dirname, "schemas", "osap-event.schema.json");

// Schema laden
let schema;
try {
  schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
} catch (e) {
  console.error(`❌ Konnte Schema nicht lesen/parsen: ${schemaPath}\n${e.message}`);
  process.exit(1);
}

// Ajv-Instanz (Draft 2020-12) – strictRequired entschärfen für if/then-required
const ajv = new Ajv({
  strict: true,
  strictRequired: false, // erlaubt required in Subschemas (if/then) ohne lokale properties
  allErrors: true
});
addFormats(ajv);

// Validator kompilieren
let validate;
try {
  validate = ajv.compile(schema);
} catch (e) {
  console.error("❌ Schema konnte nicht kompiliert werden:", e.message);
  process.exit(1);
}

// Alle Example-Dateien suchen
const { globSync } = require("glob");
const files = globSync("examples/*.json");
if (files.length === 0) {
  console.warn("ℹ️ Keine Beispiel-Dateien gefunden (examples/*.json).");
  process.exit(0);
}

// Validieren
let hasError = false;

for (const file of files) {
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const ok = validate(data);
    if (!ok) {
      console.error(`❌ Validation failed for ${file}:`);
      console.error(validate.errors);
      hasError = true;
    } else {
      console.log(`✅ ${file} is valid`);
    }
  } catch (e) {
    console.error(`❌ Fehler beim Lesen/Parsen von ${file}: ${e.message}`);
    hasError = true;
  }
}

process.exit(hasError ? 1 : 0);
