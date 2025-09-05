# OSAP – Open Secure Alarm Protocol

[![CI](https://github.com/AccellenceTechnologies/osap/actions/workflows/ci.yml/badge.svg)](https://github.com/AccellenceTechnologies/osap/actions/workflows/ci.yml)
[![Pages](https://github.com/AccellenceTechnologies/osap/actions/workflows/pages.yml/badge.svg)](https://accellencetechnologies.github.io/osap/)

OSAP (Open Secure Alarm Protocol) ist ein offenes, sicheres, JSON-over-HTTPS Protokoll für den Austausch von Alarm-Events zwischen Video Management Systemen (VMS) und Notruf-/Service-Leitstellen (NSL/ARC).

- 🔒 **Secure by design** – TLS/HTTPS, mTLS optional, JSON Schema Validation  
- 🌍 **Open** – Apache-2.0 Lizenz, öffentlich auf GitHub  
- 🔗 **Aligned** – nutzt VdS-Event-Semantik (Profile), ohne Zertifizierungsanspruch  
- 📷 **Evidence-ready** – Bilder und Daten als Base64 oder URL im Event-Payload  
- 🛠️ **Developer-friendly** – OpenAPI-Spec, JSON Schema, Beispiele und Referenzimplementierungen  

**Media Type:** `application/vnd.osap+json;v=1`  
**Current Version:** `v1alpha`  

## 📑 Specification
- [OpenAPI Spec](./openapi.yaml)
- [JSON Schema](./schemas/osap-event.schema.json)
- [Examples](./examples/)

## 📖 API Docs
- **Redoc:** https://accellencetechnologies.github.io/osap/  
- **Swagger UI:** https://accellencetechnologies.github.io/osap/swagger.html

## 🤝 Contribution
Wir freuen uns über Issues, PRs und Diskussionen.  
Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) und [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

### 🔧 Lokales Setup für Contributor
Damit vor jedem Commit automatisch die wichtigsten Checks laufen (Schema-Validation, OpenAPI-Lint), nutzen wir **Husky (v9)** für Git-Hooks.

1. Dependencies installieren:
   ```bash
   npm ci
   ```

2. Husky initialisieren (einmalig):
   ```bash
   npx husky init
   ```
   ➡️ erstellt `.husky/` und einen Beispiel-Hook.

3. Pre-commit Hook anpassen (`.husky/pre-commit`):
   ```sh
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"

   npm run precommit
   ```

4. Sicherstellen, dass in `package.json` ein `precommit`-Script existiert:
   ```json
   "scripts": {
     "precommit": "npm run validate:schema && npm run lint:openapi"
   }
   ```

Ab jetzt werden die Checks vor jedem Commit automatisch ausgeführt. Fehlerhafte Commits werden blockiert.

## 🔒 Security
Bitte keine Sicherheitslücken in Issues posten.  
Meldungen bitte vertraulich per Mail an: **helpdesk@accellence.de**  
Siehe [SECURITY.md](./SECURITY.md).

---

© 2025 Accellence Technologies GmbH. Licensed under [Apache-2.0](./LICENSE).
