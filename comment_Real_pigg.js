// ●コメントにリアルピグ画像
function comment_Real_pigg(pigg_w,action_rand,action_NO,image_quality,shadow_ON,face_direction,face_only,image_link,hover_ON,hover_image_NO){
 var action_Array   = new Array("default","glad","sad","angry","pose_hi","pose_please","pose_smail","pose_surprise");
 var no_image       = 'http://stat.profile.ameba.jp/profile_images/common/default.gif';
 var pig_image      = 'http://contents.pigg.ameba.jp/api/0/user/';
 
 $(".blogComment").each(function(){
  if($("a.commentAuthor",this).length==0){// アメブロ会員以外からのコメント（ＵＲＬなし）
   $(".commentBody",this).append('<div class="pigg_pic no_image"><img src="'+no_image+'" width="'+pigg_w+'"></div>');// イメージなし画像の設定
  }else{
   var comment_href=$("a.commentAuthor",this).attr("href");// コメント投稿者のリンクを求める
   if(comment_href.indexOf("http://ameblo.jp/",0)!=0){// アメブロ会員以外からのコメント（ＵＲＬあり）
    $(".commentBody",this).append('<div class="pigg_pic no_image"><img src="'+no_image+'" width="'+pigg_w+'"></div>');// イメージなし画像の設定
   }else{
    var Author_ID=comment_href.substring(17,comment_href.length-1); // アメーバＩＤ
// ----------- アクション -----------
    var Action,Action2,rnd_x;
    if(action_rand==1){
     rnd_x = Math.floor(Math.random()*action_Array.length);
     Action= "&action="+action_Array[rnd_x];
    }else{
     Action= "&action="+action_Array[action_NO];
    }
    if(hover_ON==1){
     if(action_rand==1){
      rnd_x = Math.floor(Math.random()*action_Array.length);
      Action2= "&action="+action_Array[rnd_x];
     }else{
      Action2= "&action="+action_Array[hover_image_NO];
     }
    }
// ----------- 画質 -----------
    var scale=""; 
    if(image_quality==1){scale="&scale=180";}
    if(image_quality==2){scale="&scale=264";}
    if(face_only==1 || face_only==2){scale="";}
// ----------- 影 -----------
    var shadow="";
    if(shadow_ON==0){shadow="&shadow=false";}
// ----------- 顔の向き -----------
    var direction="&direction=FL";
    if(face_direction=="R"){direction="&direction=FR";}
// ----------- フレーム -----------
    var frame="";
    if(face_only==0){frame="?part=all";}
    if(face_only==1){frame="?part=face&scale=104&frame=false";}
    if(face_only==2){frame="?part=face&scale=104&frame=true";}
// ----------- IMG URL -----------
    var image_URL,image_URL2;
    image_URL   = pig_image+Author_ID+'/image'+frame+direction+shadow+scale+Action;
    if(hover_ON==1){
     image_URL2 = pig_image+Author_ID+'/image'+frame+direction+shadow+scale+Action2;
    }
// ----------- IMG HTML -----------
    var image_html;
    if(hover_ON==1){
     image_html = '<img src="'+image_URL+'" width="'+pigg_w+'" onmouseover="this.src=\''+image_URL2+'\'" onmouseout="this.src=\''+image_URL+'\'">';
    }else{
     image_html = '<img src="'+image_URL+'" width="'+pigg_w+'">';
    }
// ----------- LINK and HTML APPEND -----------
    if(image_link==0){
     $(".commentBody",this).append('<div class="pigg_pic">'+image_html+'</div>');
    }else{
     if(image_link==1){
      $(".commentBody",this).append('<div class="pigg_pic"><a href="'+'http://ameblo.jp/'+Author_ID+'/" target="_blank">'+image_html+'</a></div>');
     }else{
      $(".commentBody",this).append('<div class="pigg_pic"><a href="'+'http://profile.ameba.jp/'+Author_ID+'/" target="_blank">'+image_html+'</a></div>');
     }
    }
   }
  }
 });
}
$(document).ready(function(){
 comment_Real_pigg(100,0,1,0,0,"R",0,1,1,5);
});

