FROM erlangms/debian

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ENV HOME /var/opt/erlangms
ENV ERLANGMS_IN_DOCKER true
ENV HOSTNAME="erlangms"

WORKDIR $HOME/ems-bus

ADD assets/.hosts.erlang /root/.hosts.erlang

ADD assets /assets
RUN /assets/setup.sh
RUN rm -rf /assets

CMD ["/var/opt/erlangms/ems-bus/start.sh"]



