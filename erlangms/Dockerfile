FROM erlangms/debian:2.0.7

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

SHELL ["/bin/bash", "-c"]

ENV HOME /var/opt/erlangms
ENV ERLANGMS_IN_DOCKER true
ENV HOSTNAME="erlangms"

WORKDIR $HOME/ems-bus

ADD assets /assets
ADD assets/.hosts.erlang /root/.hosts.erlang

RUN dos2unix -q /assets/*.{sh,xml}
RUN dos2unix -q /root/.hosts.erlang

RUN /assets/setup.sh

RUN rm -rf /assets

CMD ["/var/opt/erlangms/ems-bus/start.sh"]



