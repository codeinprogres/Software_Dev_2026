FROM python:3.13-slim AS build

RUN apt-get update && apt-get install -y --no-install-recommends build-essential libffi-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
