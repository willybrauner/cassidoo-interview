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

## Exercises

```bash
# create a new exercise
NAME="two sum" docker compose run --rm scaffold
# → questions/YYYY-MM-DD-two-sum/index.ts
# → questions/YYYY-MM-DD-two-sum/index.test.ts

# run a specific exercise
docker compose run --rm test bun test questions/YYYY-MM-DD-two-sum

# run all tests
docker compose up test
```
