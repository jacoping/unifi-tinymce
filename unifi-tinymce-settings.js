var settings_contenuto = {

  init_instance_callback: function(editor) {

    editor.on('Change', function(data) {
      // wrappa tutti gli iframe con un div con classe iframe-container
      tinymce.activeEditor.dom.select('iframe').forEach(function(el) {
        var realparent = el.parentNode.parentNode;
        if (realparent.tagName != 'DIV') {
          var container = document.createElement('div');
          container.classList.add("iframe-container");
          tinymce.activeEditor.dom.replace(container, realparent, true);
        }
      });
      // elimina tuttu i div che non contengono un iframe e li trasforma in p vuoti (con un br dentro) + pulisce i div
      tinymce.activeEditor.dom.select('div').forEach(function(el) {
        if (el.classList.contains('iframe-container') && el.getElementsByTagName('SPAN').length > 0 && el.getElementsByTagName('SPAN')[0].classList.contains('mce-object-iframe') && el.getElementsByTagName('SPAN')[0].firstChild.tagName == 'IFRAME') {
          if (el.childNodes.length > 0) {
            // div is dirty: clean it
            el.childNodes.forEach(function(child) {
              if (child.tagName !== 'SPAN') {
                el.removeChild(child);
              }
            })
          }
        } else {
          // div is not an iframe container: delete it
          var emptyp = document.createElement('p');
          emptyp.innerHTML = '<br data-mce-bogus="1">';
          tinymce.activeEditor.dom.replace(emptyp, el, false);
        }
      })
    });
  },

  width: 960,
  height: 600,
  content_css: "https://dipartimento.didacommunicationlab.it/dist/app.css?v=1578566027",
  body_class: 'content-right',
  language: "it",
  schema: "html5",
  skin: "oxide-jacopo",
  entity_encoding: "raw",
  element_format: "html",

  // plugins attivi
  plugins: 'advlist anchor charmap code contextmenu hr image link lists media searchreplace table visualblocks visualchars wordcount fullscreen powerpaste template',

  // menu e toolbar
  menubar: false,
  toolbar1: 'bold italic underline strikethrough | superscript subscript | styleselect | charmap | removeformat | numlist bullist | hr | link unlink anchor | image media table template',
  toolbar2: ' undo redo | code | fullscreen',

  // toolbar mobile
  mobile: {
    theme: 'mobile'
  },


  // opzioni plugin
  powerpaste_allow_local_images: false,
  powerpaste_word_import: "clean",
  powerpaste_html_import: "clean",

  visualblocks_default_state: true,

  table_clone_elements: "a",
  table_appearance_options: false,
  table_advtab: false,
  table_cell_advtab: false,
  table_row_advtab: false,
  table_default_attributes: {},
  table_default_styles: {},
  table_responsive_width: true,
  table_resize_bars: false,
  table_style_by_css: true,

  link_class_list: [{
      title: "Nessuna",
      value: ""
    },
    {
      title: "Evidenza",
      value: "hilite"
    }
  ],
  link_title: true,

  image_dimensions: false,
  image_caption: false,
  image_advtab: false,

  media_dimensions: false,
  media_alt_source: false,
  media_poster: false,

  templates: [{
      title: 'Immagine con didascalia',
      description: 'This is my template.',
      content: '<figure class="with-caption"><img src="https://via.placeholder.com/2x1"><figcaption>Didascalia</figcaption></figure><p></p>'
    },
    {
      title: 'Miniature',
      description: 'This is my template.',
      content: '<figure class="miniature-container"><img src="https://via.placeholder.com/1"><figcaption><strong><u>Titolo</u></strong><br>Descrizione</figcaption></figure><p></p>'
    }
  ],

  formats: {
    underline: {
      inline: 'u'
    },
    strikethrough: {
      inline: 'del'
    },
  },

  style_formats: [{
      title: "Titolo principale (h2)",
      block: "h2"
    },
    {
      title: "Titolo secondario (h3)",
      block: "h3"
    },
    {
      title: "Titoletto (h4)",
      block: "h4"
    },
    {
      title: "Paragrafo",
      block: "p"
    },

    {
      title: "Blockquote",
      block: "blockquote"
    },
  ],

  keep_styles: false,

  // tag e attributi consentiti
  valid_elements: '@[id|style|src|alt|href|title|target],#p,-span,h2,h3,h4,blockquote,+a,-em,-strong,div[class],figure[class],img,figcaption,iframe[allowfullscreen],u,del,table,thead,tbody,tfoot,th,tr,td,col,colgroup,-ol,-ul,-li,-sub,-sup,br,hr',

  // stili in linea consentiti
  valid_styles: 'list-style-type',

  // questo non è assoluto, ma relativo allo schema (HTML5)
  valid_children: "+p[iframe],figure[img|figcaption],-figcaption[h2|h3|h4|figure],-h2[div,img,p,iframe],-h3[div,img,p,iframe],-h4[div,img,p,iframe],-p[img],-li[h2|h3|h4|p|blockquote],+div[iframe]"

}



var settings_focus = {

  width: 960,
  height: 300,
  content_css: "https://dipartimento.didacommunicationlab.it/dist/app.css?v=1578566027",
  body_class: 'content-right',
  language: "it",
  schema: "html5",
  skin: "oxide-jacopo",
  entity_encoding: "raw",
  element_format: "html",

  // plugins attivi
  plugins: 'advlist anchor charmap code contextmenu link lists searchreplace table visualblocks visualchars wordcount powerpaste',

  // menu e toolbar
  menubar: false,
  toolbar1: ' bold italic underline strikethrough | superscript subscript | styleselect | charmap | removeformat | numlist bullist | hr | link unlink anchor | undo redo | code',

  // toolbar mobile
  mobile: {
    theme: 'mobile'
  },

  // opzioni plugin
  powerpaste_allow_local_images: false,
  powerpaste_word_import: "clean",
  powerpaste_html_import: "clean",

  visualblocks_default_state: true,

  link_title: true,



  formats: {
    underline: {
      inline: 'u'
    },
    strikethrough: {
      inline: 'del'
    },
  },

  style_formats: [{
      title: "Titolo secondario (h3)",
      block: "h3"
    },
    {
      title: "Paragrafo",
      block: "p"
    },

  ],

  keep_styles: false,

  // tag e attributi consentiti
  valid_elements: '@[id|style|src|alt|href|title|target],#p,-span,h3,h4,+a,-em,-strong,u,del,-ol,-ul,-li,-sub,-sup,br',

  // stili in linea consentiti
  valid_styles: 'list-style-type',

  // questo non è assoluto, ma relativo allo schema (HTML5)
  valid_children: "+p[iframe],figure[img|figcaption],-figcaption[h2|h3|h4|figure],-h2[div,img,p,iframe],-h3[div,img,p,iframe],-h4[div,img,p,iframe],-p[img],-li[h2|h3|h4|p|blockquote],+div[iframe]"

}




var settings_leftinfo = {

  width: 960,
  height: 300,
  content_css: "https://dipartimento.didacommunicationlab.it/dist/app.css?v=1578566027",
  body_class: 'content-right',
  language: "it",
  schema: "html5",
  skin: "oxide-jacopo",
  entity_encoding: "raw",
  element_format: "html",

  // plugins attivi
  plugins: 'advlist anchor charmap code contextmenu link lists searchreplace table visualblocks visualchars wordcount powerpaste image',

  // menu e toolbar
  menubar: false,
  toolbar1: ' bold italic underline strikethrough | superscript subscript | styleselect | charmap | removeformat | numlist bullist | hr | link unlink | image | undo redo | code',

  // toolbar mobile
  mobile: {
    theme: 'mobile'
  },

  // opzioni plugin
  powerpaste_allow_local_images: false,
  powerpaste_word_import: "clean",
  powerpaste_html_import: "clean",

  visualblocks_default_state: true,

  link_title: true,



  formats: {
    underline: {
      inline: 'u'
    },
    strikethrough: {
      inline: 'del'
    },
  },

  style_formats: [{
      title: "Titolo secondario (h3)",
      block: "h3"
    },
    {
      title: "Paragrafo",
      block: "p"
    },

  ],

  keep_styles: false,

  // tag e attributi consentiti
  valid_elements: '@[id|style|src|alt|href|title|target],#p,-span,h3,h4,+a,-em,-strong,u,del,-ol,-ul,-li,-sub,-sup,br,img',

  // stili in linea consentiti
  valid_styles: 'list-style-type',

  // questo non è assoluto, ma relativo allo schema (HTML5)
  valid_children: "+p[iframe],figure[img|figcaption],-figcaption[h2|h3|h4|figure],-h2[div,img,p,iframe],-h3[div,img,p,iframe],-h4[div,img,p,iframe],-p[img],-li[h2|h3|h4|p|blockquote],+div[iframe]"

}
