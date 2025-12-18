# Docker-Project

Tämä projekti esittelee yksinkertaisen Docker-pohjaisen sovelluksen, jossa on frontend, backend, tietokanta ja nginx reverse-proxy.  

---

## 1. Projektirakenne

Projekti on jaettu selkeisiin kansioihin:

- **backend/** – Node.js backend, Express + MySQL
- **frontend/** – HTML, CSS, JS + mahdollisuus ladata GitHub README
- **database/** – MySQL init-tiedostot
- **nginx/** – nginx reverse-proxy
- **docker-compose.yml** – koko projektin orchestrointi

---

## 2. Sovelluksen esittely

### Sovelluskuva
![Sovelluskuva](images/image1.png)  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.  

---

### Dokumentaation aloitus
Tässä dokumentaatiossa käydään läpi projektin rakenteen ja Dockerin konfiguraation.

#### Sovelluskuva 2
![Sovelluskuva](images/image2.png)  
Projektille luotu selkeä hakemistorakenne helpottaa ylläpitoa ja kehitystä.  

---

## 3. Docker-compose

docker-compose.yml määrittelee kaikki palvelut:

- **nginx** – frontendin ja backendin reverse-proxy
- **frontend** – HTML/CSS/JS sovellus
- **backend** – Node.js + MySQL
- **database** – MySQL kontti

### Docker-compose screenshot
![Sovelluskuva](images/image3.png)  
Ensimmäiset määritykset: portit, ympäristömuuttujat ja riippuvuudet.

---

### Nginx käynnissä
![Sovelluskuva](images/image4.png)  
Nginx reverse-proxy toimii ja frontend näkyy localhost-sivulla.  

---

## 4. Backend

Backend-hakemisto sisältää seuraavat tiedostot ja kansiot:

- **Dockerfile** – määrittää Node.js ympäristön
- **app.js** – API endpoints
- **package.json** – riippuvuudet

### Backend Dockerfile
![Sovelluskuva](images/image5.png)  
Tiedosto rakentaa Node.js kontti ja määrittää portit ja ympäristömuuttujat.

---

### Päivitetty docker-compose
![Sovelluskuva](images/image6.png)  
Lisätty restart-säännöt ja depends_on backendille ja database-kontille.

---

### Yhteenveto

Projekti näyttää:

- Miten Dockerin eri kontit kommunikoivat keskenään
- Kuinka frontend ja backend voidaan yhdistää nginx reverse-proxyn kautta
- Helpon tavan ladata README tai kuvia frontendille
- Selkeän hakemistorakenteen ja dokumentaation

#### Lopuksi
![Sovelluskuva](images/image7.png)  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec dui eget lorem elementum scelerisque.
