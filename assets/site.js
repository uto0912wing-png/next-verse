(function(){
  var EMBED=/^https:\/\/open\.spotify\.com\/embed\/(album|track)\/[A-Za-z0-9]{22}$/;
  document.addEventListener('click',function(e){
    var b=e.target.closest('.player .load'); if(!b) return;
    var box=b.closest('.player'), url=box.getAttribute('data-embed');
    if(!EMBED.test(url)) return;
    var f=document.createElement('iframe');
    f.src=url+'?utm_source=generator'; f.width='100%'; f.height='152'; f.loading='lazy';
    f.title='Spotifyプレーヤー'; f.setAttribute('allow','encrypted-media');
    b.replaceWith(f);
  });
  var bar=document.querySelector('.filters'); if(!bar) return;
  bar.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    var k=b.getAttribute('data-filter');
    bar.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
    document.querySelectorAll('.card').forEach(function(c){c.hidden=!(k==='all'||c.getAttribute('data-cat')===k)});
  });
})();
