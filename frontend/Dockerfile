FROM nginx:alpine

# Kopioi kaikki tiedostot frontend/public-kansiosta
COPY frontend/public/ /usr/share/nginx/html/

# Kopioi juurihakemiston README.md ja images-kansio (valinnainen)
COPY ../README.md /usr/share/nginx/html/
COPY ./images/ /usr/share/nginx/html/images/
