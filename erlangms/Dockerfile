FROM erlangms_debian

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ENV HOME /var/opt/erlangms
ENV ERLANGMS_IN_DOCKER true

WORKDIR $HOME/ems-bus

ADD assets /assets
RUN /assets/setup.sh
RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 2300 2301 2389

# Volumes
VOLUME ~/.erlangms
VOLUME ~/.odbc.ini
VOLUME ~/.hosts.erlang

CMD ["/var/opt/erlangms/ems-bus/start.sh"]


