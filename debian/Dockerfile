FROM erlang:20.3.6

MAINTAINER evertonagilar <evertonagilar@gmail.com>

ENV DEBIAN_FRONTEND=noninteractive
ENV TERM xterm-256color

# Source list
RUN echo deb http://ftp.br.debian.org/debian stretch main contrib non-free             >> /etc/apt/sources.list
RUN echo deb http://security.debian.org/ stretch/updates main contrib non-free         >> /etc/apt/sources.list
RUN echo deb http://ftp.br.debian.org/debian/ stretch-updates main contrib non-free    >> /etc/apt/sources.list
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# update
RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends apt-utils

# Sets the locale to pt_BR.UTF-8
RUN apt-get install locales locales-all -q -y && locale-gen pt_BR.UTF-8  
ENV LANG pt_BR.UTF-8  
ENV LANGUAGE pt_BR:pt:en 
ENV LC_ALL pt_BR.UTF-8
ENV LS_OPTIONS='--color=auto'

# Define timezone para horario de Brasilia (America/Sao_Paulo)
RUN echo America/Sao_Paulo > /etc/timezone && \
    ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata
ENV TZ America/Sao_Paulo


ADD assets /assets
RUN /assets/setup.sh
RUN rm -rf /assets


CMD ["/bin/bash"]


