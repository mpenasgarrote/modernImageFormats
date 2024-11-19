# MP9.UF2.3 - Formats d'imatge moderns (WEBP and AVIF)

## Objectiu:

En aquesta tasca, analitzarem els formats d'imatge més nous i el seu impacte en el rendiment d'una pàgina web. També utilitzarem les DeveloperTools per analitzar la càrrega de les imatges.

### Instruccions:

Si ho necessites, pots utilitzar codi de l'activitat anterior (Act2 - Formats d'Imatge) ja que hauràs de mostrar les teves imatges de nou en un nou lloc web. Copia les coses necessàries que necessitis d'ella. Aquí només trobaràs les instruccions i les mateixes imatges originals que abans.

#### Llocs web d'imatges lliures de drets d'autor

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)
- [Burst](https://burst.shopify.com/)
- [StockSnap](https://stocksnap.io/)
- [Reshot](https://www.reshot.com/)
- [Gratisography](https://gratisography.com/)
- [Picjumbo](https://picjumbo.com/)
- [Kaboompics](https://kaboompics.com/)
- [Rawpixel](https://www.rawpixel.com/)
- [Foodiesfeed](https://www.foodiesfeed.com/)
- [Moose](https://photos.icons8.com/)
- [Life of Pix](https://www.lifeofpix.com/)
- [ISO Republic](https://isorepublic.com/)
- [New Old Stock](https://nos.twnsnd.co/)

#### Eines en línia per convertir imatges

- [Online Image Converter](https://image.online-convert.com/)
- [Squoosh](https://squoosh.app/)
- [Convertio](https://convertio.co/es)
- [CloudConvert](https://cloudconvert.com)
- [Image Online](https://image.online-convert.com)

#### Eines que vas compartir en l'activitat anterior


| Nom/Descripció | URL |
|----------------|-----|
| Convertio - Conversor d'imatges | [https://convertio.co/es/image-converter/](https://convertio.co/es/image-converter/) |
| FreeConvert - Conversor d'imatges | [https://www.freeconvert.com/](https://www.freeconvert.com/) |
| PicFlow - Conversor d'imatges | [https://picflow.com/image-converter](https://picflow.com/image-converter) |
| iLoveIMG - Conversor JPG a imatges | [https://www.iloveimg.com/jpg-to-image](https://www.iloveimg.com/jpg-to-image) |
| CompressJPEG | [https://compressjpeg.com/es/](https://compressjpeg.com/es/) |
| Photopea - Editor de fotos | [https://www.photopea.com/](https://www.photopea.com/) |
| Simple Image Resizer - Conversor d'imatges | [https://www.simpleimageresizer.com/image-converter](https://www.simpleimageresizer.com/image-converter) |
| xConvert - Eines de conversió | [https://www.xconvert.com/tools/convert](https://www.xconvert.com/tools/convert) |
| Editor de fotos fàcil | [https://www.photoeditor.com/](https://www.photoeditor.com/) |


## Pràctica d'Optimització d'Imatges Modernes

### Tasca 1: WebP

De la mateixa manera que vas fer en la tasca anterior, exportarem les imatges que vas usar en la pràctica anterior. Afegeix també un GIF animat. Si vols pots mirar de trobar altres imatges que s'adaptin millor al patró de les que et vaig proposar originalment (he tornat a afegir les imatges així com un .GIF animat d'en Homer Simpson). Pots utilitzar la mateixa eina en línia o qualsevol altra que prefereixis.

**COMPRIMEIX-LES EL MÀXIM POSSIBLE SENSE PERDRE QUALITAT PERCEPTIBLE!**

Si les teves imatges ho permeten, intenta que puguin veure's correctament en una pantalla 4k (3840x2160), mostrant la imatge a pantalla completa.

Finalment, crea una taula (pots consultar el disseny de taules amb Tailwind a [aquest enllaç](https://tailwindcss.com/docs/table-layout)) al final de la pàgina amb la informació del model proporcionat.

Utilitza kB com a unitat per la mida de les imatges per facilitar la comparació. Intenta-ho fer-ho de manera dinàmica (fent que llegeixi el tamany de la imatge).

La estalvi pot calcular-se de la següent manera: **estalvi = (mida original - mida nova) / mida original \* 100**. Vegeu l'exemple de la taula:

**Exemple de Taula**

| Nom Imatge | Mida Original | JPG (Estalvi %) | WebP (Estalvi %) |
| ---------- | ------------- | --------------- | ---------------- |
| gos.jpg    | 500kB         | 100kB (80%)     | ...              |

**¿Què passa amb el fitxer GIF? Podem utilitzar WebP per reemplaçar-lo?**

### Tasca 2: AVIF

AVIF és un format d'imatge de codi obert desenvolupat per la Alliance for Open Media (AOMedia) al febrer de 2019. Serveix tant per a imatges fixes com per a imatges animades i deriva del format de vídeo AV1. L'objectiu principal era crear un format de codificació de vídeo d'última generació lliure de royalties.

#### Beneficis Clau:

- **Compressió Eficient**: AVIF admet compressió molt eficient tant amb pèrdua com sense, resultant en imatges d'alta qualitat després de la compressió.
- **Compressió Superior**: Comparat amb formats populars com JPEG, WebP i JPEG 2000, AVIF sovint aconsegueix una compressió significativament millor. Les imatges poden ser fins a deu vegades més petites que els JPEG mantenint una qualitat visual similar.
- **Estalvi de Mida**: En algunes proves, AVIF ha demostrat una reducció del 50% en la mida del fitxer comparat amb JPEG, tot mantenint una qualitat perceptual comparable.

#### Consideracions

Tot i que AVIF sol destacar, pot haver-hi casos on la compressió sense pèrdua de WebP superi la d'AVIF, per la qual cosa es recomana una avaluació manual.

**En resum**, AVIF ofereix capacitats de compressió avançades, convertint-lo en una opció atractiva per a imatges web amb el potencial de reduir significativament la mida del fitxer sense sacrificar la qualitat.

#### Què cal fer:

Consulta el següent article que té molts exemples de quan i com utilitzar AVIF: [https://jakearchibald.com/2020/avif-has-landed/](https://jakearchibald.com/2020/avif-has-landed/)

Crea una nova pàgina anomenada **avif.html** (pots mirar de posar alguna navegació entre pàgines).

Troba **3 NOUS EXEMPLES DE DIFERENTS IMATGES MÉS AVIAT FOTOGRÀFIQUES EN FORMAT JPEG (consulta la secció de llocs web amb imatges lliures de drets d'autor. Serà millor si tenen patrons diferents, com repeticions d'elements, colors, etc.).**

Com has fet abans, troba el nivell de compressió òptim per a les imatges per tal de mostrar-les en una pantalla gran i utilitza els formats **JPG, WebP i AVIF**.

Crea una nova taula com la de la tasca anterior per mostrar els resultats i les diferències respecte la imatge original.

Explica el que has pogut observar, les diferències, si AVIF és una bona substitució per a WebP, etc.

Publica el lloc web a **GitHub Pages, Netlify o Vercel** i comparteix l'enllaç a la tasca de Moodle.

### Tasca 3: Accessibilitat Web i Impacte en el SEO amb Lighthouse

Utilitza l'eina **Lighthouse** (disponible a Chrome DevTools) per realitzar una anàlisi de la pàgina web que vas crear per al projecte de la UF1, centrant-te en l'accessibilitat i el rendiment relacionat amb les imatges. Investiga els resultats obtinguts i revisa els següents aspectes importants:

- **Accessibilitat**: Contrast de color, etiquetes alt a les imatges, ús adequat d'elements ARIA.
- **Rendiment**: Temps de càrrega de les imatges, mida de les imatges i compressió adequada.
- **SEO**: Etiquetes meta, estructuració adequada del contingut, atributs alt en les imatges.

Escriu un informe breu (afegeix una tercera pàgina a la teva web pública) sobre quins aspectes poden millorar-se per augmentar l'accessibilitat i optimitzar el SEO, especialment en relació amb la compressió d'imatges i el temps de càrrega.
