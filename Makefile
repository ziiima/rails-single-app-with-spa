compose = docker compose -f local-dev/compose.yaml

.PHONY: local.up local.server.start

local.up:
	${compose} up -d

local.up.build:
	${compose} up --build -d

local.server.start:
	bundle exec rails s -b 0.0.0.0
