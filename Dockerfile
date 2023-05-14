FROM ubuntu:latest

# Install required packages
RUN apt-get update && \
    apt-get install -y python3 python3-pip nodejs npm && \
    apt-get install -y vim

# Set the working directory to /.
WORKDIR /app

# Install Python dependencies
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app

# Install Node.js dependencies
RUN npm install

# Expose port 8080
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]
