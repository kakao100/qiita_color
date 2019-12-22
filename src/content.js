
window.onload = function() {
//濃い
var color1 = '#808080';
//薄い
var color2 = '#696969'
function change_color(name,color_code){
  var space = document.getElementsByClassName(name).item(0);
  if(space!=null)
  space.style.backgroundColor = color_code;
  
}
change_color('st-Header',color1);

change_color('st-HeaderContainer',color2);

//下書き保存の背景色
change_color('btn btn-primary editorSubmit_submitBtn',color1);
//下書き保存の右側の色
change_color('btn btn-primary dropdown-toggle editorSubmit_dropdownToggle',color1);
//ヘッダの投稿するってやつ
change_color('st-Header_postButton mr-2 px-2',color2);
//トレンドの右のバー
change_color('p-home_menuItem p-1 pl-2 pl-1@s mb-1 p-home_menuItem-active',color1);
};

