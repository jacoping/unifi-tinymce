#REGOLE PULIZIA

## TAG AMMESSI: BLOCK
p
h2
h3
h4
blockquote
hr
figure
figcaption
iframe (solo se dentro div)
div (solo se ha classe iframe-container dentro solo iframe, no altri tag, no testo sciolto)
table
ol
ul
li (solo se dentro ol o ul)

## TAG AMMESSI: INLINE
img
a
em
u
del
strong
br
sub
sub

## TAG AMMESSI: TABELLE
thead
tbody
tfoot
th
tr
td
col
colgroup

## FIGLI AMMESSI
il primo livello deve essere un tag block
dentro i tag block ci possono essere tag inline (vedi sopra)
dentro i tag block non ci possono essere altri tag block tranne:
- figure [img, figcaption]
- div [iframe]
- ol/ul [li]
- table [thead, tbody, tfoot... con tutti i loro figli come da specifiche html]

## attributi ammessi
id|style|src|alt|href|title|target|class
allowfullscreen (solo per iframe)

## classi ammesse
div.iframe-container
figure.miniature-container
figure.with-caption

##stili in linea ammessi
list-style-type
tutti gli altri stili in linea devono essere rimossi

##altre trasformazioni
<span(style="text-decoration:underline")> => <u>
<span(style="text-decoration:strikethrough")> => <del>
