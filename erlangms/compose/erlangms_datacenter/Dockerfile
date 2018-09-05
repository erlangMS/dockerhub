FROM erlangms/erlangms

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

SHELL ["/bin/bash", "-c"]

ENV HOSTNAME="dc.unb.br"

ADD assets   	  /assets
ADD portal/dist   /var/www/portal

RUN dos2unix -q /assets/*.{sh,xml}
RUN dos2unix -q /var/opt/erlangms/.odbc.ini
RUN dos2unix -q /var/opt/erlangms/.erlangms/*.{json,conf,ini}

RUN /assets/setup_odbc.sh

RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 8081




