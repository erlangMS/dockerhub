FROM erlangms/erlangms

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ENV JAVA_HOME /var/opt/jdk/jdk1.8.0_152
ENV JBOSS_HOME /var/opt/wildfly
ENV JBOSS_CONFIG standalone.xml

ADD assets /assets

RUN /assets/download_wildfly.sh
 
ADD assets/jdk /var/opt/jdk
ADD assets/start.sh /var/opt/erlangms/ems-bus/start.sh
ADD assets/start_tmux.sh /var/opt/erlangms/ems-bus/start_tmux.sh
ADD assets/standalone.xml /var/opt/wildfly/standalone/configuration/standalone.xml
ADD assets/jtds /var/opt/wildfly/modules/system/layers/base/com/jtds
ADD odbc.ini /var/opt/erlangms/.odbc.ini
ADD config   /var/opt/erlangms/.erlangms/

RUN /assets/setup.sh

ADD deployments/*.war /var/opt/wildfly/standalone/deployments/
RUN /assets/configura_catalogos.sh

RUN rm -rf /assets

# Expose the ports we're interested in
EXPOSE 2301





