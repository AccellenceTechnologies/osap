.PHONY: lint schema bundle
lint:
	npm run lint:openapi
schema:
	npm run validate:schema
bundle:
	npm run build:openapi
