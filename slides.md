# Client as Code

Schnack über die Provisionierung von Clientgeräten

---

## Problem

* Neues Projekt - geil
* Neues Gerät - nicht so geil
    * erstmal ein paar Tage die Git Bash konfigurieren
    * erstmal versuchen weitere Pakete reinzupatchen
    * erstmal versuchen portable Varianten der Tools zu finden
    * erstmal kapieren, wo überall der corporate proxy dazwischenfunkt
    * Endboss: Rootzertifikate ![facepalm](https://media.giphy.com/media/27EhcDHnlkw1O/giphy.gif)

---

## Lösung

* Entwicklungsumgebung automatisch provisionieren
* Einsatz von Ansible
* Wiederverwendbar je Client:
    * neues Gerät mit Rootrechten oder
    * mit Vagrant und VirtualBox
* Wiederverwendbar für andere Kontexte wie Teams:
    * Verkürzung der Einarbeitungszeit
    * Setup ist dokumentiert
    * das Wissen ist teilbar
    * für den Neuen im Team:
        * entweder ![math girl](https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif)
        oder ![mind blown](https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif)

---

## Hands-On

```bash
git clone https://github.com/sberlin/dev-env
cd $_:t
vim .
```

