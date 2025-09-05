---
name: Bug Report
about: Melde einen Fehler in Spec, Schema, OpenAPI oder Referenzcode
title: "[BUG] Kurzer Titel"
labels: ["bug"]
assignees: []
---

## Beschreibung
Beschreibe das Problem in 1–3 Sätzen.

## Reproduktionsschritte
1. …
2. …
3. …

## Erwartetes Verhalten
Was hätte passieren sollen?

## Tatsächliches Verhalten
Was ist passiert?

## Umgebung
- Bereich: [ ] Spec / [ ] OpenAPI / [ ] Schema / [ ] Reference / [ ] Docs
- OS/Runtime/Tools (z. B. Node/Go/Ajv/Redocly):

## Anhänge / Beispiel
- Payload/Beispiel (`examples/*.json`)
- Log/Fehlermeldung

## Checkliste
- [ ] Gegen `main` getestet
- [ ] `npm run validate:schema` (falls relevant) ausgeführt
- [ ] `npm run lint:openapi` (falls relevant) ausgeführt
