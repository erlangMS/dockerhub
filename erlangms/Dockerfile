FROM erlangms_debian

MAINTAINER evertonagilar <evertonagilar@gmail.com>

ENV HOME /var/opt/erlangms
ENV ERLANGMS_IN_DOCKER true

WORKDIR $HOME/ems-bus

ADD assets /assets
RUN /assets/setup.sh
RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 2300 2301 2389 4369

# Volumes
VOLUME ~/.erlangms
VOLUME ~/.odbc.ini


CMD ["/var/opt/erlangms/ems-bus/start.sh"]


