FROM erlangms/erlangms:2.0.7

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

SHELL ["/bin/bash", "-c"]

ADD assets   /assets
ADD config   /var/opt/erlangms/.erlangms/

RUN dos2unix -q /assets/*.{sh,xml}
RUN dos2unix -q /var/opt/erlangms/.odbc.ini
RUN dos2unix -q /var/opt/erlangms/.erlangms/*.{json,conf,ini}

RUN /assets/setup_odbc.sh

RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 8081




