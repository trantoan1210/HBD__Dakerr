let x=0
function name__123(){
    name__main=document.getElementById('login__name').value;
   
    if(name__main==''){
        switch (x){
            case 4:{ alert('Nhập đê ko biết chữ sao ko nhập')
            break;}
            case 8: {alert('cố chấp thế nhở, nhập chữ nào')
            break;
        }
            default :{alert('Nhập chữ hộ bố mài')
    
        }
        }
        x++
    }else{ 
        document.getElementById('box__login').style.display='none';
    document.getElementById('name').innerHTML= name__main
}}