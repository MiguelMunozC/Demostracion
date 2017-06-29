var videos = [
  'https://www.youtube.com/embed/icYRFRXQIyM',
  'https://www.youtube.com/embed/0AvuweztG4Q',
  'https://www.youtube.com/embed/8yn3ViE6mhY'
];


function verVideo(vid){

  var v = videos[vid];
  var vidFrame = document.getElementById('vid_frame');
  vidFrame.setAttribute("src", v);

  // var links = document.getElementsByClassName('video-link');
  // links.setAttribute("style", 'background-color: #fff;');

  var link = document.getElementById('video-link-id'+(vid+1));
  link.setAttribute("style", 'background-color: #d1fcad;');

}
