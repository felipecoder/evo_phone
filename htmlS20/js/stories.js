const _0x2aa116=_0x2f6a;function _0x2f6a(_0x5c2328,_0x194c40){const _0x3f1ad4=_0x3f1a();return _0x2f6a=function(_0x2f6a3c,_0x398618){_0x2f6a3c=_0x2f6a3c-0x84;let _0x108ee4=_0x3f1ad4[_0x2f6a3c];return _0x108ee4;},_0x2f6a(_0x5c2328,_0x194c40);}(function(_0x50bd38,_0x542597){const _0x50c81e=_0x2f6a,_0x4e8f28=_0x50bd38();while(!![]){try{const _0xbfac30=parseInt(_0x50c81e(0x90))/0x1+parseInt(_0x50c81e(0xa6))/0x2+parseInt(_0x50c81e(0x9d))/0x3+parseInt(_0x50c81e(0x8f))/0x4+parseInt(_0x50c81e(0xa3))/0x5+parseInt(_0x50c81e(0x9f))/0x6+-parseInt(_0x50c81e(0x88))/0x7*(parseInt(_0x50c81e(0x9e))/0x8);if(_0xbfac30===_0x542597)break;else _0x4e8f28['push'](_0x4e8f28['shift']());}catch(_0x2f0f7b){_0x4e8f28['push'](_0x4e8f28['shift']());}}}(_0x3f1a,0xc19f1));function _0x3f1a(){const _0x1bea70=['.instagram-stories__btn-prev','querySelector','transform','6096912DwpPvo','653069gdvmKs','\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','resize','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22instagram-storie__progress-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22instagram-storie__progress-item__bar\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20','center\x20center\x20','forEach','css','.stories-opened','animate','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22instagram-storie__image\x22\x20style=\x22background-image:\x20url(\x27','https://cdn.dooca.store/180/files/gta-v-hd.jpg','translateZ(-','px)\x20rotateY(180deg)\x20translateX(-100%)','83265PqpazU','477616CqrCWm','7256580RIHmOO','map','innerHTML','Nome\x20do\x20Usuario','7696510KkzVEV','length','.face','1708514jyyFDV','instagram-stories__storie','style','transformOrigin','deg)','100%','entries','rotateY(-','clientWidth','https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_afterhours_taleofus2_256x256.jpg','images','588JKuXMC','block','div','querySelectorAll'];_0x3f1a=function(){return _0x1bea70;};return _0x3f1a();}const $faces=document[_0x2aa116(0x8b)](_0x2aa116(0xa5)),$cub=document[_0x2aa116(0x8d)]('.cub'),$btnNext=document['querySelector']('.instagram-stories__btn-next'),$btnPrev=document[_0x2aa116(0x8d)](_0x2aa116(0x8c));let faceIndex=0x0,storieIndex=0x0,imgIndex=0x0,imgInterval=0x0,imgProgress=0x0,countRotation=0x1,crrRotationDeg=0x0;const stories=[{'user':{'name':_0x2aa116(0xa2),'imageURL':_0x2aa116(0x86)},'images':[_0x2aa116(0x9a)]}],createElement=(_0x3888f0,_0x159da1)=>{const _0x565a5a=_0x2aa116,_0xb74fc8=document['createElement'](_0x3888f0);return Object[_0x565a5a(0xac)](_0x159da1)[_0x565a5a(0x95)](([_0x3b9f0d,_0x2034cc])=>_0xb74fc8['setAttribute'](_0x3b9f0d,_0x2034cc)),_0xb74fc8;},rotateCub=_0x439c1a=>{const _0x437b2a=_0x2aa116;$cub[_0x437b2a(0xa8)]['transform']=_0x437b2a(0x84)+_0x439c1a+_0x437b2a(0xaa);},renderInFace=(_0x50e449,_0x544539)=>{const _0x3b9039=_0x2aa116;$('.stories-opened')[_0x3b9039(0x96)]({'display':_0x3b9039(0x89)}),$(_0x3b9039(0x97))[_0x3b9039(0x98)]({'left':0x0+'vh'},0xc8),$faces[_0x50e449][_0x3b9039(0xa1)]='',$faces[_0x50e449]['append'](_0x544539);},nextFace=()=>{const _0x2ddc6b=_0x2aa116;if(stories[storieIndex][_0x2ddc6b(0x87)][imgIndex+0x1]){imgIndex++,imgProgress=0x0;return;}else{if(!stories[storieIndex+0x1])return;}storieIndex++,countRotation++,crrRotationDeg+=0x5a,faceIndex=(countRotation%0x4||0x4)-0x1,!stories[storieIndex]&&(storieIndex=0x0),renderInFace(faceIndex,createStorie(stories[storieIndex])),rotateCub(crrRotationDeg);},prevFace=()=>{const _0x220487=_0x2aa116;if(stories[storieIndex][_0x220487(0x87)][imgIndex-0x1]){imgIndex--,imgProgress=0x0;return;}if(crrRotationDeg<=0x0)return;storieIndex--,countRotation--,crrRotationDeg-=0x5a,faceIndex=(countRotation%0x4||0x4)-0x1,renderInFace(faceIndex,createStorie(stories[storieIndex])),rotateCub(crrRotationDeg);},closeStorie=()=>{const _0x240514=_0x2aa116;$(_0x240514(0x97))[_0x240514(0x98)]({'left':-0x23+'vh'},0xc8,function(){const _0x93e112=_0x240514;$(_0x93e112(0x97))[_0x93e112(0x96)]({'display':'none'});});},createStorie=_0x1a17b2=>{const _0x1babce=_0x2aa116;imgIndex=0x0,imgProgress=0x0;const _0x6821bd=createElement(_0x1babce(0x8a),{'class':_0x1babce(0xa7)}),_0x4704f8=()=>_0x6821bd[_0x1babce(0xa1)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22instagram-storie__progress\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x1a17b2[_0x1babce(0x87)][_0x1babce(0xa0)]((_0x335c6c,_0x47c8fc)=>_0x1babce(0x93)+(_0x47c8fc===imgIndex?imgProgress+'%':_0x47c8fc<imgIndex?_0x1babce(0xab):'0%')+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['join']('')+_0x1babce(0x99)+_0x1a17b2[_0x1babce(0x87)][imgIndex]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22instagram-storie__image_show\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22'+_0x1a17b2[_0x1babce(0x87)][imgIndex]+_0x1babce(0x91),_0x17b594=()=>{clearInterval(imgInterval),imgInterval=setInterval(()=>{const _0x5b20d1=_0x2f6a;imgProgress+=0xa/0x3;if(imgIndex===_0x1a17b2['images'][_0x5b20d1(0xa4)])return;if(imgProgress>0x64){closeStorie(),imgIndex++,imgProgress=0x0;return;}_0x4704f8();},0xc8);};return _0x4704f8(),_0x17b594(),_0x6821bd;};$cub[_0x2aa116(0xa8)]['transformOrigin']=_0x2aa116(0x94)+-$cub[_0x2aa116(0x85)]/0x2+'px',$faces[0x2][_0x2aa116(0xa8)][_0x2aa116(0x8e)]=_0x2aa116(0x9b)+$faces[0x2][_0x2aa116(0x85)]+'px)\x20rotateY(180deg)\x20translateX(-100%)',window['addEventListener'](_0x2aa116(0x92),_0x4d3cdc=>{const _0x141f62=_0x2aa116;$cub[_0x141f62(0xa8)][_0x141f62(0xa9)]=_0x141f62(0x94)+-$cub['clientWidth']/0x2+'px',$faces[0x2]['style']['transform']=_0x141f62(0x9b)+$faces[0x2]['clientWidth']+_0x141f62(0x9c);});function chamastorie(){renderInFace(0x0,createStorie(stories[storieIndex]));}