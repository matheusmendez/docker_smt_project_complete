FROM python:3.11.2
WORKDIR /usr/app/src
COPY ./app/ /usr/app/src
#RUN apt update && apt upgrade -y
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
