FROM erlangms/erlangms:2.0.1

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ENV JAVA_HOME /var/opt/jdk/jdk1.8.0_152
ENV JBOSS_HOME /var/opt/wildfly
ENV JBOSS_CONFIG standalone.xml

ADD assets /assets

RUN /assets/download_wildfly.sh
 
ADD assets/jdk /var/opt/jdk
ADD assets/start.sh /var/opt/erlangms/ems-bus/start.sh
ADD assets/start_tmux.sh /var/opt/erlangms/ems-bus/start_tmux.sh

RUN /assets/setup.sh
RUN rm -rf /assets

ADD assets/standalone.xml /var/opt/wildfly/standalone/configuration/standalone.xml
ADD assets/jtds /var/opt/wildfly/modules/system/layers/base/com/jtds
ADD deployments /var/opt/wildfly/standalone/deployments

# Expose the ports we're interested in
EXPOSE 2301

#CMD /var/opt/erlangms/ems-bus/start_tmux.sh



