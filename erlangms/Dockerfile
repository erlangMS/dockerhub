FROM erlangms_debian

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ENV HOME /var/opt/erlangms
ENV ERLANGMS_IN_DOCKER true

WORKDIR $HOME/ems-bus

ADD assets/.hosts.erlang /root/.hosts.erlang

ADD assets /assets
RUN /assets/setup.sh
RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 2301 2389

# Volumes
#VOLUME ~/.erlangms
#VOLUME ~/.odbc.ini


CMD ["/var/opt/erlangms/ems-bus/start.sh"]
#ENTRYPOINT tmux new-session -s ErlangMS /var/opt/erlangms/ems-bus/start.sh



