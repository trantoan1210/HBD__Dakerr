function name__123(){
    name__main=document.getElementById('login__name').value;
   
    if(name__main==''){
        alert('Nhập chữ hộ bố mài')
    }else{ 
        document.getElementById('box__login').style.display='none';
    document.getElementById('name').innerHTML= name__main
}}