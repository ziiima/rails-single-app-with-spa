ARG RUBY_VERSION

FROM ruby:${RUBY_VERSION}-alpine3.21 as dev

ARG NODE_VERSION
ARG WORKING_DIR

ENV NODE_VERSION=${NODE_VERSION}

WORKDIR ${WORKING_DIR}

RUN apk update \
    # rails v8 base dependency
    && apk add --no-cache gcc git gcompat tzdata build-base \
    # nodejs dependeny from  https://github.com/nodejs/docker-node/blob/main/22/alpine3.21/Dockerfile
    && apk add --no-cache --virtual .build-deps \
        curl \
    && apk add --no-cache --virtual .build-deps-full \
        binutils-gold g++ gcc gnupg libgcc linux-headers make python3 py-setuptools \
    && apk add --update nodejs npm