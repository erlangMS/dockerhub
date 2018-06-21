FROM erlangms/erlangms:2.0.1

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

ADD odbc.ini  /var/opt/erlangms/.odbc.ini
ADD config    /var/opt/erlangms/.erlangms/
ADD projects/ /var/www/

# Expose the ports we're interested in
EXPOSE 8081




