FROM erlangms/erlangms:2.0.7

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

SHELL ["/bin/bash", "-c"]

ENV JAVA_HOME /var/opt/jdk/jdk1.8.0_152
ENV JBOSS_HOME /var/opt/wildfly
ENV JBOSS_CONFIG standalone.xml

ADD assets   /assets
ADD config   /var/opt/erlangms/.erlangms/

RUN dos2unix -q /assets/*.{sh,xml}
RUN dos2unix -q /var/opt/erlangms/.odbc.ini
RUN dos2unix -q /var/opt/erlangms/.erlangms/*.{json,conf,ini}

RUN /assets/download_wildfly.sh
RUN /assets/download_jdk.sh
RUN /assets/download_jtds.sh
 
ADD assets/start.sh /var/opt/erlangms/ems-bus/start.sh
ADD assets/start_tmux.sh /var/opt/erlangms/ems-bus/start_tmux.sh
ADD assets/standalone.xml /var/opt/wildfly/standalone/configuration/standalone.xml

RUN /assets/setup_odbc.sh
RUN /assets/setup_wildfly.sh

RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 2301





