function name__123(){
    name__main=document.getElementById('login__name').value;
    document.getElementById('box__login').style.display='none';
    if(name__main==''){
        alert('Nhập chữ hộ bố mài')
    }else{
    document.getElementById('name').innerHTML= name__main
}}