compose = docker compose -f local-dev/compose.yaml

.PHONY: local.up

local.up:
	${compose} up -d

local.up.build:
	${compose} up --build -d
