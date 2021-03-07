FROM php:7.4-fpm-alpine3.12

# Setup working directory
WORKDIR /var/www/html

# Install composer
ENV COMPOSER_HOME=/composer
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

RUN apk update \
    && apk add --no-cache git bash \
    # symfony cli
    && curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony/bin/symfony /usr/local/bin/symfony \
    # Set composer cache folder rights
    && mkdir ${COMPOSER_HOME} \
    && find ${COMPOSER_HOME} -type d -exec chmod -v 777 {} + \
    && chown -R www-data:www-data ${COMPOSER_HOME} \
    && find ${COMPOSER_HOME} -type d -exec chmod g+s {} \;

CMD cd /var/www/html && composer install && composer bin all install ; php-fpm