FROM erlang:20.3.6

LABEL maintainer "evertonagilar <evertonagilar@gmail.com>"

SHELL ["/bin/bash", "-c"]

ENV DEBIAN_FRONTEND noninteractive
ENV TERM xterm-256color
ENV ENV ~/.bashrc

# Source list
RUN echo deb http://ftp.br.debian.org/debian stretch main contrib non-free             >> /etc/apt/sources.list
RUN echo deb http://ftp.br.debian.org/debian/ stretch-updates main contrib non-free    >> /etc/apt/sources.list

# update
RUN apt-get update

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


