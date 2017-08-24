var videos = [
  'https://www.youtube.com/embed/7Kj1TdmA0GQ',
  'https://www.youtube.com/embed/51_pr-8xtho',
  'https://www.youtube.com/embed/IT-LGj9N1oo',
  'https://www.youtube.com/embed/33p-_JiZw8o'
];


function verVideo(vid){

  //Cambiar el source del reproductor
  var v = videos[vid];
  var vidFrame = document.getElementById('vid_frame');
  vidFrame.setAttribute("src", v);

  //Volver fondo blanco a la lista, pause.
  var x = document.getElementsByClassName("video-link");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#fff";
    x[i].getElementsByTagName("I")[0].innerHTML = "play_circle_filled";
  }

  //Fondo verde a link seleccionado
  var link = document.getElementById('video-link-id'+(vid+1));
  link.setAttribute("style", 'background-color: #d1fcad;');

  link.getElementsByTagName("I")[0].innerHTML = "play_circle_outline";

}
