# cassidoo-interview

Interview question from cassidoo's newsletter.

## Requirements

[Docker](https://www.docker.com)

## Usage

```bash
# run both services in parallel
docker compose up

# run a single service
docker compose up bun
docker compose up test
```

## Exercices

```bash
# Create a new exercice
NAME="two sum" docker compose run --rm scaffold
# → exercices/YYYY-MM-DD-two-sum/index.ts
# → exercices/YYYY-MM-DD-two-sum/index.test.ts

# Run all tests
docker compose up test

# Run a specific exercice tests (watch)
EXERCICE=YYYY-MM-DD-two-sum docker compose up test

# Type-check the whole project
docker compose run --rm check

# Type-check a specific exercice
EXERCICE=YYYY-MM-DD-two-sum docker compose run --rm check
```
