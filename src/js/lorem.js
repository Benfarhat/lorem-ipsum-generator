/*
 * Simple lorem ipsum generator
 * Author: @benfarhat
 * Github: https://github.com/Benfarhat
 * Licensed under the MIT license
 */
    // Put here whatever you want: Lyrics song, Universal Declaration of Human Rights, a Poem
    var dictionary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl augue. Sed diam dui, euismod ultrices commodo posuere, imperdiet eu augue. Curabitur sollicitudin lectus ut velit feugiat cursus. Pellentesque convallis elementum magna vitae scelerisque. Ut commodo, nisl ut aliquet egestas, leo turpis congue ex, in convallis tortor diam et elit. Donec volutpat a elit eget egestas. Aliquam a elit vel odio aliquet posuere. Morbi volutpat leo id arcu pulvinar, sit amet varius ante tincidunt. Proin iaculis eros at libero vestibulum, id euismod urna blandit. Nam feugiat sodales imperdiet. Nulla et ultrices ante. Vestibulum varius pretium scelerisque. Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret. nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari. quidam autem non tam id reprehendunt, si remissius agatur, sed tantum studium tamque multam operam ponendam in eo non arbitrantur. erunt etiam, et ii quidem eruditi Graecis litteris, contemnentes Latinas, qui se dicant in Graecis legendis operam malle consumere. postremo aliquos futuros suspicor, qui me ad alias litteras vocent, genus hoc scribendi, etsi sit elegans, personae tamen et dignitatis esse negent. [2] Contra quos omnis dicendum breviter existimo. Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro, quo a nobis philosophia defensa et collaudata est, cum esset accusata et vituperata ab Hortensio. qui liber cum et tibi probatus videretur et iis, quos ego posse iudicare arbitrarer, plura suscepi veritus ne movere hominum studia viderer, retinere non posse. Qui autem, si maxime hoc placeat, moderatius tamen id volunt fieri, difficilem quandam temperantiam postulant in eo, quod semel admissum coerceri reprimique non potest, ut propemodum iustioribus utamur illis, qui omnino avocent a philosophia, quam his, qui rebus infinitis modum constituant in reque eo meliore, quo maior sit, mediocritatem desiderent. [3] Sive enim ad sapientiam perveniri potest, non paranda nobis solum ea, sed fruenda etiam [sapientia] est; sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum id, quod quaeritur, sit pulcherrimum. etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? sin laboramus, quis est, qui alienae modum statuat industriae? nam ut Terentianus Chremes non inhumanus, qui novum vicinum non vult 'fodere aut arare aut aliquid ferre denique' -- non enim illum ab industria, sed ab inliberali labore deterret --, sic isti curiosi, quos offendit noster minime nobis iniucundus labor.";
(function() {

   
    window.addEventListener('DOMContentLoaded',function(){
        let words = dictionary.replace(/[.,\[\]\/\\'"#!$%\^&\*;:?{}=\-_`~()0-9]/g,"").replace(/\s{2,}/g," ").split(' '),
            max = words.length - 1;
        
        document.querySelectorAll('[data-lorem-count]').forEach(function(item, index){
          let count = parseInt(item.getAttribute('data-lorem-count')),
            start = content = item.hasAttribute('data-lorem-start') ? item.getAttribute('data-lorem-start') : '',
            end = item.hasAttribute('data-lorem-end') ? item.getAttribute('data-lorem-end'): '.';
           

          for(var i = 0; i <= count - 1 ; i++){
            content += words[Math.random() * max^0]; 
            content += (i < count - 1) ? ' ' : end;
          }
          if(item.tagName=='INPUT'){
          item.value = content;
          } else {
          item.innerHTML = content;
          }
        });
        
       });

})();

function lorem(count, start, end){
  let words = dictionary.replace(/[.,\[\]\/\\'"#!$%\^&\*;:?{}=\-_`~()0-9]/g,"").replace(/\s{2,}/g," ").split(' '),
    c = count|0,
    s = l = (start !== undefined && start.big) ? start : '',
    e = (end !== undefined && end.big) ? end : '.',
    m = words.length - 1; 
  for(var i = 0; i <= c - 1 ; i++){
          l += words[Math.random() * m^0]; 
          l += (i < c - 1) ? ' ' : e;
  }
  document.write(l);
};

function randomLorem(count, start, end, dict, voyel){
  let 
    c = count|0,
    s = l = (start !== undefined && start.big) ? start : '',
    e = (end !== undefined && end.big) ? end : '.',
    d = (dict !== undefined) ? dict : 'abcdefghijklmnopqrstuvwxyz',
    v = (voyel !== undefined) ? voyel : 'aeiouy',
    words = d.replace(/[.,\[\]\/\\'"#!$%\^&\*;:?{}=\-_`~()0-9]/g,"").replace(/\s{2,}/g," ").split(' '),
    len;
  for(var i = 0; i <= c - 1 ; i++){
          len = (Math.random()*5^0) + 1;
          if(v.length > 0){
            for(a=b=[];a--+len;)l+=d[cc=Math.random()*((d.length -1)|0)^0]+v[cc%(v.length)];
          } else {
          for(a=b=[];a--+len;)l+=d[cc=Math.random()*((d.length -1)|0)^0];
          }
          l += (i < c - 1) ? ' ' : e;
  }
  document.write(l);
}